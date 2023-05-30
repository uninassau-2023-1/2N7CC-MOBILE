const express = require('express')
const cors = require('cors')
const router = require('./routes')
const { sequelize } = require('./infra/models')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
router(app)

app.listen(port || 3000, () => console.log(`Server is running on port ${port}`));

sequelize.authenticate()
.then(() => {
  console.log('Conexão com o banco estabelecida com sucesso.');
})
.catch((error) => {
  console.error('Erro ao conectar-se ao banco de dados:', error);
});