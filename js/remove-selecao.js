export function removeSelecao(e) {
  const alvo = e.target;
  alvo.classList.remove("borda-azul");
  return false;
}
