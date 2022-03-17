function Estudar() {
  return new Promisse (function (resolve, reject, num=3){
    if (estudarBio === true){
      resolve ("Matéria de Biologia estudada");
    } else{
      reject (num * 2);}
    });
console.log("estudar novamente");,1000);
}

function comer() {
  return new Promisse (function (resolve, reject, num=3){
    if (comeuMaça === true){
      resolve ("Comeu saudável");
    } else{
      reject (num * 4);}
    });
  setTimeout(function(){
console.log("Selecionar Alimentos");},1000);
}
function escrever() {
  return new Promisse (function (resolve, reject, num=3){
    if (escreveuredaao === true){
      resolve ("Fez a redação");
    } else{
      reject (num * 5);}
    });
  setTimeout(function(){
console.log("Escrever Redação");},1000);
}

async function doAll(){
  var estudarResult = await Estudar();
  var comerResult = await comer();
  var escreverResult = await escrever();
  return endResult;
}
