from datetime import datetime, timedelta
from flask import Flask, jsonify, request
import mysql.connector
import random

app = Flask(__name__)

# Configuração da conexão com o banco de dados MySQL
config = {
    'user': 'root',
    'password': '0sLB1twIIESGeRZKS5KH',
    'host': 'containers-us-west-65.railway.app',
    'port': '6194',
    'database': 'railway',
    'raise_on_warnings': True
}


def consulta_banco(query):
    try:
        # Conecta ao banco de dados
        conn = mysql.connector.connect(**config)
        cursor = conn.cursor()
        cursor.execute(query)
        results = cursor.fetchall()
        cursor.close()
        conn.close()

        return results, cursor.column_names

    except mysql.connector.Error as err:
        # Trata erros de conexão ou consulta SQL
        return jsonify({'error': str(err)})


def commit_banco(query):
    try:
        # Conecta ao banco de dados
        conn = mysql.connector.connect(**config)
        cursor = conn.cursor()
        cursor.execute(query)
        conn.commit()
        cursor.close()
        conn.close()

    except mysql.connector.Error as err:
        # Trata erros de conexão ou consulta SQL
        return jsonify({'error': str(err)})


# Método que retorna a primeira tabela do banco de dados
@app.route('/relatorios', methods=['GET'])
def get_relatorio():
    table = []
    date_begin = datetime.strptime(str(request.json['data_inicio']), "%Y-%m-%d").date()
    date_end = datetime.strptime(str(request.json['data_fim']), "%Y-%m-%d").date() + timedelta(days=1)

    tipo_rel = request.json['tipo_rel']

    if tipo_rel == '0':
        count = (date_end - date_begin).days

        for c in range(count):
            day = date_begin + timedelta(days=c)
            day_end = date_begin + timedelta(days=c + 1)
            results, columns = consulta_banco(f"SELECT DATE_FORMAT(issued_at, '%Y-%m-%d') AS dia, COUNT(*) AS "
                                              f"quantidade_emitidas, COUNT(CASE WHEN called_at IS NOT NULL THEN 1 END) AS "
                                              f"quantidade_atendidas, ticket_type FROM Tickets WHERE issued_at BETWEEN "
                                              f"'{day}' AND '{day_end}' GROUP BY "
                                              f"DATE_FORMAT(issued_at, '%Y-%m-%d'), ticket_type")
            if len(results) > 0:

                dic = {
                    'date': '',
                    'sg_emitidas': 0,
                    'sp_emitidas': 0,
                    'se_emitidas': 0,
                    'sg_atendidas': 0,
                    'sp_atendidas': 0,
                    'se_atendidas': 0,
                    'senhas_totais': 0,
                    'senhas_atendidas': 0
                }

                for row in results:

                    date = row[0]

                    dic['date'] = date
                    if row[3] == 'SG':
                        dic['sg_emitidas'] = row[1]
                        dic['sg_atendidas'] = row[2]
                    elif row[3] == 'SP':
                        dic['sp_emitidas'] = row[1]
                        dic['sp_atendidas'] = row[2]
                    else:
                        dic['se_emitidas'] = row[1]
                        dic['se_atendidas'] = row[2]

                    dic['senhas_totais'] = dic['senhas_totais'] + row[1]
                    dic['senhas_atendidas'] = dic['senhas_atendidas'] + row[2]

                table.append(dic)

    elif tipo_rel == '1':
        results, columns = consulta_banco(f"SELECT ticket_number AS Senha, ticket_type AS Tipo_Senha, "
                                          f"DATE_FORMAT(issued_at, '%Y-%m-%d %H:%i:%s') AS Data_Hora_Emissão, "
                                          f"DATE_FORMAT(called_at, '%Y-%m-%d %H:%i:%s') AS Data_Hora_Atendimento,"
                                          f"counter_name AS guiche FROM Tickets AS tk INNER JOIN Counters AS co "
                                          f"ON co.counter_id = tk.counter_id WHERE issued_at "
                                          f"BETWEEN '{date_begin}' AND '{date_end}' ORDER BY issued_at ASC")

        for row in results:
            row_dict = {}
            for i in range(len(columns)):
                row_dict[columns[i]] = row[i]
            table.append(row_dict)
    else:
        count = (date_end - date_begin).days

        for c in range(count):

            day = date_begin + timedelta(days=c)
            day_end = date_begin + timedelta(days=c+1)
            results, columns = consulta_banco(f"SELECT ticket_type, issued_at, called_at FROM Tickets WHERE issued_at "
                                              f"BETWEEN '{day}' AND '{day_end}'AND called_at IS NOT NULL")

            count_sg, time_sg = 0, 0
            count_sp, time_sp = 0, 0
            count_se, time_se = 0, 0
            if len(results) > 0:
                date = results[0][1]
                for pos, row in enumerate(results):
                    date = row[1].date()

                    if row[0] == 'SP':
                        dif = row[2] - row[1]
                        time_sp = time_sp + (dif.seconds // 60)
                        count_sp = count_sp + 1
                    elif row[0] == 'SE':
                        dif = row[2] - row[1]
                        time_se = time_se + (dif.seconds // 60)
                        count_se = count_se + 1
                    else:
                        dif = row[2] - row[1]
                        time_sg = time_sg + (dif.seconds // 60)
                        count_sg = count_sg + 1

                if count_sp != 0:
                    dic = {'tempo_medio': time_sp // count_sp, 'tipo_senha': 'SP', 'data': date}
                    table.append(dic)

                if count_se != 0:
                    dic = {'tempo_medio': time_se // count_se, 'tipo_senha': 'SE', 'data': date}
                    table.append(dic)

                if count_sg != 0:
                    dic = {'tempo_medio': time_sg // count_sg, 'tipo_senha': 'SG', 'data': date}
                    table.append(dic)

    return jsonify(table)


# Método que gera uma nova senha com base na quantidade de senhas existentes no banco de dados
@app.route('/gerar_senha', methods=['POST'])
def gerar_senha():
    tipo_senha = request.json['tipo_senha']
    senhas = {'0': 'SP',
              '1': 'SG',
              '2': 'SE'}

    date_begin = datetime.now()
    date_end = datetime.now().date() + timedelta(days=1)

    results, columns = consulta_banco(f"SELECT ticket_number FROM Tickets WHERE issued_at BETWEEN "
                                      f"'{date_begin.date()}' AND '{date_end}' AND ticket_type = '{senhas[tipo_senha]}'"
                                      f" ORDER BY ticket_id DESC")

    if len(results) == 0:
        seq = '01'
    else:
        index = results[0][0].index(senhas[tipo_senha])
        pos = results[0][0][index + 2:]
        pos = int(pos) + 1
        seq = f'{pos}' if pos > 9 else f'0{pos}'

    year = str(date_begin.date().year)[2:]
    month = f'0{date_begin.date().month}' if date_begin.date().month < 10 else date_begin.date().month
    day = f'0{date_begin.date().day}' if date_begin.date().day < 10 else date_begin.date().day
    senha = f'{year}{month}{day}-{senhas[tipo_senha]}{seq}'

    commit_banco(f"INSERT INTO Tickets (ticket_number, ticket_type, issued_at) VALUES ('{senha}', "
                 f"'{senhas[tipo_senha]}', '{date_begin}')")

    return jsonify({'senha': senha,
                    'data': date_begin})


# Método que chama a próxima senha de acordo com a lógica
@app.route('/ultimas_senhas', methods=['GET'])
def ultimas_senhas():
    table = []
    date_begin = datetime.now()
    date_end = datetime.now().date() + timedelta(days=1)

    results, columns = consulta_banco(f"SELECT ticket_number AS Senha, ticket_type AS Tipo_Senha, "
                                      f"DATE_FORMAT(issued_at, '%Y-%m-%d %H:%i:%s') AS Data_Hora_Emissão, "
                                      f"DATE_FORMAT(called_at, '%Y-%m-%d %H:%i:%s') AS Data_Hora_Atendimento,"
                                      f"counter_name AS Guichê FROM Tickets AS tk INNER JOIN Counters AS co "
                                      f"ON co.counter_id = tk.counter_id WHERE issued_at "
                                      f"BETWEEN '{date_begin.date()}' AND '{date_end}' AND called_at IS NOT NULL "
                                      f"ORDER BY issued_at DESC")

    if len(results) > 0:
        for row in results[:5]:
            row_dict = {}
            for i in range(len(columns)):
                row_dict[columns[i]] = row[i]
            table.append(row_dict)
    return jsonify(table)


# Método que chama a próxima senha de acordo com a lógica
@app.route('/chamar_senha', methods=['GET'])
def chamar_senha():
    table = []
    date_begin = datetime.now()
    date_end = datetime.now().date() + timedelta(days=1)
    tm_sp = 15
    tm_sg = 5
    dp_sp = [5, -5]
    dp_sg = [3, -3]
    tm_se = [1, 5]

    guiches, columns = consulta_banco("SELECT counter_id FROM Counters")
    guiches = [row[0] for row in guiches]
    guiche = random.choice(guiches)

    results, columns = consulta_banco("SELECT ticket_id, ticket_number, issued_at AS senha FROM Tickets WHERE "
                                      "ticket_type='SP' AND called_at IS NULL AND issued_at BETWEEN "
                                      f"'{date_begin.date()}' AND '{date_end}' ORDER BY ticket_id ASC")

    if len(results) > 0:
        dic = {columns[1]: results[0][1],
               'Guichê': guiche}
        table.append(dic)
        ajuste = random.choice(dp_sp)
        tm_sp = tm_sp + ajuste
        date_new = results[0][2] + timedelta(minutes=tm_sp)
        commit_banco(f"UPDATE Tickets SET called_at = '{date_new}', counter_id = '{guiche}' "
                     f"WHERE ticket_id = '{results[0][0]}'")
    else:
        results, columns = consulta_banco("SELECT ticket_id, ticket_number AS senha, issued_at FROM Tickets WHERE "
                                          "ticket_type='SE' AND called_at IS NULL AND issued_at BETWEEN "
                                          f"'{date_begin.date()}' AND '{date_end}' ORDER BY ticket_id ASC")

        if len(results) > 0:
            dic = {columns[1]: results[0][1],
                   'Guichê': guiche}
            table.append(dic)
            ajuste = random.choice(tm_se)
            date_new = results[0][2] + timedelta(minutes=ajuste)
            commit_banco(f"UPDATE Tickets SET called_at = '{date_new}', counter_id = '{guiche}'"
                         f" WHERE ticket_id = '{results[0][0]}'")
        else:
            results, columns = consulta_banco("SELECT ticket_id, ticket_number AS senha, issued_at FROM Tickets WHERE "
                                              "ticket_type='SG' AND called_at IS NULL AND issued_at BETWEEN "
                                              f"'{date_begin.date()}' AND '{date_end}' ORDER BY ticket_id ASC")
            if len(results) > 0:
                dic = {columns[1]: results[0][1],
                       'Guichê': guiche}
                table.append(dic)
                ajuste = random.choice(dp_sg)
                tm_sg = tm_sg + ajuste
                date_new = results[0][2] + timedelta(minutes=tm_sg)
                commit_banco(f"UPDATE Tickets SET called_at = '{date_new}', counter_id = '{guiche}'"
                             f" WHERE ticket_id = '{results[0][0]}'")
            else:
                dic = {'mensagem': 'Não existe senha na fila'}
                table.append(dic)

    return jsonify(table)


if __name__ == '__main__':
    app.run(port=6969,
            threaded=True,
            processes=-1)
