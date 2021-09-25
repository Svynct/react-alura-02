import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({ onSubmit }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) onSubmit({ nome, sobrenome, cpf, novidades, promocoes });
      }}>
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        id="nome"
        name="nome"
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
        name="sobrenome"
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
        name="cpf"
        label="CPF"
        placeholder="Escreva o seu cpf"
        variant="outlined" margin="normal"
        onBlur={validarCampos}
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

      <Button variant="contained" type="submit">Próximo</Button>
    </form>
  );
}

export default DadosPessoais;