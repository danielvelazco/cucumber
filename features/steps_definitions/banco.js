const assert = require('assert');
const { Given, When, Then } = require('cucumber');

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
    let balance_obtenido = null;
    let cantidad_debitos = null;
    let cantidad_creditos = null;
    if (this.generated) {
        if (this.tipoCuenta === 'cheques') {
            this.result = 'SI';
            this.balance_obtenido = '525.52';
            this.cantidad_debitos = '5';
            this.cantidad_creditos = '2';
            assert.equal(this.result, resultEsperado);
        } else {
            this.result = 'NO';
            this.balance_obtenido = '125.14';
            this.cantidad_debitos = '7';
            this.cantidad_creditos = '4';
            assert.equal(this.result, resultEsperado);
        }
    }
});

Then('El balance disponible es {string}', function(balance_esperado) {
    let balance_obtenido = this.balance_obtenido;

    this.balance_esperado = balance_esperado;
    assert.equal(this.balance_esperado, balance_obtenido);
    assert.notEqual(this.balance_esperado, '525.53');
    assert.notEqual(this.balance_esperado, '525.51');
});

Then('La cantidad de debitos en cuenta es {string}', function(debitos) {
    let deb = debitos;
    assert.equal(deb, this.cantidad_debitos);
    assert.notEqual(deb, '8');
});

Then('La cantidad de creditos en cuenta es {string}', function(creditos) {
    let cred = creditos;
    assert.equal(cred, this.cantidad_creditos);
    assert.notEqual(cred, '3');
});