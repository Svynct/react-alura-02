import React from 'react';

function DadosFim({ dadosColetados }) {
  return (
    <div>
      <div className="margin-bottom-3">
        <h4><b>Nome:</b> {dadosColetados?.nome}</h4>
        <h4><b>Sobrenome:</b> {dadosColetados?.sobrenome}</h4>
        <h4><b>CPF:</b> {dadosColetados?.cpf}</h4>
        <h4><b>E-mail:</b> {dadosColetados?.email}</h4>
        <h4><b>CEP:</b> {dadosColetados?.cep}</h4>
        <h4><b>Endereço:</b> {dadosColetados?.endereco}</h4>
        <h4><b>Número:</b> {dadosColetados?.numero}</h4>
        <h4><b>Promoções:</b> {dadosColetados?.promocoes}</h4>
        <h4><b>Novidades:</b> {dadosColetados?.novidades}</h4>
      </div>
      <div className="align-content">
        <b className="text-center text-white badge ft-25">Obrigado por se Cadastrar!!</b>
      </div>
    </div>
  );
}

export default DadosFim;