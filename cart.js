let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    cartList.innerHTML = ''; // Clear the cart list

    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price.toFixed(2)}`;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Remove';
        deleteButton.onclick = () => removeFromCart(index);
        li.appendChild(deleteButton);
        cartList.appendChild(li);

        total += item.price;
    });

    totalPrice.innerText = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1); // Remove the item from the cart
    updateCart(); // Update the cart view
}

document.getElementById('checkout').addEventListener('click', () => {
    document.getElementById('checkout-form').style.display = 'block';
});

document.getElementById('confirm-order').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    
    if (name && email && address) {
        alert(`Thank you for your order, ${name}! A confirmation email will be sent to ${email}.`);
        cart = []; // Empty the cart after the order is confirmed
        updateCart(); // Update the cart view to reflect the empty cart
        document.getElementById('checkout-form').style.display = 'none'; // Hide the checkout form
    } else {
        alert('Please fill in all the fields.');
    }
}
);
