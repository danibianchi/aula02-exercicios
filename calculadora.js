const a = 10;
const b = 5; //usamos const pois o valor não irá mudar, em JS não precisa declarar o tipo da variável.

console.log(`Operações matemáticas com ${a} e ${b}:`); //utilizar crases, não aspas. esse é o templete literal
console.log(`Soma: ${a + b}`);
console.log(`Subtração: ${a - b}`);
console.log(`Multiplicação: ${a * b}`);
console.log(`Divisão: ${(a / b). toFixed(2)}`); // arredondar para 2 casas decimais