//estrutura de decisão
let a =10;
let b=20;

if(a>b){
          console.log("b é maior que a");
          
}

else{
      console.log("\nb é menor que a");
}

//if aninhado
if(a<b){
    if(b>a){
          if(a!=b){
            console.log("entrou na estrutura");

      }
   }
}
//utilizando a estrutura de decisão else if

let saudacao,periodo;

console.log(` digite :\n1-bom dia \n2-bom tarde \n3-bom noite`);

periodo =1;

if (periodo === 1){
      saudacao="bom dia";
}
else if (periodo === 2){
      saudade="boa tarde";
}
else if (periodo === 3){
      saudade="boa noite";
}
else{
      saudacao="nenhuma opçao foi selecionada";
}
console.log(`voce selecionou ${saudacao}`);

