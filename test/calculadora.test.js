
//importamos 
const calculadora= require('../calculadora');

//console.log(calcluladora.suma);

test ('Debe sumar numero a + b',()=>{
    expect(calculadora.suma(10,10)).toBe(20);
})

test ('Debe restar numero a - b',()=>{
    expect(calculadora.resta(100,50)).toBe(50);
})
test ('Debe multiplicar numero a * b',()=>{
    expect(calculadora.multiplicacion(10,5)).toBe(50);
})
test ('Debe dividir numero a / b',()=>{
    expect(calculadora.division(100,10)).toBe(10);
})

// test ('Test para realizar pruebas para la calculadora',()=>{
//     expect(calculadora.suma(10,10)).toBe(20);
//     expect(calculadora.resta(100,50)).toBe(50);
//     expect(calculadora.multiplicacion(10,5)).toBe(50);
//     expect(calculadora.division(100,10)).toBe(10);

// })