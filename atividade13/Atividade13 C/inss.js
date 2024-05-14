function inss(){
   
    let nome = prompt('nome');
    
    let salarioBruto= 0;

    salarioBruto = parseFloat(window.prompt('salario Bruto'));

    let valorINSS = 0

    let desconto=0;

    if( salarioBruto < 1000){
        valorINSS = 0.08
    }
    if(salarioBruto>1000 <15000){
        valorINSS= 0.085
    }
    if(salarioBruto>15000){
        valorINSS=0.09
    }
    desconto=salarioBruto*valorINSS; 

    salarioLiquido = salarioBruto - desconto

    window.alert("funcionario:" + nome)
    window.alert("com o desconto do INSS ele tera o salario liquido de:" + salarioLiquido)
}
