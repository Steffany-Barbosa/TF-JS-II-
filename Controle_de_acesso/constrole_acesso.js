/* Crie um sistema de controle de acesso para um prédio que precisa verificar se um usuário tem permissão para entrar.
O programa deve analisar 3 dados: nome do usuário, seu nível de acesso (visitante, funcionário, gerente ou administrador) 
e o horário de acesso como entrada. O programa deve:
Verificar se o horário de acesso está dentro do horário de funcionamento do prédio (8h às 22h).
Caso seja visitante, o horário de visitas só é permitido entre 9h e 18h.
Verificar se o nível de acesso do usuário é suficiente para entrar no prédio no horário especificado.
Conceder acesso ao usuário se todas as condições forem atendidas.
Negar acesso ao usuário se alguma das condições não for atendida.
Ao fim exiba uma frase amigável dizendo se a entrara está permitida. Caso não seja permitida, deixe claro o porquê. */


let nivel_acesso = "funcionário";
let horario_acesso = 19;

console.log("BEM VINDO AO PRÉDIO Alpha Ville\n------------------------------");

if (horario_acesso >= 8 && horario_acesso <= 22) {
  if (nivel_acesso === "visitante") {
    if (horario_acesso < 9 || horario_acesso > 18) {
      console.log("Entrada negada! Para visitantes, o horário de funcionamento é de 9h às 18h.");
    } else {
      console.log("Entrada permitida.");
    }
  } else if (nivel_acesso === "administrador" || nivel_acesso === "funcionário" || nivel_acesso === "gerente") {
    console.log(`Entrada permitida para ${nivel_acesso}.`);
  } else {
    console.log("Nível de acesso inválido!\nEntrada negada! Fiquem atentos ao horário de funcionamento do prédio de 8h às 22h.");
  }
}