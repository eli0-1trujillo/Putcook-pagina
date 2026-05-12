// ======================================
// FORMULARIO DOCUMENTO
// ======================================

const tipoDoc = document.getElementById("tipoDoc");
const numDoc = document.getElementById("numDoc");

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



/* =========================
   BUSCADOR
========================= */

const buscador = document.getElementById("buscador");

buscador.addEventListener("keyup", () => {

  const texto = buscador.value.toLowerCase();
  const productos = document.querySelectorAll(".box");

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

/* ENTER = IR AL PRODUCTO EXACTO */

buscador.addEventListener("keydown", function(event) {

  if (event.key === "Enter") {

    event.preventDefault();

    const texto = buscador.value.toLowerCase();
    const productos = document.querySelectorAll(".box");

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

        producto.style.border = "3px solid red";

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

// ======================================
// MENÚ LATERAL
// ======================================

function abrirMenu() {

  document
    .getElementById("menu-lateral")
    .classList.add("active");

  document
    .getElementById("overlay")
    .classList.add("active");

}

function cerrarMenu() {

  document
    .getElementById("menu-lateral")
    .classList.remove("active");

  document
    .getElementById("overlay")
    .classList.remove("active");

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
