const Senha = require('./Models/Senhas');
const Guiche = require('./Models/Guiches');
const SenhaGuiche = require('./Models/SenhaGuiche');
const Movimentacoes = require('./Models/Movimentacoes');

const yup = require('yup');
const { json } = require('express/lib/response');

class PainelController {
   



    async index(req, res){
        const modelSenha = await Senha()
        let valor = modelSenha.findAll()
        const data = await valor;
        console.log(data)

        return res.status(200).json({
            message: "mostrando todas as senhas geradas",
            data
        })

        
    }

    async add(req, res){
        // gerar senhas aleatorias
        const { numero_guiche } = req.body
        let schema = yup.object().shape({
            numero_guiche: yup.string().required(),
        })

        
        if(!(await schema.isValid(req.body))){
            return res.status(400).json({
                message: "numero_guiche não existe ou estar vazio"
            })
        }

        const modelGuiche = await Guiche()
        let guiche = await modelGuiche.findOne({where: {numero_guiche: numero_guiche} })

        if(guiche){
            return res.status(400).json({
                message: "Esse guichê já existe"
            })
        }

        await modelGuiche.create({
            numero_guiche: numero_guiche
        })

        return res.status(200).json({
            message: "Guicher criado"
        })

    }

    async chamarSenha(req, res){
        // gerar senhas aleatorias
        const modelSenha = await Senha()
        const modelGuiche = await Guiche()
        const modelSenhaGuiche = await SenhaGuiche()
        const movimentacao = await Movimentacoes()

        const { numero_guiche, numero_senha } = req.body

        let senha = await modelSenha.findOne({where: {senha: numero_senha, status: 'disponivel'}})
        let guiche = await modelGuiche.findOne({where: {numero_guiche: numero_guiche, status: 'disponivel'} })
        if(!guiche || !senha){
            return res.status(400).json({
                message: "A senha ou guichê estar indisponivel",
            })
        }
  
        senha.status = 'indisponivel'
        await senha.save()
        guiche.status = 'indisponivel'
        await guiche.save()

       await modelSenhaGuiche.create({
            id_senha: senha.id,
            id_guiche: guiche.id
        })

        await movimentacao.create({
            numero_guiche: numero_guiche,
            numero_senha: numero_senha,
            status: 'em_andamento'
        })


        let todosDados = []
        let existeAndamento = 'nao'
        console.log(guiche)
        let valor = await modelSenha.findAll({where: {status: 'disponivel'}})
        if(guiche.id){
            let guicheOne = await modelSenhaGuiche.findOne({where: {id_guiche: guiche.id}})
            if(guicheOne){
                let senha = await modelSenha.findAll({where: {id: guicheOne.dataValues.id_senha}})
                todosDados.push({...senha[0].dataValues});
                existeAndamento = 'sim'
            }
        }
        todosDados.push(...valor);
        
       
        return res.status(200).json({
            message: "mostrando todas as senhas geradas",
            data: todosDados,
            andamento: existeAndamento
        })
    }

    async trazerGuiches(req, res){
        // gerar senhas aleatorias
        const modelGuiche = await Guiche()

        const { numero_guiche } = req.body

        let guiche = await modelGuiche.findAll()
  

        return res.status(200).json({
            message: "guiches",
            guiches: guiche
        })
    }


    async trazerSenhasGuiches(req, res){
        const modelSenha = await Senha()
        const modelGuiche = await Guiche()
        const modelSenhaGuiche = await SenhaGuiche()

        let historio = await modelSenhaGuiche.findAll({where: {status: 'em_atendimento'}, order: [['createdAt', 'DESC']], limit: 5})

        function retorno(historico) {
            return new Promise(async (resolve, reject) => {
              let dados = [];
          
              for (const val of historico) {
                let senha = await modelSenha.findOne({ where: { id: val.id_senha } });
                let guiche = await modelGuiche.findOne({ where: { id: val.id_guiche } });
          
                dados.push({
                  senha: senha.senha,
                  guiche: guiche.numero_guiche,
                  tipo_atendimento: senha.tipo_atendimento,
                  data_hora: val.createdAt
                });
              }
          
              resolve(dados);
            });
          }
          
          try {
            const dados = await retorno(historio);
          
            return res.status(200).json({
              message: "historio e chamadas",
              historico: dados
            });
          } catch (error) {
            return res.status(500).json({
              message: "Erro ao trazer senhas de guichês",
              error: error.message
            });
          }
          
    }

    async update(req, res){

    }


    async finalizar(req, res){
        const {senha, guiche} = req.body
        const modelSenhaGuiche = await SenhaGuiche()
        const modelSenha = await Senha()
        const modelGuiche = await Guiche()
        const movimentacao = await Movimentacoes()
        let senhas = await modelSenha.findOne({where: {senha: senha}})
        let dados = await modelSenhaGuiche.findOne({where: {id_senha: senhas.id}})
        if(dados){
           await dados.destroy()
           let guiches = await modelGuiche.findOne({where: {numero_guiche: guiche} })
            guiches.status = 'disponivel'
            await guiches.save()

            await movimentacao.create({
                numero_guiche: guiche,
                numero_senha: senha,
                status: 'finalizado'
            })

            return res.status(200).json({
                message: "Registro apagado",
            });
        }
    }


    async cancelar(req, res){
        const {senha, guiche} = req.body
        const modelSenhaGuiche = await SenhaGuiche()
        const modelSenha = await Senha()
        const modelGuiche = await Guiche()
        const movimentacao = await Movimentacoes()
        let senhas = await modelSenha.findOne({where: {senha: senha}})
        let dados = await modelSenhaGuiche.findOne({where: {id_senha: senhas.id}})
        if(dados){
           await dados.destroy()
           let guiches = await modelGuiche.findOne({where: {numero_guiche: guiche} })
            guiches.status = 'disponivel'
            await guiches.save()

            await movimentacao.create({
                numero_guiche: guiche,
                numero_senha: senha,
                status: 'cancelado'
            })

            return res.status(200).json({
                message: "Registro apagado",
            });
        }

        senhas.status = 'indisponivel'
        await senhas.save()

        await movimentacao.create({
            numero_guiche: guiche,
            numero_senha: senha,
            status: 'cancelado'
        })

        return res.status(200).json({
            message: "Registro apagado",
        });
    }





}

module.exports = new PainelController();