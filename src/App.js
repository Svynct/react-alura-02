import "@fontsource/roboto";
import { Container, Typography } from "@material-ui/core";
import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import ValidacoesCadastro from "./context/ValidacoesCadastro";
import { validarCPF, validarSenha } from './models/Cadastro';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm" >
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
        <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}>
          <FormularioCadastro onSubmit={enviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function enviarForm(dados) {
  console.log(dados)
}

export default App;
