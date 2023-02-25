const panels = document.querySelectorAll('.panel');
// Esto coge los elementos del DOM con clase panel y los vuelve un objeto manipulable

// La siguiente función añade un 'click listener' o sea que hace que click sea un 'trigger' o detonante de código
// El click listener es el mismo para todos los paneles
// Pero el panel al que se le haga clic se convierte en el 'Active' añadiendo una class
// La función primero llama a otra función que resetea las clases active en todos los panels
// y luego se la añade al panel donde se hizo clic
// pero la sintaxis no me queda muy clara
    // ()=>{} se usa para funciones sin nombre, usualmente van dentro de otras funciones
    // classList es un método para añadir una class a un elemento del DOM
panels.forEach((panel) => {
    panel.addEventListener('click', ()=>{
        removeActiveClasses();
        panel.classList.add('active');
    });
});

// Siento que se puede hacer algo más simple pero 🤷
function removeActiveClasses() {
    panels.forEach((panel)=>[
        panel.classList.remove('active')
    ])
};