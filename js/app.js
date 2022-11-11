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