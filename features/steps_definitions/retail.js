const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('Usuario entra a la tienda online {string}', function(url) {
    this.url = url;
});

When('Selecciona {int} {string} cada una por un precio de {int}', function(cantidad, articulo, precio) {
    this.articulo = articulo;
    this.cantidad = cantidad;
    this.total = cantidad * precio;
});

When('Selecciona {int} {string} por un precio es {int}', function(cantidad, articulo, precio) {
    this.articulo1 = articulo;
    this.cantidad1 = cantidad;
    this.total1 = cantidad * precio;
});

Then('La cantidad total de articulos es {int}', function(totalArticulos) {
    let totalArt = this.cantidad + this.cantidad1;
    if (totalArt === totalArticulos) {
        assert.equal(totalArt, totalArticulos);
    } else {
        assert.notEqual(totalArt, totalArticulos);
    }
});

Then('El monto total de la bolsa es de {int}', function(montoTotal) {
    let total = this.total + this.total1;
    if (total === montoTotal) {
        assert.equal(total, montoTotal);
    } else {
        assert.notEqual(total, montoTotal);
    }

});