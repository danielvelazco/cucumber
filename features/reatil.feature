Feature: Banco_retail
   retail
    
    Scenario: bolsa de compra calcula correctamente
        Given Usuario entra a la tienda online "tiendita.com"
        When Selecciona 2 "laptos" cada una por un precio de 385
        When Selecciona 1 "tv" por un precio es 430
        Then La cantidad total de articulos es 3   
        Then El monto total de la bolsa es de 1200

    Scenario: bolsa de compra no calcula correctamente
        Given Usuario entra a la tienda online "tiendita.com"
        When Selecciona 2 "laptos" cada una por un precio de 385
        When Selecciona 1 "tv" por un precio es 430
        Then La cantidad total de articulos es 4   
        Then El monto total de la bolsa es de 1250
