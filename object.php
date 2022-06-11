<?php
   class carro{
    public $ano;
    public $anoatual;
    public $modelo;

    public function __construct($ano, $anoatual, $modelo){
        $this->ano = $ano;
        $this->anoatual = $anoatual;
        $this->modelo = $modelo;
    }
    public function modeloDoCarro(){
        $anocarro = ($this->anoatual - $this->ano);
        echo "O carro de modelo $this->modelo tem $anocarro anos";
    }
   }

   $carroteste = new carro(1984, 2022, "Audi classic");

   echo $carroteste->modeloDoCarro();
?>