import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function FormularioCadastro({ onSubmit, validarCPF }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({
    cpf: {
      valido: true,
      texto: ""
    }
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ nome, sobrenome, cpf, novidades, promocoes });
      }}>
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        placeholder="Escreva o seu nome"
        variant="outlined" margin="normal"
        fullWidth />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        placeholder="Escreva o seu sobrenome"
        variant="outlined" margin="normal"
        fullWidth />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        placeholder="Escreva o seu cpf"
        variant="outlined" margin="normal"
        onBlur={(event => {
          const valido = validarCPF(event.target.value)
          setErros({ cpf: valido });
        })}
        fullWidth />

      <FormControlLabel label="Promoções"
        control={<Switch
          checked={promocoes}
          onChange={(event) => {
            setPromocoes(event.target.checked)
          }}
          name="promocoes" color="primary" defaultChecked={promocoes} />} />

      <FormControlLabel label="Novidades"
        control={<Switch
          checked={novidades}
          onChange={(event) => {
            setNovidades(event.target.checked)
          }}
          name="novidades" color="primary" defaultChecked={novidades} />} />

      <Button variant="contained" type="submit">Cadastrar</Button>
    </form>
  );
}

export default FormularioCadastro;