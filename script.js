// =========================
// LUMI STORE - PRODUCTS
// =========================

// All Products
const products = [

    // DRESSES (8)
    {
        id: 1,
        name: "Elegant Beige Dress",
        category: "dresses",
        price: 45,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
        sizes: ["S", "M", "L", "XL"],
        featured: true
    },
    {
        id: 2,
        name: "Simple White Dress",
        category: "dresses",
        price: 50,
        image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500",
        sizes: ["S", "M", "L", "XL"],
        featured: true
    },
    {
        id: 3,
        name: "Classic Black Dress",
        category: "dresses",
        price: 55,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500",
        sizes: ["S", "M", "L", "XL"],
        featured: false
    },
    {
        id: 4,
        name: "Soft Summer Dress",
        category: "dresses",
        price: 40,
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500",
        sizes: ["S", "M", "L"],
        featured: false
    },
    {
        id: 5,
        name: "Floral Midi Dress",
        category: "dresses",
        price: 60,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
        sizes: ["S", "M", "L", "XL"],
        featured: false
    },
    {
        id: 6,
        name: "Elegant Casual Dress",
        category: "dresses",
        price: 48,
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500",
        sizes: ["S", "M", "L"],
        featured: false
    },
    {
        id: 7,
        name: "Minimal Pink Dress",
        category: "dresses",
        price: 52,
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500",
        sizes: ["S", "M", "L", "XL"],
        featured: true
    },
    {
        id: 8,
        name: "Classic Evening Dress",
        category: "dresses",
        price: 65,
        image: "https://images.unsplash.com/photo-1502716119720-b23a1e3b6d4e?w=500",
        sizes: ["S", "M", "L"],
        featured: false
    },

    // TOPS (4)
    {
        id: 9,
        name: "White Basic Top",
        category: "tops",
        price: 25,
        image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=500",
        sizes: ["S", "M", "L"],
        featured: false
    },
    {
        id: 10,
        name: "Beige Elegant Blouse",
        category: "tops",
        price: 35,
        image: "https://images.unsplash.com/photo-1564257577-6a1d5c6d7a4e?w=500",
        sizes: ["S", "M", "L", "XL"],
        featured: false
    },
    {
        id: 11,
        name: "Classic Brown Shirt",
        category: "tops",
        price: 38,
        image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=500",
        sizes: ["S", "M", "L"],
        featured: false
    },
    {
        id: 12,
        name: "Minimalist Knit Top",
        category: "tops",
        price: 30,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
        sizes: ["S", "M", "L", "XL"],
        featured: false
    },

    // SKIRTS (4)
    {
        id: 13,
        name: "Beige Long Skirt",
        category: "skirts",
        price: 42,
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500",
        sizes: ["S", "M", "L"],
        featured: false
    },
    {
        id: 14,
        name: "Classic Black Skirt",
        category: "skirts",
        price: 38,
        image: "https://images.unsplash.com/photo-1506629905607-d9b1b7e4f9d6?w=500",
        sizes: ["S", "M", "L", "XL"],
        featured: false
    },
    {
        id: 15,
        name: "Elegant Midi Skirt",
        category: "skirts",
        price: 45,
        image: "https://images.unsplash.com/photo-1582142306909-195724d33ffc?w=500",
        sizes: ["S", "M", "L"],
        featured: false
    },
    {
        id: 16,
        name: "Soft Brown Skirt",
        category: "skirts",
        price: 40,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500",
        sizes: ["S", "M", "L", "XL"],
        featured: false
    },

    // BAGS (3)
    {
        id: 17,
        name: "Classic Handbag",
        category: "bags",
        price: 55,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
        sizes: [],
        featured: true
    },
    {
        id: 18,
        name: "Elegant Shoulder Bag",
        category: "bags",
        price: 48,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500",
        sizes: [],
        featured: false
    },
    {
        id: 19,
        name: "Minimal Beige Bag",
        category: "bags",
        price: 42,
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500",
        sizes: [],
        featured: false
    },

    // JEWELRY (3)
    {
        id: 20,
        name: "Golden Necklace",
        category: "jewelry",
        price: 20,
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500",
        sizes: [],
        featured: false
    },
    {
        id: 21,
        name: "Elegant Earrings",
        category: "jewelry",
        price: 18,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500",
        sizes: [],
        featured: false
    },
    {
        id: 22,
        name: "Minimal Bracelet",
        category: "jewelry",
        price: 22,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500",
        sizes: [],
        featured: false
    },

    // SUNGLASSES (2)
    {
        id: 23,
        name: "Classic Sunglasses",
        category: "sunglasses",
        price: 25,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
        sizes: [],
        featured: false
    },
    {
        id: 24,
        name: "Elegant Sunglasses",
        category: "sunglasses",
        price: 30,
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500",
        sizes: [],
        featured: false
    }

];


// =========================
// SHOPPING CART DATA
// =========================

let cart = [];

let currentCategory = "all";


// =========================
// DISPLAY PRODUCTS
// =========================

function createProductCard(product) {

    const card = document.createElement("div");

    card.className = "product-card";

    card.innerHTML = `
        ${product.featured ? '<span class="badge">Best Seller</span>' : ''}

        <img
            src="${product.image}"
            alt="${product.name}"
            onclick="openProductDetails(${product.id})"
        >

        <h3>${product.name}</h3>

        <p class="price">$${product.price.toFixed(2)}</p>

        <button onclick="openProductDetails(${product.id})">
            View Details
        </button>
    `;

    return card;

}


// Display All Products

function displayProducts(list = products) {

    const container = document.getElementById("product-container");

    container.innerHTML = "";

    list.forEach(product => {

        container.appendChild(createProductCard(product));

    });

    document.getElementById("results-count").textContent =
        `${list.length} products found`;

}


// Display Best Sellers

function displayBestSellers() {

    const container = document.getElementById("best-sellers-container");

    const featuredProducts = products.filter(
        product => product.featured
    );

    featuredProducts.forEach(product => {

        container.appendChild(createProductCard(product));

    });

}


// =========================
// FILTER PRODUCTS
// =========================

function filterProducts(category, button) {

    currentCategory = category;

    document.querySelectorAll(".category-btn").forEach(btn => {

        btn.classList.remove("active");

    });

    button.classList.add("active");

    searchProducts();

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

}


// =========================
// SEARCH PRODUCTS
// =========================

function searchProducts() {

    const searchValue = document.getElementById("search-input")
        .value.toLowerCase().trim();

    const filteredProducts = products.filter(product => {

        const matchesName = product.name.toLowerCase()
            .includes(searchValue);

        const matchesCategory =
            currentCategory === "all" ||
            product.category === currentCategory;

        return matchesName && matchesCategory;

    });

    displayProducts(filteredProducts);

}


// Search while typing

document.getElementById("search-input").addEventListener(
    "input",
    searchProducts
);


// =========================
// PRODUCT DETAILS
// =========================

function openProductDetails(productId) {

    const product = products.find(item => item.id === productId);

    const details = document.getElementById("product-details");

    let sizeOptions = "";

    if (product.sizes.length > 0) {

        sizeOptions = `
            <label class="size-label">Choose Size:</label>

            <select id="selected-size" class="size-select">

                <option value="">Select a size</option>

                ${product.sizes.map(size =>
                    `<option value="${size}">${size}</option>`
                ).join("")}

            </select>
        `;

    }

    details.innerHTML = `

        <img
            src="${product.image}"
            class="detail-image"
            alt="${product.name}"
        >

        <h2 class="detail-title">${product.name}</h2>

        <p class="detail-description">
            Discover timeless elegance with this beautiful piece
            from our LUMI STORE collection.
        </p>

        <p class="detail-price">
            $${product.price.toFixed(2)}
        </p>

        ${sizeOptions}

        <button
            class="detail-add-btn"
            onclick="addToCart(${product.id})"
        >
            Add to Cart
        </button>

    `;

    document.getElementById("product-modal").style.display = "flex";

}


// Close Product Details

function closeProductModal() {

    document.getElementById("product-modal").style.display = "none";

}


// =========================
// ADD TO CART
// =========================

function addToCart(productId) {

    const product = products.find(item => item.id === productId);

    let selectedSize = "One Size";

    if (product.sizes.length > 0) {

        const sizeInput = document.getElementById("selected-size");

        if (!sizeInput || !sizeInput.value) {

            alert("Please select a size first.");

            return;

        }

        selectedSize = sizeInput.value;

    }

    const existingItem = cart.find(item =>
        item.id === productId && item.size === selectedSize
    );

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({

            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: selectedSize,
            quantity: 1

        });

    }

    updateCart();

    closeProductModal();

    alert("Product added to your cart!");

}


// =========================
// UPDATE CART
// =========================

function updateCart() {

    const cartContainer = document.getElementById("cart-items");

    cartContainer.innerHTML = "";

    let total = 0;

    let totalQuantity = 0;

    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <p class="empty-cart">
                Your shopping cart is empty.
            </p>
        `;

    }

    cart.forEach(item => {

        total += item.price * item.quantity;

        totalQuantity += item.quantity;

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `

            <img src="${item.image}" alt="${item.name}">

            <div class="cart-item-info">

                <h4>${item.name}</h4>

                <p>Size: ${item.size}</p>

                <p>$${item.price.toFixed(2)}</p>

                <div class="quantity-controls">

                    <button onclick="changeQuantity(${item.id}, '${item.size}', -1)">
                        -
                    </button>

                    <span>${item.quantity}</span>

                    <button onclick="changeQuantity(${item.id}, '${item.size}', 1)">
                        +
                    </button>

                </div>

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${item.id}, '${item.size}')"
                >
                    Remove
                </button>

            </div>

        `;

        cartContainer.appendChild(cartItem);

    });

    document.getElementById("cart-count").textContent = totalQuantity;

    document.getElementById("cart-total").textContent = total.toFixed(2);

}


// =========================
// CHANGE QUANTITY
// =========================

function changeQuantity(productId, size, amount) {

    const item = cart.find(product =>
        product.id === productId && product.size === size
    );

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        cart = cart.filter(product =>
            !(product.id === productId && product.size === size)
        );

    }

    updateCart();

}


// =========================
// REMOVE FROM CART
// =========================

function removeFromCart(productId, size) {

    cart = cart.filter(item =>
        !(item.id === productId && item.size === size)
    );

    updateCart();

}


// =========================
// OPEN AND CLOSE CART
// =========================

function openCart() {

    document.getElementById("cart-panel").classList.add("open");

    document.getElementById("cart-overlay").style.display = "block";

}


function closeCart() {

    document.getElementById("cart-panel").classList.remove("open");

    document.getElementById("cart-overlay").style.display = "none";

}


// =========================
// CHECKOUT
// =========================

function showCheckout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }

    closeCart();

    document.getElementById("checkout-modal").style.display = "flex";

}


function closeCheckout() {

    document.getElementById("checkout-modal").style.display = "none";

}


// Submit Demo Order

document.getElementById("checkout-form").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        alert(
            "Your demo order has been placed successfully!\n\n" +
            "Thank you for choosing LUMI STORE."
        );

        cart = [];

        updateCart();

        this.reset();

        closeCheckout();

    }
);


// =========================
// START WEBSITE
// =========================

displayProducts();

displayBestSellers();

updateCart();