//conexao com o banco
const oracledb = require('oracledb');
console.log("Conexao ao banco realizado.")

async function run() {
  let connection;

  try {
    connection = await oracledb.getConnection({
      user: "mywork",
      password: "1234",
      connectString: "localhost/XE"  // ou qualquer que seja o seu host e sid/service_name
    });

    console.log('Successfully connected to Oracle Database');

    // Execute some queries, etc.
    
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();   // always close connections when you're done
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();


// Função para gerar um número aleatório entre dois valores
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Variáveis para controlar as senhas
let senhaPrioritaria = 0;
let senhaNormal = 0;
let ultimaSenhaNormal = 0;
let ultimaConsultorio = 0;

// Função para gerar uma nova senha
function gerarNovaSenha() {
  ultimaSenhaNormal = senhaNormal;
  ultimaConsultorio = gerarNumeroAleatorio(1, 5);

  if (senhaPrioritaria < 9999) {
    senhaPrioritaria++;
  } else {
    senhaPrioritaria = 1;
  }

  if (senhaNormal < 9999) {
    senhaNormal++;
  } else {
    senhaNormal = 1;
  }

  // Renderizar as senhas e o consultório
  document.querySelector(".senha-number").textContent = senhaNormal.toString().padStart(4, "0");
  document.querySelector(".consultorio-number").textContent = ultimaConsultorio.toString();
}

// Função para chamar a senha anterior
function chamarNovamente() {
  // Verificar se há uma senha anterior
  if (ultimaSenhaNormal !== 0) {
    senhaNormal = ultimaSenhaNormal;
    document.querySelector(".senha-number").textContent = senhaNormal.toString().padStart(4, "0");
    document.querySelector(".consultorio-number").textContent = ultimaConsultorio.toString();
  }
}

// Eventos de clique nos botões "Nova Senha" e "Chamar Novamente"
const botaoNovaSenha = document.querySelector(".button-base");
botaoNovaSenha.addEventListener("click", gerarNovaSenha);

const botaoChamarNovamente = document.querySelector(".button-base:nth-child(2)");
botaoChamarNovamente.addEventListener("click", chamarNovamente);
function atualizarProximasSenhas() {
  const proximaSenha1 = senhaNormal + 1;
  const proximaSenha2 = senhaNormal + 2;
  const proximaSenha3 = senhaNormal + 3;

  document.getElementById("proxima-senha-1").textContent = proximaSenha1.toString().padStart(4, "0");
  document.getElementById("proxima-senha-2").textContent = proximaSenha2.toString().padStart(4, "0");
  document.getElementById("proxima-senha-3").textContent = proximaSenha3.toString().padStart(4, "0");
}

// Função para gerar uma nova senha
function gerarNovaSenha() {
  ultimaSenhaNormal = senhaNormal;
  ultimaConsultorio = gerarNumeroAleatorio(1, 5);

  if (senhaNormal < 9999) {
    senhaNormal++;
  } else {
    senhaNormal = 1;
  }

  // Verificar se é hora de gerar uma senha prioritária
  if (senhaNormal % 4 === 0) {
    if (senhaPrioritaria < 9999) {
      senhaPrioritaria++;
    } else {
      senhaPrioritaria = 1;
    }

    // Renderizar a senha prioritária com cor diferente
    document.querySelector(".senha-number").textContent = senhaPrioritaria.toString().padStart(4, "0");
    document.querySelector(".senha-number").style.color = "#7957F6";
  } else {
    // Renderizar a senha normal
    document.querySelector(".senha-number").textContent = senhaNormal.toString().padStart(4, "0");
    document.querySelector(".senha-number").style.color = "#06CBB0";
  }

  // Renderizar o consultório
  document.querySelector(".consultorio-number").textContent = ultimaConsultorio.toString();

  // Atualizar as próximas senhas
  atualizarProximasSenhas();
}

// Função para gerar o relatório das senhas chamadas
function gerarRelatorio() {
  let relatorio = "RELATÓRIO DE SENHAS CHAMADAS\n\n";
  relatorio += "SENHAS PRIORITÁRIAS:\n";
  relatorio += "----------------------\n";
  for (let i = 1; i <= senhaPrioritaria; i++) {
    relatorio += "Senha Prioritária #" + i.toString().padStart(4, "0") + "\n";
  }
  relatorio += "\n";
  relatorio += "SENHAS NORMAIS:\n";
  relatorio += "----------------\n";
  for (let i = 1; i <= senhaNormal; i++) {
    relatorio += "Senha Normal #" + i.toString().padStart(4, "0") + "\n";
  }

  // Download do relatório
  const nomeArquivo = "relatorio_senhas.txt";
  const tipoArquivo = "text/plain";
  const blob = new Blob([relatorio], { type: tipoArquivo });

  // Verificar o suporte ao download de arquivos
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    // Suporte ao Internet Explorer
    window.navigator.msSaveOrOpenBlob(blob, nomeArquivo);
  } else {
    // Outros navegadores
    const urlArquivo = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = urlArquivo;
    link.download = nomeArquivo;
    link.click();
    setTimeout(function () {
      URL.revokeObjectURL(urlArquivo);
    }, 100);
  }
}

// Evento de clique do botão GERAR RELATÓRIO
const botaoGerarRelatorio = document.querySelector("#oi");
botaoGerarRelatorio.addEventListener("click", gerarRelatorio);

//Realizacao do CRUD da tela

  // array de usuarios
  let usuarios = [];

  document.getElementById('btnCadastrar').addEventListener('click', function(e) {
    e.preventDefault();


    let usuario = {
      nome: document.getElementById('nome').value,
      cpf: document.getElementById('cpf').value,
      email: document.getElementById('email').value,
      id: document.getElementById('id').value,
      senha: document.getElementById('senha').value
    };

    usuarios.push(usuario);

      document.getElementById('nome').value = '';
      document.getElementById('cpf').value = '';
      document.getElementById('email').value = '';
      document.getElementById('id').value = '';
      document.getElementById('senha').value = '';

      console.log("Usuário criado: ", usuario);
    });

    function lerUsuarios() {
      for(let i = 0; i < usuarios.length; i++) {
        console.log(usuarios[i]);
      }
    }

    function atualizarUsuario(index, novoUsuario) {
      if(index < usuarios.length && index >= 0) {
        usuarios[index] = novoUsuario;
        console.log("Usuário atualizado: ", novoUsuario);
      }
    }

    function excluirUsuario(index) {
      if(index < usuarios.length && index >= 0) {
        usuarios.splice(index, 1);
        console.log("Usuário excluído no índice: ", index);
      }
    }

   // função para validar CPF
    function isValidCPF(cpf) {
      if (typeof cpf !== "string") return false;
      cpf = cpf.replace(/[\s.-]*/gim, '');
      if (!cpf || cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"
    ) {
      return false;
    }
    var soma = 0;
    var resto;
    for (var i = 1; i <= 9; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (var i = 1; i <= 10; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
  }

  function validarFormulario() {
    var cpf = document.getElementById('cpf').value;
    if (!isValidCPF(cpf)) {
      alert('CPF inválido');
      return false;
    }

// função para validar e-mail
function isValidEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// função para validar o formulário
function validarFormulario() {
  var nome = document.getElementById('nome').value;
  var cpf = document.getElementById('cpf').value;
  var email = document.getElementById('email').value;
  var id = document.getElementById('id').value;
  var senha = document.getElementById('senha').value;

  // verificar se todos os campos foram preenchidos
  if(nome === '' || cpf === '' || email === '' || id === '' || senha === '') {
    alert('Todos os campos são obrigatórios');
    return false;
  }

  // verificar se o e-mail é válido
  if(!isValidEmail(email)) {
    alert('E-mail inválido');
    return false;
  }

  return true;
}

document.getElementById('btnCadastrar').addEventListener('click', function(e) {
  e.preventDefault();

  // validar o formulário
  if(!validarFormulario()) {
    return;
  }

  // restante do código de cadastro
});

function updateButtonStatus() {
  var nome = document.getElementById('nome').value;
  var cpf = document.getElementById('cpf').value;
  var email = document.getElementById('email').value;
  var id = document.getElementById('id').value;
  var senha = document.getElementById('senha').value;

  var isValidForm = nome !== '' && cpf !== '' && email !== '' && id !== '' && senha !== '' && isValidEmail(email) && isValidCPF(cpf);
  document.getElementById('btnCadastrar').disabled = !isValidForm;
}

// inicialmente desabilitar o botão
updateButtonStatus();

// verificar a validade dos campos cada vez que um deles é alterado
document.getElementById('nome').addEventListener('input', updateButtonStatus);
document.getElementById('cpf').addEventListener('input', updateButtonStatus);
document.getElementById('email').addEventListener('input', updateButtonStatus);
document.getElementById('id').addEventListener('input', updateButtonStatus);
document.getElementById('senha').addEventListener('input', updateButtonStatus);}