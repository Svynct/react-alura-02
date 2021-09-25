import { TextField, Button } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (possoEnviar()) onSubmit({ email, senha });
    }}>
      <TextField
        value={email}
        onChange={(event) => { setEmail(event.target.value) }}
        id="email"
        name="email"
        label="E-Mail"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required />
      <TextField
        value={senha}
        onChange={(event) => { setSenha(event.target.value) }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        name="senha"
        abel="Senha"
        type="password"
        variant="outlined" margin="normal"
        fullWidth
        required />
      <Button className="margin-top-1" variant="contained" type="submit" fullWidth>Próximo</Button>
    </form>
  );
}

export default DadosUsuario;