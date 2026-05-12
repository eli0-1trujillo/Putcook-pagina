// ======================================
// FORMULARIO DOCUMENTO
// ======================================

const tipoDoc = document.getElementById("tipoDoc");
const numDoc = document.getElementById("numDoc");

if (tipoDoc && numDoc) {

  tipoDoc.addEventListener("change", function () {

    if (this.value === "dni") {

      numDoc.placeholder = "Número de DNI";
      numDoc.maxLength = 8;

    } else {

      numDoc.placeholder = "Número de CE";
      numDoc.maxLength = 12;

    }

    numDoc.value = "";

  });

  // SOLO NÚMEROS
  numDoc.addEventListener("input", function () {

    this.value = this.value.replace(/[^0-9]/g, "");

  });

}


// ======================================
// BUSCADOR
// ======================================

const buscador = document.getElementById("buscador");

if (buscador) {

  buscador.addEventListener("keyup", () => {

    const texto = buscador.value.toLowerCase();

    const productos =
      document.querySelectorAll(".box");

    productos.forEach(producto => {

      const nombre = producto
        .querySelector("h3")
        .innerText
        .toLowerCase();

      if (nombre.includes(texto)) {

        producto.style.display = "";

      } else {

        producto.style.display = "none";

      }

    });

  });

}


// ======================================
// ENTER BUSCADOR
// ======================================

if (buscador) {

  buscador.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

      event.preventDefault();

      const texto =
        buscador.value.toLowerCase();

      const productos =
        document.querySelectorAll(".box");

      let encontrado = false;

      productos.forEach(producto => {

        const nombre = producto
          .querySelector("h3")
          .innerText
          .toLowerCase();

        if (nombre === texto) {

          producto.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });

          producto.style.border =
            "3px solid red";

          setTimeout(() => {

            producto.style.border = "";

          }, 2000);

          encontrado = true;

        }

      });

      if (!encontrado) {

        alert("Producto no encontrado");

      }

    }

  });

}

// ======================================
// SCROLL PRODUCTOS
// ======================================

function scrollLeftCustom(btn) {

  const container =
    btn.parentElement.querySelector(".box-container");

  container.scrollBy({
    left: -200,
    behavior: "smooth"
  });

}

function scrollRightCustom(btn) {

  const container =
    btn.parentElement.querySelector(".box-container");

  container.scrollBy({
    left: 200,
    behavior: "smooth"
  });

}

// ======================================
// CARRITO
// ======================================

let total = 0;

const carrito =
  document.getElementById("cart-total");

const botonesCarrito =
  document.querySelectorAll(".add-to-cart");

botonesCarrito.forEach(boton => {

  boton.addEventListener("click", () => {

    const producto =
      boton.closest(".box");

    const precioTexto =
      producto.querySelector(".price").innerText;

    const precio = parseFloat(
      precioTexto.replace("S/", "").trim()
    );

    total += precio;

    carrito.innerText =
      `🛒 S/ ${total.toFixed(2)}`;

  });

});

// ======================================
// MENÚ LATERAL
// ======================================

function abrirMenu() {

  const menu =
    document.getElementById("menu-lateral");

  const overlay =
    document.getElementById("overlay");

  menu.classList.add("active");
  overlay.classList.add("active");

}

function cerrarMenu() {

  const menu =
    document.getElementById("menu-lateral");

  const overlay =
    document.getElementById("overlay");

  menu.classList.remove("active");
  overlay.classList.remove("active");

}
