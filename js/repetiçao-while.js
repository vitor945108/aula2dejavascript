// estrutura de repetiçao while
 let contador=0;

while (contador <10) {
          contador=contador+1;
          //contandor++;
console.log(`o contandor vale ${contador}`);


}
// estrutura de repetiçao do while
 let cont=0;

do {
          cont++;
          console.log("execuntandor do while ..");
          
} while (cont <=10);

//estrutura de repetiçao for

let i;
for ( i= 0;i<=10; i++) {
          //repete
          console.log(`imprimindo o valor de i ${i}`);
          
}

for (let linha =0; linha<5; linha++){
          for(let coluna=0; coluna<2; coluna++){
                    console.log(`linha ${linha} |coluna ${coluna} `)
          }
}