const musica = document.getElementById("musica");
const boton = document.getElementById("btnMusica");

if (musica && boton) {

    boton.addEventListener("click", () => {

        if (musica.paused) {
            musica.play();
            boton.textContent = "⏸";
        } else {
            musica.pause();
            boton.textContent = "🎵";
        }

    });

};
const fechaBoda = new Date("September 12, 2026 15:00:00").getTime();

setInterval(() => {

    const ahora = new Date().getTime();

    const diferencia = fechaBoda - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

}, 1000);
function crearPetalo(){

    const petalo = document.createElement("img");

    petalo.src = "img/petalo.png";

    petalo.classList.add("petalo");

    petalo.style.left = Math.random() * 100 + "vw";

    petalo.style.animationDuration = (6 + Math.random() * 5) + "s";

    petalo.style.opacity = Math.random();

    petalo.style.width = (18 + Math.random() * 18) + "px";

    document.body.appendChild(petalo);

    setTimeout(() => {

        petalo.remove();

    }, 11000);

}

setInterval(crearPetalo, 450);