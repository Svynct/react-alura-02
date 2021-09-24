import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function FormularioCadastro() {
  const [nome, setNome] = useState("Ricardo");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      console.log(nome)
    }}>
      <TextField
        value={nome}
        onChange={(event) => {
          let tempNome = event.target.value;
          if (tempNome.length >= 3) {
            tempNome = tempNome.substring(0, 3);
          }
          setNome(tempNome);
        }}
        id="nome"
        label="Nome"
        placeholder="Escreva o seu nome"
        variant="outlined" margin="normal"
        fullWidth />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          let tempSobrenome = event.target.value;
          if (tempSobrenome.length >= 20) {
            tempSobrenome = tempSobrenome.substring(0, 20);
          }
          setSobrenome(tempSobrenome);
        }}
        id="sobrenome"
        label="Sobrenome"
        placeholder="Escreva o seu sobrenome"
        variant="outlined" margin="normal"
        fullWidth />

      <TextField
        value={cpf}
        onChange={(event) => {
          let tempCpf = event.target.value;
          if (tempCpf.length >= 11) {
            tempCpf = tempCpf.substring(0, 11);
          }
          setCpf(tempCpf);
        }}
        id="cpf"
        label="CPF"
        placeholder="Escreva o seu cpf"
        variant="outlined" margin="normal"
        fullWidth />

      <FormControlLabel label="Promoções" control={<Switch name="promocoes" color="primary" defaultChecked />} />

      <FormControlLabel label="Novidades" control={<Switch name="novidades" color="primary" defaultChecked />} />

      <Button variant="contained" type="submit">Cadastrar</Button>
    </form>
  );
}

export default FormularioCadastro;