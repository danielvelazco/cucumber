const assert = require('assert');
const { Given, When, Then, And } = require('cucumber');

Given('Seleccionar opcion generar estado de cuenta de {string} 1', function(cuenta) {
    this.cuenta = cuenta;
    switch (this.cuenta) {
        case '123':
            this.tipoCuenta = 'cheques';
            break;
        case '456':
            this.tipoCuenta = 'ahorros';
            break;
    }
});

When('Se genero estado de cuenta? 1', function() {
    this.generated = true;
});

Then('verifico si {string} se genero el estado de cuenta de la cuenta de cheques 1', function(resultEsperado) {
    let result = null;
    if (this.generated) {
        if (this.tipoCuenta === 'cheques') {
            this.result = 'SI';
            assert.equal(this.result, resultEsperado);
        } else {
            this.result = 'NO';
            assert.equal(this.result, resultEsperado);
        }

    }
});