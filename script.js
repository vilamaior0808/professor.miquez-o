const fatos = [
    "Uma vez o Miquezão ensinou Python para um robô, e o robô passou no ENEM.",
    "Ele não depura código — o código tem medo de errar perto dele.",
    "Quando o Miquezão digita 'run', o computador responde 'sim, senhor'.",
    "Ele descobriu um bug no tempo e conseguiu mais 3 horas de sono.",
    "Dizem que o GitHub criou o botão 'commit' em homenagem a ele.",
    "Uma vez ele escreveu um sistema inteiro no quadro branco... e funcionou.",
    "Ele compila até o amor em linguagem C++ ❤️.",
    "Se o Miquezão errar, é porque o universo não estava sincronizado com ele."
  ];
  
  function mostrarFato() {
    const indice = Math.floor(Math.random() * fatos.length);
    document.getElementById("fato").textContent = fatos[indice];
  }