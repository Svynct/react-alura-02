function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos" }
  }
  else {
    return { valido: true, texto: "" }
  }
}

function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 72) {
    return { valido: false, texto: "Senha deve ter entre 4 e 72 dígitos" }
  }
  else {
    return { valido: true, texto: "" }
  }
}

// function validarNome(nome) {
//   let nomes = nome.split(" ");

//   let invalido = validarCaracteresEspeciais(nome);

//   if (invalido) {
//     return {
//       valido: false,
//       texto: "O nome não pode ter caracteres especiais"
//     };
//   }
//   else if (nomes?.length > 1) {
//     return {
//       valido: false,
//       texto: "O nome não pode ter espaços em branco"
//     };
//   }
//   else if (nome === "") {
//     return {
//       valido: false,
//       texto: "O nome precisa ser preenchido"
//     };
//   }
//   else {
//     return {
//       valido: true,
//       texto: ""
//     };
//   }
// }

// function validarSobrenome(sobrenome) {
//   const invalido = validarCaracteresEspeciais(sobrenome);

//   if (invalido) {
//     return {
//       valido: false,
//       texto: "O sobrenome não pode ter caracteres especiais"
//     };
//   }
//   else {
//     return {
//       valido: true,
//       texto: ""
//     };
//   }
// }

// function validarCaracteresEspeciais(str) {
//   for (let caractere of CaracteresEspeciais) {
//     if (str.includes(caractere)) {
//       return true;
//     }
//   }
//   return false;
// }

// const CaracteresEspeciais = [
//   "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",  
//   "!", "@", "#", "$", "%", "&", "*", "(", ")", "-", 
//   "=", "_", "+", "{", "[", "}", "]", "/", "?", ";",
//   ":", ">", ".", ",", "<", "|", "¹", "²", "³", "£",
//   "¢", "¬", "'"
// ];

export { validarCPF, validarSenha };