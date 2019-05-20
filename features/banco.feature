Feature: Banco_retail
   banco y retail
    
    Scenario Outline: Generar estado de cuenta
        Given Seleccionar opcion generar estado de cuenta de "<cuenta>"
        When Se genero estado de cuenta?
        Then verifico si "<resultado>" se genero el estado de cuenta de la cuenta de cheques
           
    Examples:
    | cuenta | tipo-cuenta |   resultado |
    | 123    | cheques     |  SI         |
    | 456    | ahorros     |  NO         |


