import "@fontsource/roboto";
import { Container, Typography } from "@material-ui/core";
import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
        <FormularioCadastro onSubmit={enviarForm} validarCPF={validarCPF} validarNome={validarNome} validarSobrenome={validarSobrenome} />
      </Container>
    );
  }
}

function enviarForm(dados) {
  console.log(dados)
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return {
      valido: false,
      texto: "CPF deve ter 11 dígitos"
    }
  }
  else {
    return {
      valido: true,
      texto: ""
    }
  }
}

function validarNome(nome) {
  let nomes = nome.split(" ");

  let invalido = validarCaracteresEspeciais(nome);

  if (invalido) {
    return {
      valido: false,
      texto: "O nome não pode ter caracteres especiais"
    };
  }
  else if (nomes?.length > 1) {
    return {
      valido: false,
      texto: "O nome não pode ter espaços em branco"
    };
  }
  else if (nome === "") {
    return {
      valido: false,
      texto: "O nome precisa ser preenchido"
    };
  }
  else {
    return {
      valido: true,
      texto: ""
    };
  }
}

function validarSobrenome(sobrenome) {
  const invalido = validarCaracteresEspeciais(sobrenome);

  if (invalido) {
    return {
      valido: false,
      texto: "O sobrenome não pode ter caracteres especiais"
    };
  }
  else {
    return {
      valido: true,
      texto: ""
    };
  }
}

function validarCaracteresEspeciais(str) {
  for (let caractere of CaracteresEspeciais) {
    if (str.includes(caractere)) {
      return true;
    }
  }
  return false;
}

const CaracteresEspeciais = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",  
  "!", "@", "#", "$", "%", "&", "*", "(", ")", "-", 
  "=", "_", "+", "{", "[", "}", "]", "/", "?", ";",
  ":", ">", ".", ",", "<", "|", "¹", "²", "³", "£",
  "¢", "¬", "'"
];

export default App;
