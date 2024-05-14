function number(){
     
    
    
    let numberA = 0
    let numberB =0
    numberA= parseInt(prompt('numberA'))  //pedir o primeiro numero
    numberB= parseInt(prompt('numberB'))  //pedir o segundo numero
   
    diferenca = numberA - numberB;  // conta de diferença entre numero A e B
    dobro = numberA * 2 + numberB*3 // muita coisa
    mult = numberA * numberB // mutiplicação entre as duas variaveis

    if(numberB< numberA){
        console.log(numberA, numberB)
    }  else(numberA < numberB) 
    {

        console.log(numberB, numberA)
    }
    window.alert("a diferença entre os dois numeros é: " + diferenca)

    window.alert("o dobro do primeiro mais o triplo do segundo é: " + dobro)

    window.alert("a multiplicção entre elas é: "+ mult)

}