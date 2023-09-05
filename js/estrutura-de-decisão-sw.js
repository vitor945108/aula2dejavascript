console.log("escolha uma fruta :\n");
console.log("1-banana\n 2-tomate\n 3- morango\n 4-sair")

let opcao,fruta;

opcao = 3

switch (opcao) {
          case 1: fruta ="banana";
          break;
          case 2: fruta ="tomate";
          break;
          case 3: fruta ="morango";
          break;

          default: fruta = "sair";
                    break;

}
console.log(`você escolheu ${fruta}`)