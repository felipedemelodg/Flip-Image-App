let cont = 0;
const elemento = document.getElementsByClassName("borda-azul");
export function girarParaEsquerda() {
  const selecao = Object.values(document.getElementsByClassName("borda-azul"));
  if (selecao.length != 0) {
    elemento[0].style.transform = 
    elemento[0].style.transform =`rotate(${cont--}deg)`;
  }
}
