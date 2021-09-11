
setInterval(
    function carregar(){
        let texto = document.getElementById('texto')
   
        let data = new Date();
        let hora = data.getHours();
        let minuto = data.getMinutes();
        let segundo = data.getSeconds();
        //zero
        hora = zero(hora)
        minuto = zero(minuto)
        segundo = zero(segundo)
        //
        texto.innerHTML = `${hora}:${minuto}:${segundo}`
        
    
}, 1000); 
 function zero(x){
     if(x<10){
         x='0'+x;
     } return x
 }

 function referenciar(){
    window.location.href = "ref.html"
}