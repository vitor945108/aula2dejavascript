console.log("\n calculadora ")
console.log("\ninsira dos numeros e escolha a operação desejada")
console.log(`\noperação \n1-soma \n2-subtração \n3-multiplição \n4-divisão `)
let num1,num2,operaçoes,opc,resp=0
num1=100
num2=10
operaçoes =3


if (operaçoes === 1){
          opc= "soma"
          resp = somaNumeros(num1,num2)
}
else if (operaçoes === 2){
          opc= "subtração"
          resp= subNumeros(num1,num2)
}
else if (operaçoes=== 3){
          opc= "multiplicação"
          resp=   multNumeros(num1,num2)
}
else if (operaçoes=== 4){
          opc="divisão"
          resp=   divNumeros (num1,num2)
}
else{
          opc="nenhuma"
          resp="nenhuma operação foi selecionada";
          
}

function somaNumeros(num1,num2) {
          return (num1+num2)
          
}
function subNumeros(num1,num2) {
          return (num1-num2)
          
}
function multNumeros(num1,num1) {
          return (num1*num2)
          
}
function divNumeros(num1,num3) {
          return (num1/num2)
          
}
    
    console.log(`os numeros digitados ${num1} e ${num2}\n a operação esconhida ${opc} \n o resultado ${resp} `)

