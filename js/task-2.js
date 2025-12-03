function getShippingMessage (country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Jamaica", 100, 20)); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingMessage("Germany", 80, 10)); // "Shipping to Germany will cost 90 credits"
console.log(getShippingMessage("Sweden", 120, 15)); // "Shipping to Sweden will cost 135 credits"