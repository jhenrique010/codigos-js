console.log("Hello Word");
console.error("Erro");
console.warn("Atenção");
console.clear();

const nome_pessoa = 'John';
const idade1 = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof nome_pessoa);
console.log(typeof idade1);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);


const pessoa = 'irmão do Jorel';
const idade2 = 30;
console.log('meu nome é ' + pessoa + ' e eu tenho ' + idade2 + ' anos');


let teste1 = 1;
let teste2 = 0;
let valor1 = true;
let valor2 = false;

console.log(teste1 > teste2);
console.log(teste1 < teste2);
console.log(valor1 && valor2);
console.log(valor1 && valor2);


const string01 = "instituto da oportunidade";
console.log(string01.charAt(0));
console.log(string01.charAt[10]);

let texto = "abcdefghijklmnopqrstuvwxyz";
console.log(texto.charAt(5));

let s = "Hello Word";
console.log(s.toUpperCase());
console.log(s.toLowerCase());

const str = "mozilla";
console.log(str.substring(1, 3));
console.log(str.substring(2));

const str1 = 'A raposa é um animal esperto';
const palavras = str1.split(' ');
console.log(palavras[3]);

const chars = str1.split('');
console.log(chars[7]);

const strCopy = str1.split();
console.log(str1);

let mensagem = "venha para a microsoft";
console.log(mensagem);
let novaMensagem = mensagem.replace("microsoft", "ios");
console.log(novaMensagem);

let text = "       Olá alunos do ios!       ";
console.log(text.trim());

const a = 10;
if (a==10){
console.log('a é 10');
}
const b = '10';
if (b==10){
-console.log('b é 10');
}

const c = 10;
if (c===10){
console.log('c é 10');
}

const d = '10';
if (d===10){
 console.log('b é 10');
}
console.log('estou fora do if que compara string');

const e = "10";
if (e===10) console.log ('e é igual a 10');
else{
    console.log('resultado da condição: ${e===10');
    console.log('e não é um numeral');
}


const f = 4;
const g = 11;
if (f > 5 || g > 10){
 console.log('condição é ${f > 5 || g > 10}');
 console.log('f é maior que 5 ou g é maior que 10')
}

else
console.log('f não é maior que 5 ou g é maior que 10');

if
(f > 5&&g>10) console.log('f é maior que 5 e g é maior que 10')
else{
    console.log('condição é ${f > 5 && g >10}');
    console.log('f não é maior que 5 ou g é não maior que 10');
}

const num = 'olá';
const h = 11;
if(num %2== !isNaN(num))
console.log('número par');

else if(num % 2 != 0 && !isNaN(num))
console.log('número impar');
console.log('não é um número');

let rrrr = 3 > 4 ? 'sim' : 'não';
console.log('rrrr');

console.clear ();
const l = 11;
const cor = h > 10 ? 'vermelha' : 'azul';
console.clear();
switch (cor) {
case 'vermelha':
console.log('A cor é vermelha');
break;
case 'azul':
console.log('A cor é azul');
break;
default:
console.log('A cor não é vermelha ou azul');
break;
}












