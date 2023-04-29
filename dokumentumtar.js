/*--------------------FELHASZNÁLÓ ÜDVÖZLÉS------------------------------*/
const felhasznalo = window.localStorage.getItem('lsUsername');
const udvozles = document.getElementById('udv');
const kijelentkezes = document.getElementById('kijelentkezes');
if(felhasznalo){
    udvozles.textContent = "Üdvözöljük "+felhasznalo+"!";
    kijelentkezes.innerHTML = "<a href='login_index.html' class='#kijelentkezes'>Kijelentkezés</a>";
} else {
    kijelentkezes.innerHTML = "<a href='login_index.html' class='#kijelentkezes'>Bejelentkezés</a>"
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


const folderContainer = document.getElementById("folder-container");
const ujmappa = document.getElementById("ujmappa");

function createFolder(name) {
  const folderDiv = document.createElement("div");
  folderDiv.classList.add("folder");

  folderDiv.onclick = function() {
    this.classList.toggle('clicked');
  }

  const img = document.createElement("img");
  img.setAttribute("src", "images/folder.png");

  const p = document.createElement("p");
  p.textContent = name;

  folderDiv.appendChild(img);
  folderDiv.appendChild(p);

  folderContainer.appendChild(folderDiv);
}

ujmappa.addEventListener("click", function() {
  const folderName = prompt("Adja meg a mappa nevét:", "mappa");
  if (folderName) {
    createFolder(folderName);
  }
});

/*--------------------MAPPA TÖRLÉSE------------------------------------------*/
const torles = document.getElementById('torles');

torles.addEventListener('click',function(){
    if(selected == true){

    }
})

