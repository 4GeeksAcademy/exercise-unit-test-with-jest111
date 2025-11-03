
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("Un euro deberia ser 1.07 dolar", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBeCloseTo(expected); 
});

test("Un dolar deberia ser 146.261 yen", function() {
    const yen = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(yen).toBeCloseTo(expected);
});

test("156.5 yen deberian ser 0.87 pounds", function() {
    const pounds = fromYenToPound(156.5);
    const expected = (156.5 / 156.5) * 0.87; 
    expect(pounds).toBeCloseTo(expected);
});

