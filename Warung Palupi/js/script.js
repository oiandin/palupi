// Array untuk menyimpan item di keranjang belanja
var cartItems = [];

// Fungsi untuk menambahkan item ke keranjang belanja
function addToCart(itemName, itemPrice) {
  var quantityInputId = "quantity-" + itemName.toLowerCase().replace(" ", "-");
  var quantity = document.getElementById(quantityInputId).value;

  // Membuat objek item
  var item = {
    name: itemName,
    price: itemPrice,
    quantity: parseInt(quantity),
  };

  // Menambahkan item ke keranjang belanja
  cartItems.push(item);

  // Memperbarui tampilan keranjang belanja
  updateCartView();
}

// Fungsi untuk memperbarui tampilan keranjang belanja
function updateCartView() {
  var cartItemsList = document.getElementById("cart-items");
  var totalPriceElement = document.getElementById(total - price());
  var total = 0;

  // Mengosongkan tampilan keranjang belanja
  cartItemsList.innerHTML = "";

  // Menambahkan setiap item ke tampilan keranjang belanja
  cartItems.forEach(function (item) {
    var listItem = document.createElement("li");
    listItem.textContent =
      item.quantity + "x " + item.name + " - Rp " + item.price * item.quantity;
    cartItemsList.appendChild(listItem);

    // Menghitung total harga
    total += item.price * item.quantity;
  });

  // Menampilkan total harga
  totalPriceElement.textContent = "Total: Rp " + total.toFixed(2);
}
