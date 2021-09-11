setInterval(
    function carregar(){
        
        let texto = document.getElementById('texto')
   
        let data = new Date();
        let hora = data.getHours();
        let minuto = data.getMinutes();
        let segundo = data.getSeconds();
        let dia = data.getUTCDay();

        // ajustando dias
        if(dia==7){
            dia= 1
        } 
        else if(dia==1){
            dia = 2
        }
        else if(dia==2){
            dia = 3
        }
        else if(dia==3){
            dia = 4
        }
        else if(dia==4){
            dia = 5
        }
        else if(dia==5){
            dia = 6
        }
        else if(dia==6){
            dia = 7
        }
        // 

        let valorSegundos;
        let valorAtual;

        if(dia==1 && hora==15 && minuto==30 && segundo == 0){
            valorSegundos == Number(604800);
        }
        valorSegundos == Number(604800);
        let formulaDia = Number(dia)*24*60*60
        let formulaHora = Number(hora)*60*60
        let formulaMinuto = Number(minuto)*60
        let formulaSegundo = Number(segundo)
        valorAtual = Number(formulaDia+formulaHora+formulaMinuto+formulaSegundo)
        texto.innerHTML = `${Number(valorSegundos)-Number(valorAtual)}`
        
}, 1000); 


 function zero(x){
     if(x<10){
         x='0'+x;
     } return x
 }

 function referenciar(){
    window.location.href = "ref.html"
}