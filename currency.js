function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }

    const exchangeRates = {
        usd: { eur: 0.85, gbp: 0.74 },
        eur: { usd: 1.18, gbp: 0.87 },
        gbp: { usd: 1.35, eur: 1.15 }
    };

    if (!(fromCurrency in exchangeRates) || !(toCurrency in exchangeRates[fromCurrency])) {
        alert('Invalid currency selection.');
        return;
    }

    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];

    document.getElementById('result').innerText = `${amount} ${fromCurrency.toUpperCase()} = ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;
}
