const User = require('./Models/User');
const bcrypt = require('bcryptjs');
const yup = require('yup');


class LoginController{

    async index(req, res){ 
        const user = await User();
        const {email, senha} = req.body;

          // validação de campos pelo yup 
          let schema = yup.object().shape({
            email: yup.string().email().required(),
            senha: yup.string().required(),
        })

        
        if(!(await schema.isValid(req.body))){
            return res.status(400).json({
                message: "dados invalidos"
            })
        }
    //   fim yup

         let userExistEmail = await user.findOne({ where:{ email: email} });

        const senhaVerifica = await bcrypt.compare(senha, userExistEmail.senha);

        if(userExistEmail && senhaVerifica){

            return res.status(200).json({
                message: "conectado com sucesso!!",
                userExistEmail
            })

        }else{
            return res.status(400).json({
                message: "email ou senha errado"
            })
        }



    }

}


module.exports = new LoginController();
