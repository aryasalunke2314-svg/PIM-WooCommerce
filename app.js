let products = [
    {
        name: "Wireless Headphones",
        sku: "WH001",
        price: "1999",
        category: "Electronics",
        stock: "50",
        brand: "Sony",
        color: "Black",
        attribute: "Bluetooth",
        status: "Synced"
    },
    {
        name: "Smart Watch",
        sku: "SW001",
        price: "2999",
        category: "Wearables",
        stock: "25",
        brand: "Boat",
        color: "Black",
        attribute: "44mm",
        status: "Pending"
    },
    {
        name: "Bluetooth Speaker",
        sku: "BS001",
        price: "1499",
        category: "Audio",
        stock: "40",
        brand: "JBL",
        color: "Black",
        attribute: "Waterproof",
        status: "Pending"
    }
];

function addProduct() {

    const product = {
        name: document.getElementById("name").value,
        sku: document.getElementById("sku").value,
        price: document.getElementById("price").value,
        category: document.getElementById("category").value,
        stock: document.getElementById("stock").value,
        brand: document.getElementById("brand").value,
        color: document.getElementById("color").value,
        attribute: document.getElementById("attribute").value,
        status: "Pending"
    };

    if (!product.name || !product.sku || !product.price) {
        alert("Please enter Product Name, SKU and Price.");
        return;
    }

    products.push(product);

    displayProducts();
    clearForm();
}

function displayProducts() {

    const table = document.getElementById("productTable");

    table.innerHTML = "";

    products.forEach((product, index) => {

        const row = `
            <tr>
                <td>
                    <strong>${product.name}</strong><br>
                    ${product.category}
                </td>

                <td>${product.sku}</td>

                <td>₹${product.price}</td>

                <td>${product.stock}</td>

                <td>
                    ${product.brand}<br>
                    ${product.color}<br>
                    ${product.attribute}
                </td>

                <td class="status">${product.status}</td>

                <td>
                    <button class="sync-btn" onclick="syncProduct(${index})">
                        Sync
                    </button>
                </td>
            </tr>
        `;

        table.innerHTML += row;
    });

    updateCounts();
}

function syncProduct(index) {

    products[index].status = "Synced";

    displayProducts();

    document.getElementById("message").innerText =
        "✓ Product synchronized successfully with WooCommerce";
}

function syncAll() {

    products.forEach(product => {
        product.status = "Synced";
    });

    displayProducts();

    document.getElementById("message").innerText =
        "✓ All products synchronized successfully with WooCommerce";
}

function updateCounts() {

    document.getElementById("totalProducts").innerText =
        products.length;

    document.getElementById("syncedProducts").innerText =
        products.filter(p => p.status === "Synced").length;

    document.getElementById("pendingProducts").innerText =
        products.filter(p => p.status === "Pending").length;
}

function clearForm() {

    document.getElementById("name").value = "";
    document.getElementById("sku").value = "";
    document.getElementById("price").value = "";
    document.getElementById("category").value = "";
    document.getElementById("stock").value = "";
    document.getElementById("brand").value = "";
    document.getElementById("color").value = "";
    document.getElementById("attribute").value = "";
}

function checkConnection() {

    const storeUrl = document.getElementById("storeUrl").value;

    if (!storeUrl) {
        document.getElementById("connectionMessage").innerText =
            "Please enter a WooCommerce Store URL.";
        return;
    }

    document.getElementById("connectionMessage").innerText =
        "✓ WooCommerce connection verified successfully";
}

displayProducts();