function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function calculate() {
    let price = document.getElementById("serviceSelect").value;
    let quantity = document.getElementById("quantity").value;

    if (quantity === "") {
        alert("Enter quantity");
        return;
    }

    let total = (price / 1000) * quantity;
    document.getElementById("totalPrice").innerHTML =
        "Total Price: ₱" + total.toFixed(2);
}

function setTheme(theme) {
    if (theme === "light") {
        document.body.style.background = "#ffffff";
        document.body.style.color = "#000000";
    } else {
        document.body.style.background = "#121212";
        document.body.style.color = "#ffffff";
    }
}