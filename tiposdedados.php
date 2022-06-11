<?php
/*
String
float
int
boolean
arrays
Object
Null
*/

 $exemplo1 = "Olá, mundo!";
 $exemplo2 = 3.8;
 $exemplo3 = 5;
 $exemplo4 = true;
 var_dump($exemplo4); /*informa o tipo e seu valor*/
$exemplo5 = array("Fusca", "Chevete", "Camaro 98");


//exemplo Object
class carro{
    public $modelo;
    public $cor;
    public function __construct($modelo, $cor){
     
        $this->modelo = $modelo;
        $this->cor = $cor;
    }

    public function mensagem(){
        return "o modelo do carro é $this->modelo e sua cor é $this->cor";
    }
}

$carro1 = new carro("Chevette", "Vermelha");

echo $carro1->mensagem();

