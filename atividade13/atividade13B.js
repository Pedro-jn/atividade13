function salario(){
   
    let nome = prompt('nome');
    
    let salarioBruto= 0;

    salarioBruto = parseFloat(window.prompt('salario Bruto'));

    let valorINSS = 0.08;

    let desconto=0;
    
    desconto=salarioBruto*valorINSS; 

    salarioLiquido = salarioBruto - desconto

    window.alert("funcionario:" + nome)
    window.alert("com o desconto do INSS ele tera o salario liquido de:" + salarioLiquido)

}
