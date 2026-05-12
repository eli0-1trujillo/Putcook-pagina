const tipoDoc = document.getElementById('tipoDoc');
const numDoc = document.getElementById('numDoc');

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

buscador.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {

    event.preventDefault();

    const primerProducto =
      document.querySelector(".box:not([style*='none'])");

    if (primerProducto) {

      primerProducto.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    }

  }

});

tipoDoc.addEventListener('change', function() {

    if (this.value === 'dni') {

        numDoc.placeholder = "Número de DNI";
        numDoc.maxLength = 8;
        numDoc.value = "";

    } else {

        numDoc.placeholder = "Número de CE";
        numDoc.maxLength = 12;
        numDoc.value = "";

    }

});

numDoc.addEventListener('input', function() {

    this.value = this.value.replace(/[^0-9]/g, '');

});

function openModal() {

  document.getElementById("modal").style.display = "block";

}

function closeModal() {

  document.getElementById("modal").style.display = "none";

}

window.onclick = function(event) {

  let menu = document.getElementById("menu");

  if (event.target === menu) {

    menu.classList.remove("abierto");

  }

}

function abrirMenu() {

  document.getElementById("menu-lateral").classList.add("active");
  document.getElementById("overlay").classList.add("active");

}

function cerrarMenu() {

  document.getElementById("menu-lateral").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");

}

function scrollLeftCustom(btn) {

  const container = btn.parentElement.querySelector('.box-container');

  container.scrollBy({
    left: -200,
    behavior: 'smooth'
  });

}

function scrollRightCustom(btn) {

  const container = btn.parentElement.querySelector('.box-container');

  container.scrollBy({
    left: 200,
    behavior: 'smooth'
  });

}
```
