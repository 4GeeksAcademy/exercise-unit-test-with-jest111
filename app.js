let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};

function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD;
    let yenes = euros * oneEuroIs.JPY;
    return yenes;
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}

function fromYenToPound(yen) {
    let euros = yen / oneEuroIs.JPY;
    let pounds = euros * oneEuroIs.GBP;
    return pounds;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, };
