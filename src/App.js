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
        <FormularioCadastro onSubmit={enviarForm} validarCPF={validarCPF} validarNome={validarNome} />
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
  if (nomes?.length > 1) {
    console.log(nomes)
    return {
      valido: false,
      texto: "O nome não pode ter espaços em branco"
    };
  }
  else {
    return {
      valido: true,
      texto: ""
    };
  }
}

export default App;
