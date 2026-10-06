const productos = [
  {
    "id": 1,
    "nombre": "Auriculares Bluetooth",
    "descripcion": "Auriculares inalámbricos con cancelación de ruido.",
    "precio": 75.99,
    "imagen": "https://picsum.photos/200/200?random=1",
    "reseñas": [
      {
        "usuario": "Ana Ruiz",
        "texto": "¡Excelente calidad de sonido!",
        "fecha": "2025-09-01"
      }
    ]
  },
  {
    "id": 2,
    "nombre": "Reloj Inteligente",
    "descripcion": "Reloj con monitor de actividad física y notificaciones.",
    "precio": 120.00,
    "imagen": "https://picsum.photos/200/200?random=2",
    "reseñas": [
      {
        "usuario": "Carlos Pérez",
        "texto": "Me encanta, super útil para el día a día.",
        "fecha": "2025-09-02"
      },
      {
        "usuario": "Sofía Gómez",
        "texto": "Muy elegante y funcional.",
        "fecha": "2025-09-03"
      }
    ]
  },
  {
    "id": 3,
    "nombre": "Webcam HD",
    "descripcion": "Cámara web de alta definición para videollamadas.",
    "precio": 45.50,
    "imagen": "https://picsum.photos/200/200?random=3",
    "reseñas": []
  },
  {
    "id": 4,
    "nombre": "Mouse Gamer",
    "descripcion": "Mouse ergonómico con iluminación LED RGB.",
    "precio": 55.00,
    "imagen": "https://picsum.photos/200/200?random=4",
    "reseñas": [
      {
        "usuario": "Juan Cárdenas",
        "texto": "Preciso y cómodo para jugar por horas.",
        "fecha": "2025-09-04"
      }
    ]
  },
  {
    "id": 5,
    "nombre": "Teclado Mecánico",
    "descripcion": "Teclado con switches de alta respuesta para gaming.",
    "precio": 99.99,
    "imagen": "https://picsum.photos/200/200?random=5",
    "reseñas": []
  },
  {
    "id": 6,
    "nombre": "Micrófono USB",
    "descripcion": "Micrófono profesional para streaming y grabación.",
    "precio": 85.00,
    "imagen": "https://picsum.photos/200/200?random=6",
    "reseñas": [
      {
        "usuario": "Luisa Botero",
        "texto": "Excelente calidad de sonido, lo recomiendo.",
        "fecha": "2025-09-05"
      },
      {
        "usuario": "Pablo Dávila",
        "texto": "Fácil de configurar y funciona de maravilla.",
        "fecha": "2025-09-06"
      }
    ]
  }
];

const catalogo = document.getElementById("catalogo");

function mostrarProductos() {
  productos.forEach(function (producto) {
    
    // Crear tarjeta
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("card-producto");

    // Imagen
    const img = document.createElement("img");
    img.src = producto.imagen;
    img.classList.add("imagen-producto");

    // Nombre
    const nombre = document.createElement("h3");
    nombre.textContent = producto.nombre;
    nombre.classList.add("nombre-producto");

    // Descripción
    const descripcion = document.createElement("p");
    descripcion.textContent = producto.descripcion;
    descripcion.classList.add("descripcion-producto");

    // Precio
    const precio = document.createElement("p");
    precio.textContent = "$" + producto.precio;
    precio.classList.add("precio-producto");

    // Botón Carrito
    const btnCarrito = document.createElement("button");
    btnCarrito.textContent = "Agregar al Carrito";
    btnCarrito.classList.add("btn", "btn-agregar");

    btnCarrito.addEventListener("click", function () {
      btnCarrito.textContent = "Agregado ✓";
      btnCarrito.disabled = true;
    });

    // Botón Reseñas
    const btnReseñas = document.createElement("button");
    btnReseñas.textContent = "Mostrar Reseñas";
    btnReseñas.classList.add("btn", "btn-reseñas");

    const contenedorReseñas = document.createElement("div");
    contenedorReseñas.classList.add("contenedor-reseñas", "oculto");

    if (producto.reseñas.length === 0) {
      const sinReseñas = document.createElement("p");
      sinReseñas.textContent = "No hay reseñas para este producto.";
      sinReseñas.classList.add("texto-sin-reseñas");
      contenedorReseñas.appendChild(sinReseñas);
    } else {
      producto.reseñas.forEach(function (reseña) {
        const itemReseña = document.createElement("div");
        itemReseña.classList.add("item-reseña");

        const usuario = document.createElement("span");
        usuario.textContent = reseña.usuario;
        usuario.classList.add("usuario-reseña");

        const fecha = document.createElement("span");
        fecha.textContent = " (" + reseña.fecha + ")";
        fecha.classList.add("fecha-reseña");

        const texto = document.createElement("p");
        texto.textContent = reseña.texto;
        texto.classList.add("texto-reseña");

        itemReseña.appendChild(usuario);
        itemReseña.appendChild(fecha);
        itemReseña.appendChild(texto);

        contenedorReseñas.appendChild(itemReseña);
      });
    }

    btnReseñas.addEventListener("click", function () {
      if (contenedorReseñas.classList.contains("oculto")) {
        contenedorReseñas.classList.remove("oculto");
        btnReseñas.textContent = "Ocultar Reseñas";
      } else {
        contenedorReseñas.classList.add("oculto");
        btnReseñas.textContent = "Mostrar Reseñas";
      }
    });

    // Armar tarjeta
    tarjeta.appendChild(img);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(btnCarrito);
    tarjeta.appendChild(btnReseñas);
    tarjeta.appendChild(contenedorReseñas);

    // Agregar la tarjeta al catálogo
    catalogo.appendChild(tarjeta);
  });
}

// Llamar a la función
mostrarProductos();