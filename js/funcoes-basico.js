//introduçao a funçoes em javascript

//criando uma funçao 

function somaNumeros () {

          let num,num2,resp=0;
          num1=10
          num2=20
          
          resp=num1+num2

          console.log(` o resultado da soma ${resp}`)
}

//execuntando/utilizando uma função
somaNumeros();


//criando função com parametros

function somaValorParametros(num3,num4) {
          let resp=0;
          resp=num3+num4
          console.log(` o resultado da soma é ${resp}`)

}
//execuntando/utilizando uma função
somaValorParametros(120,30);

//criando funçao com parametros e com return 

function somaNum(num5,num6) {
          let resp=0;
          resp=num5+num6;
          return resp;
          
}
//execuntando/utilizando uma função
let resposta = somaNum(90,30)
console.log(` o resultado da soma é ${resposta}`)

//criando funçao com parametros e com return 
function somaNumeros(num7,num8) {
          return (num7+num8)
          
}
//execuntando  funçao com parametros e com return 
console.log(`o resultado da soma ${somaNumeros(70,30)}`)

