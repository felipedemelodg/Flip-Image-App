let cont = 0;
const elemento = document.getElementsByClassName("borda-azul");
export function girarParaDireita() {
  const selecao = Object.values(document.getElementsByClassName("borda-azul"));
//   console.log(elemento[0].style);
  if (selecao.length != 0) {
    elemento[0].style.transform =
      elemento[0].style.transform = `rotate(${cont++}deg)`;
  }
}
