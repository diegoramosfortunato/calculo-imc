function calcular(){
    var peso = window.document.getElementById('txtn')
    var altura = window.document.getElementById('txta')
    var res = window.document.getElementById('res')
    var peso = Number(txtn.value)
    var altura = Number(txta.value)
    var imc =  Number(txtn.value) / (Number(txta.value) * Number(txta.value) )
    if(Number(txtn.value) < 0){
        window.alert('[Erro] confira os dados digitado')
    }
    res.innerHTML = `o valor do imc é : ${imc.toFixed(2)}`


    
    if(imc < 18.5) {
        res.innerHTML = `[Abaixo do peso] seu imc está abaixo do recomendado, recomenda-se proucurar um nutricionista(a)!!`
        
        
       

    }else if(imc >=18.5 && imc < 24.99) {
        res.innerHTML =  ` [peso normal]  Parabéns seu imc esta dentro do recomendado!!`
        
    }else if(imc >=24.99 && imc <30) {
        res.innerHTML = `[Sobrepeso] seu imc está acima do recomendado!!`
    }else {
        res.innerHTML = `[Obesidade] cuidado! seu imc está muito acima do recomendado, recomenda-se o acompanhamento de um nutricionista!!`
    }
    
   
}
 
