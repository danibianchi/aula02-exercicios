const celsius = 25; // a temperatura base é sempre celsius, usamos const pois ela não muda.

const fahrenheit = celsius * 9 / 5 + 32; // aplicando a fórmula de conversão, o JS respeita a ordem das operações igual a matemática: x / + 
const kelvin = celsius + 273.15;

console.log(`Temperatura em Celsius: ${celsius}°C`); // template literal com ${} para interpolar cada variável
console.log(`Temperatura em Fahrenheit: ${fahrenheit}°F`);
console.log(`Temperatura em Kelvin: ${kelvin}K`);
