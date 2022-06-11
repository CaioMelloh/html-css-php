
<!-- php antes do html -->
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <!-- php durante o html -->
    <?php $var = "ok";?>
    <?php if($var == "sim"){ ?>
        <h1>Está ativado</h1>
        <?php } else{?>
            <h1>Não está ativado!</h1>
            <?php } ?>

</body>
</html>
<!-- o php é pré-processado, antes mesmo do html -->