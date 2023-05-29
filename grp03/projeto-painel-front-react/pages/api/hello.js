// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(req.body)
  res.status(200).json([{ name: 'John Doe' }, { name: 'bruno oliveira' }])

  // function buscaDados(){
  //   fetch('http://localhost:3001/api/hello',  {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ nome: 'João', idade: 30 })
  //   })
  //   .then(response => response.json())
  //   .then((dados)=>{
  //     console.log(dados)
  //     setLista(dados)
  //   })
  //   .catch((erro)=>console.log(erro))
  // }
}
