const Senha = require('./Models/Senhas');
const yup = require('yup');
const { json } = require('express/lib/response');
const SenhaGuiche = require('./Models/SenhaGuiche');

class JobsController {
   



    async index(req, res){
        const { guiche } = req.body
        let todosDados = []
        let existeAndamento = 'nao'
        console.log(guiche)
        const modelSenha = await Senha()
        const modelSenhaGuiche = await SenhaGuiche()
        let valor = await modelSenha.findAll({where: {status: 'disponivel'}})
        if(guiche){
            let guicheOne = await modelSenhaGuiche.findOne({where: {id_guiche: guiche}})
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

    async add(req, res){
        // gerar senhas aleatorias
        const { tipo_atendimento } = req.body;
        let schema = yup.object().shape({
            tipo_atendimento: yup.string().required(),
        })

        
        if(!(await schema.isValid(req.body))){
            return res.status(400).json({
                message: "prioridade precisa ter valor sim ou nao"
            })
        }


        if(tipo_atendimento != 'prioridade' && tipo_atendimento != 'geral' && tipo_atendimento != 'exame'){
            return res.status(400).json({
                message: "tipo_atendimento só pode ser prioridade, geral ou exame"
            })
        }

        const modelSenha = await Senha()

        function gerarSequenciaAleatoria() {
            var sequencia = [];
            
            for (var i = 0; i < 5; i++) {
              var numeroAleatorio = Math.floor(Math.random() * 10); // Gera um número aleatório entre 0 e 9
              sequencia.push(numeroAleatorio);
            }
            
            return sequencia.join(''); // Junta os dígitos em uma única string
        }

        const senhaCriada = await modelSenha.create({
            senha: gerarSequenciaAleatoria(),
            tipo_atendimento: tipo_atendimento
        })

        if(senhaCriada){
            return res.status(200).json({
                message: "Senha criada com sucesso, guarde sua senha!!",
                senha: senhaCriada.senha
            })
        }
      
    }


    async edit(req, res){

    }

    async update(req, res){

    }


    async delete(req, res){
 
    }






}

module.exports = new JobsController();