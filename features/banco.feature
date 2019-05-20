Feature: Banco
   banco
    
    Scenario Outline: Generar estado de cuenta y verificar balance
        Given Seleccionar opcion generar estado de cuenta de "<cuenta>"
        When Se genero estado de cuenta?
        Then verifico si "<resultado>" se genero el estado de cuenta de la cuenta de cheques
        Then El balance disponible es "<balance_esperado>"
        Then La cantidad de debitos en cuenta es "<cantidad_debitos>"
        Then La cantidad de creditos en cuenta es "<cantidad_creditos>"


    Examples:
    | cuenta | tipo-cuenta |   resultado | balance_esperado    | cantidad_debitos | cantidad_creditos |
    | 123    | cheques     |  SI         | 525.52              |    5             |        2          |
    | 456    | ahorros     |  NO         | 125.14              |    7             |        4          | 

    