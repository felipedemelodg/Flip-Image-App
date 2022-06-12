import { utils } from "./utils.js";

//giro
let cont = 0;
utils.elem.girarEsquerda.addEventListener("click", () => {
  utils.elem.foto.style.transform = `rotate(${cont--}deg)`;
});
utils.elem.girarDireita.addEventListener("click", () => {
  utils.elem.foto.style.transform = `rotate(${cont++}deg)`;
});

let h = 0;
utils.elem.espelharH.addEventListener("click", () => {
  if (h == 0) {
    utils.elem.foto.style.transform = "scaleX(-1)";
    h = 1;
  } else if (h == 1) {
    utils.elem.foto.style.transform = "scaleX(1)";
    h = 0;
  }
});

let v = 0
utils.elem.espelharV.addEventListener("click", () => {
  if (v == 0) {
    utils.elem.foto.style.transform = "scaleY(-1)";
    v = 1;
  } else if (v == 1) {
    utils.elem.foto.style.transform = "scaleY(1)";
    v = 0;
  }
});
