import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function FormularioCadastro({ onSubmit, validarCPF, validarNome, validarSobrenome }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({
    nome: {
      valido: true,
      texto: ""
    },
    sobrenome: {
      valido: true,
      texto: ""
    },
    cpf: {
      valido: true,
      texto: ""
    }
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!erros.nome.valido || !erros.sobrenome.valido || !erros.cpf.valido) {
          onSubmit({ 
            nome: {
              valido: erros.nome.valido,
              texto: erros.nome.texto
            },
            sobrenome: {
              valido: erros.sobrenome.valido,
              texto: erros.sobrenome.texto
            },
            cpf: {
              valido: erros.cpf.valido,
              texto: erros.cpf.texto
            }
          })
        }
        else onSubmit({ nome, sobrenome, cpf, novidades, promocoes });
      }}>
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        id="nome"
        label="Nome"
        placeholder="Escreva o seu nome"
        variant="outlined" margin="normal"
        onBlur={(event) => {
          const valido = validarNome(event.target.value)
          setErros({ nome: valido, sobrenome: erros.sobrenome, cpf: erros.cpf })
        }}
        fullWidth />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        error={!erros.sobrenome.valido}
        helperText={erros.sobrenome.texto}
        id="sobrenome"
        label="Sobrenome"
        placeholder="Escreva o seu sobrenome"
        variant="outlined" margin="normal"
        onBlur={(event) => {
          const valido = validarSobrenome(event.target.value)
          setErros({ nome: erros.nome, sobrenome: valido, cpf: erros.cpf })
        }}
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
          setErros({ nome: erros.nome, sobrenome: erros.sobrenome, cpf: valido });
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