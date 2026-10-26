alert("Bem vindo ao site de notas bimestrais!");
let notaHTML = Number(prompt("Digite sua Nota em HTML:"));
let notaCSS = Number (prompt("Digite sua nota em CSS:"));
let notaJS = Number (prompt("Digite sua nota em JavaScript:"));
let calculo = (notaHTML + notaCSS + notaJS) /3;
 alert(`Sua Média é: ${calculo}`);
