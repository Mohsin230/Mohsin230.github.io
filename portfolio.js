let button = document.createElement('BUTTON');
let text = document.createTextNode("Exit Doc");
button.appendChild(text);
button.setAttribute("class", "button button1")
button.addEventListener('click', closeForm);
button.style.padding = '0px 22px';
button.style.fontSize = '1.2rem';
button.style.fontWeight = '700';


navbarSave = document.getElementById('navbar');


function openForm() {
    document.getElementById('myResume').setAttribute("class", "resumeShow");;
    document.getElementById('navbar').append(button);
}
function closeForm() {
    document.getElementById('myResume').setAttribute("class", "resume");;;
    document.getElementById('navbar').removeChild(button);
}
