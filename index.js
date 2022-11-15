class creazione_teatro {
  creazione = [];
  constructor(nposti, elemento) {

    var tipo_creazione = document.getElementById(elemento);
    this.creazione = nposti.map((fila, f) => {
      var p = fila.map((nome, p) => {
        var bottone = document.createElement('button');
        bottone.value = nome;
        bottone.style.color = nome != 'x' ? 'red' : 'green';
        bottone.innerHTML = 'P' + (p + 1) + (f + 1);
        bottone.addEventListener('click', setta_nome);
        tipo_creazione.appendChild(bottone);
        return bottone;
      });
      tipo_creazione.appendChild(document.createElement('br'));
    });

    function setta_nome() {
      if (this.value != 'x') {
        testo_html.innerHTML = 'Già prenotato da' + this.value;
      } else {
        testo_html.innerHTML = 'Prenota ora questo posto';
      }
    }

  }
}

class config_teatro {
  
  constructor(f_platea,p_platea,f_palco,p_palco){

  }
}

const testo_html = document.getElementById('var');

var file_platea = 7;
var posto_platea = 10;
var file_palco = 4;
var posto_palco = 6;

var teatro = {
  platea: Array(file_platea)
    .fill('')
    .map(() => Array(posto_platea).fill('x')),
  palco: Array(file_palco)
    .fill('')
    .map(() => Array(posto_palco).fill('x')),
};

teatro.platea[1][5] = 'miopa';
teatro.platea[3][9] = 'tuma';
teatro.palco[1][5] = 'miopas';
teatro.palco[3][2] = 'tumas';

var platea_teatro = new creazione_teatro(teatro.platea,"platea");
var palco_teatro = new creazione_teatro(teatro.palco,"palco");


