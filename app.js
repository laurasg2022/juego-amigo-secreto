let amigos = []; // Lista para almacenar los nombres

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Obtener y limpiar el nombre ingresado

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre); // Agregar el nombre a la lista
    input.value = ""; // Limpiar el campo de entrada

    actualizarLista(); // Refrescar la lista en la interfaz
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Seleccionar la lista
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear elemento <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo
        li.classList.add("list-item"); // Agregar clase para estilos

        let btnEliminar = document.createElement("button"); // Crear botón de eliminar
        btnEliminar.innerHTML = "❌"; // Solo un ícono
        btnEliminar.classList.add("delete-btn"); // Clase para estilo
        btnEliminar.onclick = function () {
            eliminarAmigo(i);
        };

        li.appendChild(btnEliminar); // Agregar botón al <li>
        lista.appendChild(li); // Agregar <li> a la lista
    }
}

function eliminarAmigo(index) {
    amigos.splice(index, 1); // Eliminar el amigo de la lista
    actualizarLista(); // Refrescar la lista en la interfaz
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    let resultado = document.getElementById("resultado"); // Seleccionar el área de resultado

    if (amigos.length === 0) {
        resultado.innerHTML = "<p class='error-message'>No hay nombres en la lista para sortear.</p>";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Obtener el nombre sorteado

    resultado.innerHTML = `<p class='success-message'>🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎁</p>`;
}


