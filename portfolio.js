let button = document.createElement('BUTTON');
let text = document.createTextNode("Exit Doc");
button.appendChild(text);
button.setAttribute("class", "button button1")
button.addEventListener('click', closeForm);
button.style.padding = '0px 22px';
button.style.fontSize = '1.2rem';
button.style.fontWeight = '700';
var cardsLoaded = false;



navbarSave = document.getElementById('navbar');


//window.addEventListener('scroll',checkCards);

//window.addEventListener('scroll',checkCards2);
//console.log(cards);


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show",entry.isIntersecting)
    })
}, {
    root: null,
    rootMargin: "0px 2000% 0px 2000%",
    threshold: 0.1,
})

function setRealVH() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setRealVH();
window.addEventListener('resize', setRealVH);

/*
function checkCards(){
    const cards = document.querySelectorAll('.card');
    const triggerBottom = window.innerHeight/5*4;
    //console.log(triggerBottom);
    cards.forEach((card) =>{
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom){
            card.classList.add('show');
        }
        else{
            card.classList.remove('show');
        }
    });
}
function checkCards2(){
    const cards = document.querySelectorAll('.card2');
    const triggerBottom = window.innerHeight/5*4;
    const cardTop = document.getElementById("myCards").getBoundingClientRect().top;
    //console.log(triggerBottom);

    if(cardTop < triggerBottom){
        console.log("hi")
        cards.forEach((card) =>{
            card.classList.add('show');
        });
    
        cardsLoaded = true;
        
    }
    else{
        cards.forEach((card) =>{
            card.classList.remove('show');
        });
    }
}

function toggleCard(event){
    //console.log("do some");
    this.setAttribute("pointer-event", "none");
    this.classList.remove('show');
}

function resetCards(){
    cardsLoaded = false;
    checkCards2();
}

function displayAllCards(){
    
}
*/
let formOpened = false;
function openForm() {
    formOpened = true;
    document.getElementById('myResume').setAttribute("class", "resumeShow");;
    document.getElementById('navbar').append(button);
}
function closeForm() {
    if(formOpened){
        document.getElementById('myResume').setAttribute("class", "resume");;;
        document.getElementById('navbar').removeChild(button);
        formOpened = false;
    }
}

window.onload = init;

function init(){
    var projectLocation = document.getElementById('project_Section')
    fetch("projects.json")
    .then(res=>{return res.json();})
    .then(data =>{
    for (let i = 0; i < data.projects.length;i++){
        //console.log(data.projects[i])
        //console.log(projectLocation)
        addProject(data.projects[i])
    }
    for(let j = 0; j < data.skills.length;j++){
        addCard(data.skills[j],j)
    }
    const cards1 = document.querySelectorAll('.card');
    const cards2 = document.querySelectorAll('.card2');
    const cards2Area = document.getElementById('myCards');
    const overlayCard = document.querySelectorAll('.overlayCard');

    cards1.forEach(card =>{
        console.log(card)
        observer.observe(card)
    })
    //observer.observe(cards2Area);
    cards2.forEach(card =>{
        observer.observe(card)
    })
    console.log(overlayCard);
    overlayCard.forEach(card =>{
        observer.observe(card);
    })
    
}
);
}
function addCard(data, i){
    var cardsLoaded = false;
    var cardLocation = document.getElementById('myCards');
    var div = document.createElement("div");
    div.setAttribute("class", "card2");
    //div.style.position = "relative";


    var elem = document.createElement("img");
    elem.src = data['img']
    elem.setAttribute("width", "80vw");
    elem.setAttribute("height", "80vh");
    elem.setAttribute("id", "homeImage");

    var text = document.createElement("h3");
    text.innerHTML = data['name']
    var text2 = document.createElement("h3");
    text2.innerHTML = data['description']
    text2.hidden = true;

    var description = document.createElement("h3");
    description.innerHTML = data['description']

    //div.style.left = t1.concat("",t2);
    //div.style.zIndex = 999 - i;
    //div.style.width = "100%";
    //div.style.height = "100%";
    //div.addEventListener("click", toggleCard);

    div.addEventListener("mouseenter" , () => {
        //text.innerHTML = data['description'];
        text.hidden = true;
        text2.hidden = false
        elem.hidden = true;
    })

    div.addEventListener("mouseleave" , () => {
        //text.innerHTML = data['name'];
        text.hidden = false;
        text2.hidden = true;
        elem.hidden = false;
    })

    div.append(elem);
    div.append(text);
    div.append(text2)
    cardLocation.append(div);

}
function addProject(data){
    var projectLocation = document.getElementById('project_Section')
    var div = document.createElement("div");
    div.setAttribute("class", "imgContainer")

    var link = document.createElement("a")
    link.setAttribute('href', data['gitLink']);
    link.setAttribute('target', "_blank");

    var elem = document.createElement("img");
    elem.src = data['img']
    elem.setAttribute("width", "250px");
    elem.setAttribute("height", "140px");

    link.append(elem)

    var text = document.createElement("h3");
    text.setAttribute("class", "textOver")
    text.innerHTML = data['name']
    link.appendChild(text)
    div.append(link)

    //console.log(div)
    projectLocation.append(div)

/* template of what im trying to insert into project section html vers.

    <div class="imgContainer">
        <a href="https://github.com/Mohsin230/stockEye" target="_blank" title="Check out my Github!">
            <img src="stockeyeImage.jpg" width="250px">
            <h3 class="textOver">StockEye</h3>
        </a>
    </div>

*/

}