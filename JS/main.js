//#region   Variáveis

var qtdVida = 10;
var posicaoX = 0;
var posicaoY = 93;

var MedidaDePosicao = "";
var tamanhoTelaHorizontal = window.innerWidth; 
var tamanhoTelaVertical = window.innerHeight;
var player = this.document.getElementById("Player");
var musica = document.getElementById("Musica");
player.style.top = 93;

function MoverPlayerX(x){
    posicaoX = x;
    player.style.left = x+"px";
}
function MoverPlayerY(y) {
    posicaoY = y;
    player.style.top = y+"px";
}
//#endregion

//#region   Métodos

window.addEventListener("keydown", Andar);
DesativarSprite("Mensagem");



function Andar(Tecla)
{
    
    codesDireita = [ "KeyD", "ArrowRight" ]
    codesEsquerda = [ "KeyA", "ArrowLeft" ]
    codesBaixo = [ "KeyS", "ArrowDown" ]
    codesCima = [ "KeyW", "ArrowUp" ]

    console.log(Tecla);

    if (codesDireita.includes(Tecla.code))
        MoverPlayerX(posicaoX + 15.5);

    if (codesEsquerda.includes(Tecla.code))
        MoverPlayerX(posicaoX - 15.5);
    
    if (codesBaixo.includes(Tecla.code)) 
        MoverPlayerY(posicaoY + 15.5);
    
    if (codesCima.includes(Tecla.code))
        MoverPlayerY(posicaoY - 15.5);

    VerificarVitoria();
    VerificarBloqueio();  
    
}

function PerderVida()
{
    qtdVida--;
    this.document.getElementById("Vida").innerHTML = "Vida Jogador 1: " + qtdVida;
    if (qtdVida <= 0) 
        Morrer();  
}

function Morrer()
{ 
    TrocarSprite("sprite-jogando", "sprite-dead");
    this.document.getElementById("Mensagem").style.display = "inline";
    this.document.getElementById("Mensagem").innerHTML = "Jogador 2 venceu!";
}

function TrocarSprite(spriteAtual, novoSprite)
{
    player.classList.remove(spriteAtual);
    player.classList.add(novoSprite);
}

function DesativarSprite(Sprite)
{
    this.document.getElementById(Sprite).style.display = "none";
}

function VerificarVitoria() 
{

    if (posicaoX  >= tamanhoTelaHorizontal || posicaoY >= tamanhoTelaVertical)
    {
        TrocarSprite("sprite-jogando", "sprite-vitoria"); 
        this.document.getElementById("Mensagem").style.display = "inline";
        this.document.getElementById("Mensagem").innerHTML = "Jogador 1 venceu!";
    }
}

function VerificarBloqueio()
{
    if (posicaoX < 0) 
        MoverPlayerX(0);
    if (posicaoX > tamanhoTelaHorizontal)
        MoverPlayerX(tamanhoTelaHorizontal);

    
    if (posicaoY < 0) 
        MoverPlayerY(0)
    if (posicaoY > tamanhoTelaVertical)
        MoverPlayerY(tamanhoTelaVertical);
        
    
}


function ClickBotaoMusica() 
{
    musica.muted = !musica.muted 
    if(!musica.muted)
        musica.play();
    
    this.document.getElementById("BotaoMusica").classList = musica.muted ? "Desligado" :  "Ligado"
}


//#endregion