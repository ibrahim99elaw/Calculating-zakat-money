// script.js
function calculateZakat() {
    const goldPrice = document.getElementById('gold-price').value*85;
    const amount = document.getElementById('amount').value;

    if (goldPrice && amount && amount > 0) {
        const goldPriceThreshold = parseFloat(goldPrice);

        if (amount >= goldPriceThreshold) {
            const zakat = amount * 0.025;
            document.getElementById('result').innerText = `زكاة المبلغ هي: ${zakat} جنيه`;
        } else {
            document.getElementById('result').innerText = 'المبلغ المدخل أقل من النصاب الشرعي للزكاة.';
        }
    } else {
        document.getElementById('result').innerText = 'يرجى إدخال مبلغ وسعر الذهب صحيحين.';
    }
}