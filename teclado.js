const teclado = {       //teclado novo objeto const
    elementos: {        //objeto elementos 
        main : null,
        teclasConteudo:null,
        teclas:[]       //var arrays teclas
    },
    
    eventos:{
        oninput:null,
        onclose:null
    },

    propriedades: {
        valor: "",
        capslock:false
    },
    
    init(){
        //criar elementos do main
        this.elementos.main= document.createElement('div');
        this.elementos.teclasConteudo= document.createElement('div');

        //setup elementos main
        this.elementos.main.classList.add('teclado','1teclado--hidden');
        this.elementos.teclasConteudo.classList.add('teclado_chaves');

        //adicionar ao DOM
        this.elementos.main.appendChild(this.elementos.teclasConteudo);
        document.body.appendChild(this.elementos.main);
    },

    _criarChaves(){
        const fragmento = document.createDocumentFragment();
        const teclaLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
            "space"
        ];

        //criar html
        const criarIcone = (nome_icone)=>{
            return `< class="material-icons">${nome_icone}</i>`;
        }

    },

    _comecaEvento(handlerName){
        console.log("Evento iniciado:: "+handlerName);
    },
    
    _comecaCapslock(){
        console.log("Capslock ativo");
    },

    open(valorInicial, oninput,onclose){        //este metodo vai possibilitar continuar a escrever com o teclado virtual mantendo o texto escrito na caixa de texto pelo teclado fisico

    },

    close(){

    }
}

window.addEventListener("DOMContentLoaded", function(){
    teclado.init();
});