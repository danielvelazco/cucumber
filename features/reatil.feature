Feature: Banco_retail
   banco y retail
    
    Scenario Outline: Generar estado de cuenta
        Given Seleccionar opcion generar estado de cuenta de "<cuenta>" 1
        When Se genero estado de cuenta? 1
        Then verifico si "<resultado>" se genero el estado de cuenta de la cuenta de cheques 1
           
    Examples:
    | cuenta | tipo-cuenta |   resultado |
    | 123    | cheques     |  SI         |
    | 456    | ahorros     |  NO         |


