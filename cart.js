const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");

const cartBtn = document.getElementById("cart-btn");

const displayCart = () => {

    const modalHeader = document.createElement("div");
    const modalClose = document.createElement("div");
    const modalContainer = document.getElementById("modal-container");
    const modalOverlay = document.getElementById("modal-overlay");

    modalClose.innerText = "🗑️"
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "carrito";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);
};

cartBtn.addEventListener("click" , displayCart);
