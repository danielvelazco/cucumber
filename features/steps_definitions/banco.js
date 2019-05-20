const assert = require('assert');
const { Given, When, Then, And } = require('cucumber');

Given('Seleccionar opcion generar estado de cuenta de {string}', function(cuenta) {
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

When('Se genero estado de cuenta?', function() {
    this.generated = true;
});

Then('verifico si {string} se genero el estado de cuenta de la cuenta de cheques', function(resultEsperado) {
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