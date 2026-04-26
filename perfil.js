const nome = 'Daniela'; // tudo que é const são dados fixos do perfil.
const idade = 32; 
const curso = 'ADS'; // nome e curso são strings (com aspas), idade e semestre são numbers (sem aspas).
const faculdade = 'Fatec Indaiatuba';
const semestre = 2;

const anoAtual= 2026;
const semestresFaltam = 6 - semestre;
const anoFormatura = anoAtual + Math.ceil (semestresFaltam / 2); //match.ceil arredonda pra cima, se der número quebrado.

console.log (`Nome: ${nome}`); // utilizando template literal (crases + ${})
console.log (`Idade: ${idade}`);
console.log (`Curso: ${curso}`);
console.log (`Faculdade: ${faculdade}`);
console.log (`Semestre atual: ${semestre}º semestre`);
console.log (`Ano de formatura previsto: ${anoFormatura}`);
