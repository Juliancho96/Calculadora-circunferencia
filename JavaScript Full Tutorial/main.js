const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.style.border = "1px solid black";
canvas.style.backgroundColor = "#050514";

const PI = Math.PI;

const contenedorDatos = document.getElementById("datosCont")
const radioInput = document.getElementById("radioInput");
const diametroInput = document.getElementById("diametroInput");
const circunferenciaInput = document.getElementById("circunferenciaInput");
const sliderDatos = document.getElementById("sliderDatos");
const inputColor = document.getElementById("inputColor");
const resetButton = document.getElementById("resetButton");
inputColor.value = "#2345CD"

let radio = 0;
let diametro = 0;
let circunferencia = 0;
sliderDatos.value = 0;

let arrastrarX = 0;
let arrastrarY = 0;
let scale = 0.5;

let inputSeleccionado = false;

circle();

radioInput.addEventListener("input", function () {
        radio = Number(radioInput.value);
        sliderDatos.value = radio;
        diametro = radio * 2;
        circunferencia = 2 * PI * radio;
        diametroInput.value = diametro.toFixed(2);
        circunferenciaInput.value = circunferencia.toFixed(2);
        sliderDatos.value = radio;
        circle();
});
radioInput.addEventListener("focus", function () {
        inputSeleccionado = true;
        radioInput.select();
});
radioInput.addEventListener("blur", function () {
        inputSeleccionado = false;
});


diametroInput.addEventListener("input", function () {
        diametro = Number(diametroInput.value);
        radio = diametro / 2;
        circunferencia = 2 * PI * radio;
        radioInput.value = radio.toFixed(2);
        circunferenciaInput.value = circunferencia.toFixed(2);
        sliderDatos.value = radio;
        circle();
});
diametroInput.addEventListener("focus", function () {
        inputSeleccionado = true;
        diametroInput.select();
});
diametroInput.addEventListener("blur", function () {
        inputSeleccionado = false;
});

circunferenciaInput.addEventListener("input", function () {
        circunferencia = Number(circunferenciaInput.value);
        radio = circunferencia / (2 * PI);
        diametro = radio * 2;
        radioInput.value = radio.toFixed(2);
        diametroInput.value = diametro.toFixed(2);
        sliderDatos.value = radio;
        circle();
        // }
});
circunferenciaInput.addEventListener("focus", function () {
        inputSeleccionado = true;
        circunferenciaInput.select();
});
circunferenciaInput.addEventListener("blur", function () {
        inputSeleccionado = false;
});

sliderDatos.addEventListener("input", function () {
        radio = Number(sliderDatos.value);

        radioInput.value = radio;
        diametro = radio * 2;
        circunferencia = 2 * PI * radio;
        radioInput.value = radio.toFixed(2);
        diametroInput.value = diametro.toFixed(2);
        circunferenciaInput.value = circunferencia.toFixed(2);
        sliderDatos.value = radio;
        circle();
});
inputColor.addEventListener("focus", function () {
        inputSeleccionado = true;
});
inputColor.addEventListener("blur", function () {
        inputSeleccionado = false;
});

inputColor.addEventListener("input", function () {
        circle();
});
sliderDatos.addEventListener("focus", function () {
        inputSeleccionado = true;
});
sliderDatos.addEventListener("blur", function () {
        inputSeleccionado = false;
});

resetButton.addEventListener("click", function () {
        inputColor.value = "#2345CD";
        circle();
});

function circle(scaleFactor = scale) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Aplicar escala global
        ctx.save();
        ctx.scale(scaleFactor, scaleFactor);

        // Ajustar canvas a escala
        const scaledWidth = canvas.width / scaleFactor;
        const scaledHeight = canvas.height / scaleFactor;

        // Dibujar círculo
        ctx.beginPath();
        ctx.fillStyle = inputColor.value;
        ctx.arc(scaledWidth / 2 + arrastrarX, scaledHeight / 2 + arrastrarY, radio, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.strokeStyle = "yellow";
        ctx.lineWidth = 3;


        // **DIÁMETRO**
        ctx.beginPath();
        ctx.moveTo(scaledWidth / 2 + radio + 20 + arrastrarX, scaledHeight / 2 - radio + arrastrarY);
        ctx.lineTo(scaledWidth / 2 + radio + 20 + arrastrarX, scaledHeight / 2 + radio + arrastrarY);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(scaledWidth / 2 + radio + 20 - 10 + arrastrarX, scaledHeight / 2 - radio + arrastrarY);
        ctx.lineTo(scaledWidth / 2 + radio + 20 + 10 + arrastrarX, scaledHeight / 2 - radio + arrastrarY);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(scaledWidth / 2 + radio + 20 - 10 + arrastrarX, scaledHeight / 2 + radio + arrastrarY);
        ctx.lineTo(scaledWidth / 2 + radio + 20 + 10 + arrastrarX, scaledHeight / 2 + radio + arrastrarY);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.setLineDash([15, 15]);
        ctx.moveTo(scaledWidth / 2 + arrastrarX, scaledHeight / 2 - radio + arrastrarY);
        ctx.lineTo(scaledWidth / 2 + radio + 10 + arrastrarX, scaledHeight / 2 - radio + arrastrarY);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.setLineDash([15, 15]);
        ctx.moveTo(scaledWidth / 2 + arrastrarX, scaledHeight / 2 + radio + arrastrarY);
        ctx.lineTo(scaledWidth / 2 + radio + 10 + arrastrarX, scaledHeight / 2 + radio + arrastrarY);
        ctx.stroke();
        ctx.closePath();


        // **RADIO**
        ctx.setLineDash([0, 0])
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(scaledWidth / 2 - radio - 20 + arrastrarX, scaledHeight / 2 + arrastrarY);
        ctx.lineTo(scaledWidth / 2 - radio - 20 + arrastrarX, scaledHeight / 2 + radio + arrastrarY);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(scaledWidth / 2 - radio - 20 - 10 + arrastrarX, scaledHeight / 2 + arrastrarY);
        ctx.lineTo(scaledWidth / 2 - radio - 20 + 10 + arrastrarX, scaledHeight / 2 + arrastrarY);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(scaledWidth / 2 - radio - 20 - 10 + arrastrarX, scaledHeight / 2 + radio + arrastrarY);
        ctx.lineTo(scaledWidth / 2 - radio - 20 + 10 + arrastrarX, scaledHeight / 2 + radio + arrastrarY);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.setLineDash([15, 15]);
        ctx.moveTo(scaledWidth / 2 + arrastrarX, scaledHeight / 2 + radio + arrastrarY);
        ctx.lineTo(scaledWidth / 2 - radio - 10 + arrastrarX, scaledHeight / 2 + radio + arrastrarY);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.setLineDash([15, 15]);
        ctx.moveTo(scaledWidth / 2 - radio + arrastrarX, scaledHeight / 2 + arrastrarY);
        ctx.lineTo(scaledWidth / 2 - radio - 10 + arrastrarX, scaledHeight / 2 + arrastrarY);
        ctx.stroke();
        ctx.closePath();

        // **CIRCUNFERENCIA**
        ctx.setLineDash([0, 0]);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(scaledWidth / 2 + arrastrarX, scaledHeight / 2 + arrastrarY, radio, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();

        ctx.font = "30px Arial";
        
        // Texto del radio
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.save();
        ctx.translate(scaledWidth / 2 - radio - 60 + arrastrarX, scaledHeight / 2 + radio / 2 + arrastrarY);
        ctx.rotate(Math.PI / 2);
        ctx.fillText("Radio: " + radioInput.value + "cm", 0, 0);
        ctx.restore();

        // Texto del diámetro
        ctx.fillStyle = "yellow";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.save();
        ctx.translate(scaledWidth / 2 + radio + 50 + arrastrarX, scaledHeight / 2 + arrastrarY);
        ctx.rotate(Math.PI / 2);
        ctx.fillText("Diámetro: " + diametroInput.value + "cm", 0, 0);
        ctx.restore();

        // Texto de la circunferencia
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.save();
        ctx.translate(scaledWidth / 2 + arrastrarX, Math.min(scaledHeight / 2 - 150 + arrastrarY, scaledHeight / 2 - radio - 30 + arrastrarY));
        ctx.fillText("Circunferencia: " + circunferenciaInput.value + "cm", 0, 0);
        ctx.restore();


        ctx.restore(); // Restaurar estado original
}


let mouseX, mouseY;
let offsetX, offsetY;
let mouseDrag = false;

window.addEventListener("mousemove", function (event) {
        if (mouseDrag && !inputSeleccionado) {
                const mouseX = event.clientX;
                const mouseY = event.clientY;
                datosCont.style.left = Math.min(Math.max(10, mouseX - offsetX), window.innerWidth - datosCont.offsetWidth - 10) + "px";
                datosCont.style.top = Math.min(Math.max(10, mouseY - offsetY), window.innerHeight - datosCont.offsetHeight - 10) + "px";
        }
})

datosCont.addEventListener("mousedown", function (event) {
        mouseDrag = true;

        offsetX = event.clientX - datosCont.getBoundingClientRect().left;
        offsetY = event.clientY - datosCont.getBoundingClientRect().top;

        datosCont.style.userSelect = "none";
})

window.addEventListener("mouseup", function (event) {
        mouseDrag = false;
        datosCont.style.userSelect = ""

})

window.addEventListener("resize", resizeCanvas)
resizeCanvas();

function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        circle();
}

// Ajustamos el tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables para el desplazamiento
let isDragging = false;
let lastX = 0;
let lastY = 0;

// Escuchar el evento mouse down para comenzar a arrastrar
canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        lastX = e.clientX;
        lastY = e.clientY;
});

// Escuchar el evento mouse move para mover el canvas
canvas.addEventListener('mousemove', (e) => {
        if (isDragging) {
                const deltaX = e.clientX - lastX;
                const deltaY = e.clientY - lastY;
                arrastrarX += deltaX / scale;
                arrastrarY += deltaY / scale;
                lastX = e.clientX;
                lastY = e.clientY;
                circle(scale);
        }
});

canvas.addEventListener('wheel', (e) => {
        e.preventDefault(); // Evitar el comportamiento predeterminado de hacer scroll

        // Ajustamos el zoom en función de la dirección de la rueda
        if (e.deltaY < 0) {
                // Hacer zoom hacia adentro (más grande)
                scale *= 1.5;
        } else {
                // Hacer zoom hacia afuera (más pequeño)
                scale /= 1.5;
        }

        // Evitar que el zoom se haga demasiado pequeño o grande
        if (scale < 0.05) scale = 0.05;
        if (scale > 5) scale = 5;

        circle(scale); // Redibujar el canvas con el nuevo zoom
});

// Escuchar el evento mouse up para detener el arrastre
canvas.addEventListener('mouseup', () => {
        isDragging = false;
});

// Escuchar el evento mouse out por si el mouse sale del canvas mientras se arrastra
canvas.addEventListener('mouseout', () => {
        isDragging = false;
});

// Llamar a la función de dibujo inicialmente
circle();