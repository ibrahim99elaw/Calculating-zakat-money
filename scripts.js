// script.js
function calculateZakat() {
    const amount = document.getElementById('amount').value;
    if (amount && amount > 0) {
        const zakat = amount * 0.025;
        document.getElementById('result').innerText = `زكاة المبلغ هي: ${zakat} جنيه `;
    } else {
        document.getElementById('result').innerText = 'يرجى إدخال مبلغ صحيح.';
    }
}
