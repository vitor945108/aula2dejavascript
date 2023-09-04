console.log("alguma coisa em asplas duplas")
console.log('alguma coisa em apostrofo')
let variavel = 20;
let nome = 'senac';
console.log(nome);
nome= 10 ;

console.log(nome);
console.log(`alguma coisa em ${variavel}`);

function somavalor(){

          let valor;
          valor= 50 ;
          console.log(valor);

}
somavalor();

//declarando variaveis com let e const

//declaraçao das variaveis
let email,telefone,cpf;

//inicilializar as variaveis
email= 'sac@sp.senac.br';
telefone = 1137373900;
cpf = "258952528-77";

console.log("seu email é:",email)
console.log(`seu telefone é : ${telefone}`);
console.log(`seu cpf é: ${cpf}`);
//varaveil que seu valor não
//muda em tempo de execuçao
const pi=1.1416152325;
console.log(`valor do ${pi}`);

console.log("valor do pi",pi)

const meuNome ="senac largo trezer";
console.log("meu nome é: ",meuNome);

const primeiroNome = "senac";
const segundoNome = "largo treze";

console.log(`primeiro nome ${primeiroNome} sobrenome é ${segundoNome}`)


//OPERADORES

let num1,num2,resp=0;
num1= 10;
num2= 20;

resp = num1+num2;
console.log("a soma ",resp);
resp=num1 - num2;
console.log(" a subtraçao: ",resp)
resp = num1*num2;
console.log (" a multiplicaçao: ",resp)
resp = num1/num2;
console.log (" a divisão: ",resp)
resp = num1%num2;
console.log (" o mod é : ",resp)

//expressoes em javascript

let a = 3;

let x= (100+50) * a;
console.log(`o valor da expressão é ${x}`);

//operadores de incremento e decremento

let z = 5;
//incrementando o z 
z++;
let y = z;
console.log("valor de y:",y);
let w= 5;

//decrementando w
w--;
let n = w;
console.log("valor de n:",n);

//exponenciação

let exp= 5;0
let op = exp ** 2;
let mat = Math.pow(exp,2);
console.log(`exponenciaçao ${op}`);
console.log(`exponenciaçao  com class matematica ${mat}`);

//let num-isso é uma variavel
//fuction nome (){}-isso é uma funcão

//Operadores de Atribuição JavaScript

let r = 10

let s = 10+r;

console.log(`valor de s : ${r}`);

let m =10-r;
console.log(`valor de m : ${m}`)

//operadores relacionais etorma true/false

let B= "true";
let q= "false";

let v = B && q;
console.log(`valor de v é: ${v}`);


//operador ou
let i = B|| q;
console.log(`valor de i é: ${i}`);

//variaveis do tipo objeto
const pessoa={
      name:"senac",
      lastname:"largo treze"
};
console.log(`o nome da pessoa ${pessoa.name}e seu sobrenome é :${pessoa.lastname}`)
//variaveis do tipo array (vetores)

const car = [
          "wv",
          "ford",
          "chevrolet"
];
console.log(`o carro escolhido ${car[1]}`);






