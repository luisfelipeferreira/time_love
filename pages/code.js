setInterval(
    function carregar(){
        let sabado = document.getElementById('wek_s')
        let domingo = document.getElementById('wek_d')
        
        let texto = document.getElementById('texto')
        texto.innerHTML = `Vão se ver que dia? &#x1F9D0` 
        
        let data = new Date();
        let hora = data.getHours();
        let minuto = data.getMinutes();
        let segundo = data.getSeconds();
        let dia = data.getUTCDay();
        let valorSegundos;
        
        
        valorSegundos = 662400


        if(domingo.checked == true){

            // ajustando dias para o sabado
            if(dia==7){
                dia= 0
                valorSegundos = 57600
            } 
            else if(dia==1){
                dia = 1
            }
            else if(dia==2){
                dia = 2
            }
            else if(dia==3){
                dia = 3
            }
            else if(dia==4){
                dia = 4
            }
            else if(dia==5){
                dia = 5
            }
            else if(dia==6){
                dia = 6
            }
            // 

            if(dia == 7 && hora>=16 && hora<=21){
                texto.innerHTML = `Hora da alegria! &#x1F929`
            }else{
                let valorAtual;
                let soma;
        
        
        
                let formulaDia = ((dia*24)*60)*60
                let formulaHora = (hora*60)*60
                let formulaMinuto = minuto*60
                let formulaSegundo = segundo
                valorAtual = formulaDia+formulaHora+formulaMinuto+formulaSegundo
                soma = valorSegundos-valorAtual
                texto.innerHTML = `Faltam ${soma} segundos &#x1F929`
                }
        }

        if(sabado.checked ==true){

            // ajustando dias para o domingo
            if(dia==6){
                dia= 0
                valorSegundos = 57600
            } 
            else if(dia==7){
                dia = 1
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
            // 
            if(dia == 6 && hora>=16 && hora<=21){
                texto.innerHTML = `Hora da alegria! &#x1F929`
            }else{
                let valorAtual;
                let soma;
        
        
        
                let formulaDia = ((dia*24)*60)*60
                let formulaHora = (hora*60)*60
                let formulaMinuto = minuto*60
                let formulaSegundo = segundo
                valorAtual = formulaDia+formulaHora+formulaMinuto+formulaSegundo
                soma = valorSegundos-valorAtual
                texto.innerHTML = `Faltam ${soma} segundos &#x1F929`
                }
        }

        
        
}, 1000); 


 function referenciar(){
    window.location.href = "ref.html"
}