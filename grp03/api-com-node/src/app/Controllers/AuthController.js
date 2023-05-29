const jwt = require('jsonwebtoken');
const User = require('./Models/User');
const bcrypt = require('bcryptjs');
const yup = require('yup');

const secretKey = 'matheus123'; // Chave secreta para assinar e verificar o token JWT

const login = async (req, res) => {
  // Lógica de autenticação - verifique as credenciais do usuário
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
    if(userExistEmail){
      const senhaVerifica = await bcrypt.compare(senha, userExistEmail.senha);

      if(senhaVerifica){
          
          const token = jwt.sign({ userId: userExistEmail.id }, secretKey, { expiresIn: '30d' });

          return res.status(200).json({
              message: "conectado com sucesso!!",
              user: userExistEmail,
              token_acesso: token
          })
          

      }else{
          return res.status(400).json({
              message: "email ou senha errado"
          })
      }
    }else{
      return res.status(400).json({
          message: "email ou senha errado"
      })
    }

    
  
  
};

const verifyToken = (req, res, next) => {
  // Verifique o token JWT enviado no cabeçalho Authorization
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  const tokenSemBearer = token.replace('Bearer ', '');
  // Verifique o token JWT usando a chave secreta
  jwt.verify(tokenSemBearer, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    // O token JWT é válido
    // Armazene as informações do usuário no objeto `req` para uso posterior nas rotas protegidas
    req.userId = decoded.userId;
    next();
  });
};

module.exports = { login, verifyToken };
