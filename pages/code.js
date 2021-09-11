setInterval(
    function carregar(){
        
        let texto = document.getElementById('texto')
   
        let data = new Date();
        let hora = data.getHours();
        let minuto = data.getMinutes();
        let segundo = data.getSeconds();
        let dia = data.getUTCDay();
        let valorInicial;
        let soma;
        let valorAtual;
        //zero
        hora = zero(hora)
        minuto = zero(minuto)
        segundo = zero(segundo)
        //
        if(dia==7 && hora==15 && minuto==30 && segundo == 0){
            valorSegundos == 604800;
            valorAtual
            
        }
        else if(dia==6 && hora==23 && minuto==04){
            valorInicial == 58800
            texto.innerHTML = `${diminuir(valorInicial)}`
        }
        
        
    
}, 1000); 

function diminuir(x){
    x = x-1;
} return x


 function zero(x){
     if(x<10){
         x='0'+x;
     } return x
 }

 function referenciar(){
    window.location.href = "ref.html"
}