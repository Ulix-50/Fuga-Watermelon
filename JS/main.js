//#region   Variáveis

var qtdVida = 10;
var posicaoX = 0;
var posicaoY = 93;
var MedidaDePosicao = "";
var tamanhoTelaHorizontal = window.innerWidth; 
var tamanhoTelaVertical = window.innerHeight;

var musica = document.getElementById("Musica");
this.document.getElementById("Player").style.top = 93;


//#endregion

//#region   Métodos

window.addEventListener("keydown", Andar);
DesativarSprite("DeadPlayer");
DesativarSprite("VitoriaPlayer");
DesativarSprite("Mensagem");
DesativarSprite("BotaoMusicaLigado");



function Andar(Tecla)
{
    var TeclaSetaEsquerda = 37;
    var TeclaSetaDireita = 39;
    var TeclaSetaCima = 38;
    var TeclaSetaBaixo = 40;

    var SegundaTecla_Cima = 87;
    var SegundaTecla_Baixo = 83;
    var SegundaTecla_Esquerda = 65;
    var SegundaTecla_Direita = 68;

    if (Tecla.keyCode == TeclaSetaDireita || Tecla.keyCode == SegundaTecla_Direita)
    {
        posicaoX +=15.5;
        MedidaDePosicao = posicaoX+"px";        
        this.document.getElementById("Player").style.left = MedidaDePosicao;
        VerificarVitoria();
        Verificar_Bloquear_CantoEsquerdo_Cima();
    }

    if (Tecla.keyCode == TeclaSetaEsquerda || Tecla.keyCode == SegundaTecla_Esquerda)
     {
        posicaoX -= 15.5;
        MedidaDePosicao = posicaoX+"px";        
        this.document.getElementById("Player").style.left = MedidaDePosicao;
        VerificarVitoria();
        Verificar_Bloquear_CantoEsquerdo_Cima();
    }
    
    if (Tecla.keyCode == TeclaSetaBaixo || Tecla.keyCode == SegundaTecla_Baixo) {
        posicaoY +=15.5;
        MedidaDePosicao = posicaoY+"px";        
        this.document.getElementById("Player").style.top = MedidaDePosicao;
        VerificarVitoria();
        Verificar_Bloquear_CantoEsquerdo_Cima();
    }
    
    if (Tecla.keyCode == TeclaSetaCima || Tecla.keyCode == SegundaTecla_Cima)
     {
        posicaoY -=15.5;
        MedidaDePosicao = posicaoY+"px";        
        this.document.getElementById("Player").style.top = MedidaDePosicao;
        VerificarVitoria();
        Verificar_Bloquear_CantoEsquerdo_Cima();        
    }
    
}

function PerderVida()
{
    qtdVida--;
    this.document.getElementById("Vida").innerHTML = "Vida Jogador 1: " + qtdVida;
    Morrer();
}

function Morrer()
{
    if (qtdVida <= 0) 
    {
        IgualarPosicao("DeadPlayer");
        TrocarSprite("Player", "DeadPlayer");
        this.document.getElementById("Mensagem").style.display = "inline";
        this.document.getElementById("Mensagem").innerHTML = "Jogador 2 venceu!";
    }
}

function TrocarSprite(spriteAtual, novoSprite)
{
    this.document.getElementById(spriteAtual).style.display = "none";
    this.document.getElementById(novoSprite).style.display = "inline";
}

function DesativarSprite(Sprite)
{
    this.document.getElementById(Sprite).style.display = "none";
}

function VerificarVitoria() 
{

    if (posicaoX >= tamanhoTelaHorizontal || posicaoY >= tamanhoTelaVertical)
    {
        TrocarSprite("Player", "VitoriaPlayer");
        IgualarPosicao("VitoriaPlayer");
        this.document.getElementById("Mensagem").style.display = "inline";
        this.document.getElementById("Mensagem").innerHTML = "Jogador 1 venceu!";
    }
}

function IgualarPosicao(IdSprite) 
{
    this.document.getElementById(IdSprite).style.top = posicaoY+"px";
    this.document.getElementById(IdSprite).style.left = posicaoX+"px";
}


function Verificar_Bloquear_CantoEsquerdo_Cima()
{
    if (posicaoX <0) {
        posicaoX = 0;
        this.document.getElementById("Player").style.top = posicaoY;
    }
    if (posicaoY < 0) {
        posicaoY = 0;
        this.document.getElementById("Player").style.left = posicaoX;
    }
}

function Emudecer() 
{
    if (!musica.muted) 
    {
        musica.muted = true;
        this.document.getElementById("BotaoMusicaLigado").style.display = "none"; 
        this.document.getElementById("BotaoMusicaDesligado").style.display = "inline-flex";
    } 
    else 
    {
        musica.muted = false;
        this.document.getElementById("BotaoMusicaDesligado").style.display = "none";
        this.document.getElementById("BotaoMusicaLigado").style.display = "inline-flex";
    }
}

function TocarMusica() 
{
    musica.play();
}


//#endregion