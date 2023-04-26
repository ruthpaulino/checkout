function getValue() {

    var preco = 69.90;
    var value = document.getElementById("qtd").value;
    var total = preco * value;

    document.getElementById("result").innerHTML = "O Total é" + " " + total;


};
