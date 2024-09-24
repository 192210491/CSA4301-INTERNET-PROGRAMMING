let cart = [];

function addToCart(product, price) {
    let item = { product: product, price: price };
    cart.push(item);
    alert(product + " has been added to the cart.");
    updateCart();
}

function updateCart() {
    console.log(cart); // You can later display this cart in a cart section
}