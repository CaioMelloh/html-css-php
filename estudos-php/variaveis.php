<?php
    $cor = "Azul";
    $cor = "Vermelho";
    $COR = "Black";
    echo "<h1>$COR</h1>";
    $x = 5;
    $y = 10;
    echo $x + $y;

    function teste(){
        global $x; /* <- acessando o x global*/
        echo "<h2>O valor de x é: $x</h2>";
        // não foi localizado a var x dentro da função.
        //para usar global basta referenciar isso na função;
    }
    teste();
    echo "<p>O valor de x fora da função é: $x</p>";