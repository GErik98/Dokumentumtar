/*--------------------FELHASZNÁLÓ ÜDVÖZLÉS------------------------------*/
const felhasznalo = window.localStorage.getItem('lsUsername');
const span = document.getElementById('udv');
if(felhasznalo){
    span.textContent = "Üdvözöljük "+felhasznalo+"!";
}

/*-------------- MAPPA KIJELÖLÉS -------------------------------------
const container = document.getElementById('container');
const selected = false;
for(let i = 0; i < container.length; i++){
    container.addEventListener('click',function(e){
       this.classList.add('kijelolt');
       selected = true;
    })
}

/*-----------------------ÚJ MAPPA LÉTREHOZÁS--------------------------------*/


const ujmappa = document.getElementById('ujmappa');
const menu = document.getElementById('menu');
const divContainer = document.getElementById('divContainer');
const mappanev = document.getElementById('mappanév');

ujmappa.addEventListener('click',function(){
const mappanevClone = mappanev.cloneNode(true);
mappanevClone.innerHTML = window.prompt('Adja meg a mappa nevét!','file');
const NewFolder = document.createElement("img");
console.log("add");
NewFolder.classList.add('img');
NewFolder.src='images/folder.png';
divContainer.appendChild(NewFolder);
divContainer.appendChild(mappanevClone);
})

/*--------------------MAPPA TÖRLÉSE------------------------------------------*/
const torles = document.getElementById('torles');

torles.addEventListener('click',function(){
    if(selected == true){

    }
})