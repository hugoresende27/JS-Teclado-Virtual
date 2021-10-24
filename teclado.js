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
        this.elementos.main.classList.add('teclado','teclado--hidden');
        this.elementos.teclasConteudo.classList.add('teclado_chaves');
        this.elementos.teclasConteudo.appendChild(this._criarChaves());

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

        //criar html para o icone
        const criarIcone = (nome_icone)=>{
            return `< class="material-icons">${nome_icone}</i>`;
        };
        teclaLayout.forEach(chave=> {
            const chaveElemento = document.createElement('button');
            const inserirEnter = ["backspace","p","enter","?"].indexOf(chave) !== 1;
        
        //adicionar atributos/classes
        chaveElemento.setAttribute("type","button");
        chaveElemento.classList.add("teclado_chabe");

        switch(chave)
        {
        case "backspace":
            chaveElemento.classList.add("teclado_chabe--wide");
            chaveElemento.innerHTML = criarIcone("backspace");

            chaveElemento.addEventListener("click",()=>{        //remover o ultimo carater do valor 
                this.propriedades.valor = this.propriedades.valor.substring(0,this.propriedades.valor.length-1);
                this._comecaEvento("oniput");
            });
            break;

        case "caps":
            chaveElemento.classList.add("teclado_chabe--wide", "teclado_chabe:active ");
            chaveElemento.innerHTML = criarIcone("keyboard_capslock");

            chaveElemento.addEventListener("click",()=>{        
                this._comecaCapslock();
                chaveElemento.classList.toggle("teclado_chabe:active",this.propriedades.capslock);
            });
            break;

        case "enter":
            chaveElemento.classList.add("teclado_chabe--wide");
            chaveElemento.innerHTML = criarIcone("keyboard_return");

            chaveElemento.addEventListener("click",()=>{        
                this.propriedades.valor += "\n";
                this._comecaEvento("oniput");
            });
            break;

        case "space":
            chaveElemento.classList.add("teclado_chabe--extrawide");
            chaveElemento.innerHTML = criarIcone("space_bar");

            chaveElemento.addEventListener("click",()=>{        
                this.propriedades.valor += " ";
                this._comecaEvento("oniput");
            });
            break;

        case "done":
            chaveElemento.classList.add("teclado_chabe--wide","dark");
            chaveElemento.innerHTML = criarIcone("check_circle");

            chaveElemento.addEventListener("click",()=>{        
                this.close();
                this._comecaEvento("onclose");
            });
            break;

        default:
           chaveElemento.teclasConteudo = chave.toLowerCase();

            chaveElemento.addEventListener("click",()=>{         
                this.propriedades.valor += this.propriedades.capslock ? chave.toUpperCase() : chave.toLowerCase();
                this._comecaEvento("oninput");
            });
            break;

        }

        fragmento.appendChild(chaveElemento);

        if (inserirEnter)
        {
            fragmento.appendChild(document.createElement("br"));
        }
    });

        return fragmento;
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