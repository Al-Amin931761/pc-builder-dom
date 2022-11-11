function onClick(clickId, updateId, price) {
    document.getElementById(clickId).addEventListener('click', function () {
        updatePrice(updateId, price);
    });
}

onClick('eightGB', 'memory-cost', 0);
onClick('sixteenGB', 'memory-cost', 200);
onClick('ssd1', 'storage-cost', 0);
onClick('ssd2', 'storage-cost', 400);
onClick('ssd3', 'storage-cost', 800);
onClick('free-delivery', 'delivery-cost', 0);
onClick('paid-delivery', 'delivery-cost', 21);

function updatePrice(itemId, ItemPrice) {
    const item = document.getElementById(itemId);
    item.innerText = ItemPrice;

    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;

    // total price update 
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCost);
}
// Promo message 
document.getElementById('success').style.display = 'none';
document.getElementById('error').style.display = 'none';

// Promo code 
const fakeCode = "iMac"
document.getElementById('apply-button').addEventListener('click', function () {
    const code = document.getElementById('promo-input').value;
    if (code === fakeCode) {
        const totalPrice = document.getElementById('total-price');
        const updatePrice = parseFloat(totalPrice.innerText) - (parseFloat(totalPrice.innerText) * 0.2);
        totalPrice.innerText = updatePrice;
        // clear input field 
        document.getElementById('promo-input').value = ''
        // message 
        document.getElementById('success').style.display = 'block'
    }
    else {
        // clear input field
        document.getElementById('promo-input').value = ''
        // message 
        document.getElementById('error').style.display = 'block';
    }
});