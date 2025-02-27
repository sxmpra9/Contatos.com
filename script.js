/* sxmpra */
function goBack() {
    window.history.back();
}
function toggleVisibility() {
    const title = document.getElementById('title');
    const contacts = document.getElementById('contacts');
    const toggleButton = document.querySelector('.toggle-button');
    if (title.classList.contains('hidden')) {
        title.classList.remove('hidden');
        contacts.classList.remove('hidden');
        toggleButton.textContent = 'Esconder Tudo';
    } else {
        title.classList.add('hidden');
        contacts.classList.add('hidden');
        toggleButton.textContent = 'Mostrar Tudo';
    }
}
function enableAudio() {
    const video = document.getElementById('video-background');
    video.muted = false; 
    video.play();
    alert('Áudio ativado!');
}
function toggleMenu() {
  document.body.classList.toggle('menu-open');
}