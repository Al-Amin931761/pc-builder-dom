// 8 GB Memory 
document.getElementById('eightGB').addEventListener('click', function () {
    updatePrice('memory-cost', 0);
});

// 16 GB Memory 
document.getElementById('sixteenGB').addEventListener('click', function () {
    updatePrice('memory-cost', 200);
});

// 256 GB SSD 
document.getElementById('ssd1').addEventListener('click', function () {
    updatePrice('storage-cost', 0);
});

// 512 GB SSD
document.getElementById('ssd2').addEventListener('click', function () {
    updatePrice('storage-cost', 400);
});

// 1 TB SSD 
document.getElementById('ssd3').addEventListener('click', function () {
    updatePrice('storage-cost', 800);
});

// Free Delivery
document.getElementById('free-delivery').addEventListener('click', function () {
    updatePrice('delivery-cost', 0);
});

// Paid Delivery
document.getElementById('paid-delivery').addEventListener('click', function () {
    updatePrice('delivery-cost', 21);
});


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