let cartItems = [];

function addToCart(button) {
    const menuItem = button.parentElement;
    const itemName = menuItem.dataset.name;
    const itemPrice = parseFloat(menuItem.dataset.price);
    
    const existingItem = cartItems.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({
            name: itemName,
            price: itemPrice,
            quantity: 1
        });
    }

    updateCart();
}
function removeFromCart(index, quantityToRemove) {
    const item = cartItems[index];
    
    if (item) {
        if (item.quantity > quantityToRemove) {
            item.quantity -= quantityToRemove;
        } else {
            cartItems.splice(index, 1);
        }
        updateCart();
   }
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartList.innerHTML = '';
    let total = 0;

    cartItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} x${item.quantity} - $${(item.price  * item.quantity).toFixed(2)} <button onclick="removeFromCart(${index}, 1)">Remove</button>`;
        cartList.appendChild(listItem);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
}

function showDetails(button) {
    const menuItem = button.parentElement;
    const itemName = menuItem.dataset.name;
    const itemPrice = menuItem.dataset.price;
    const itemImageSrc = menuItem.querySelector('img').src;
    const itemRecipe = menuItem.querySelector('p').textContent;
    const itemRating = menuItem.dataset.rating; 
    const itemSize = menuItem.dataset.size; 

   
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div>
            <img src="${itemImageSrc}" alt="${itemName}">
            <h3>${itemName}</h3>
            <p>Price: ${itemPrice} kr</p>
            <p>Recipe: ${itemRecipe}</p>
            <p>Rating: ${itemRating}</p>
            <p>Size: ${itemSize}</p>
        </div>
    `;

    const modal = document.getElementById('modal');
    modal.style.display='block';
}


document.querySelector('.close').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display='none';
});
