import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';

function DadosUsuario({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      onSubmit({ email, senha });
    }}>
      <TextField
        value={email}
        onChange={(event) => { setEmail(event.target.value) }}
        id="email"
        label="E-Mail"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required />
      <TextField
        value={senha}
        onChange={(event) => { setSenha(event.target.value) }}
        id="senha"
        abel="Senha"
        type="password"
        variant="outlined" margin="normal"
        fullWidth
        required />
      <Button variant="contained" type="submit">Próximo</Button>
    </form>
  );
}

export default DadosUsuario;