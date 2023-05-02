/*--------------------FELHASZNÁLÓ ÜDVÖZLÉS------------------------------*/
const felhasznalo = window.sessionStorage.getItem("ssUsername");
const span = document.getElementById("udv");
const kijelentkezes = document.getElementById('kijelentkezes');
if (felhasznalo) {
  span.textContent = "Üdvözöljük " + felhasznalo + "!";
  kijelentkezes.innerHTML = "<a href='login_index.html' class='#kijelentkezes'>Kijelentkezés</a>";
} else {
    kijelentkezes.innerHTML = "<a href='login_index.html' class='#kijelentkezes'>Bejelentkezés</a>"
}

/*-------------------FÁJL FELTÖLTÉS---------------------------------*/



const uploadButton = document.getElementById("upload-button");
uploadButton.addEventListener("click", function() {
  const fileInput = document.createElement("input");
  fileInput.setAttribute("type", "file");
  fileInput.setAttribute("multiple", "");
  fileInput.click();

  fileInput.addEventListener("change", function() {
    const files = fileInput.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileName = file.name;
      const fileExt = fileName.split(".").pop().toLowerCase();
      const fileDiv = document.createElement("div");
      fileDiv.classList.add("file");
      fileDiv.setAttribute("data-filepath", URL.createObjectURL(file));

      const img = document.createElement("img");
      if(fileExt=='png' || fileExt=='jpg' || fileExt=='jpeg' ){
        img.setAttribute("src", "../images/picture.png");;
        img.setAttribute("alt", fileExt);
      }
      else if(fileExt=='fajlmappa'){
        img.setAttribute("src", "../images/folder.png");;
        img.setAttribute("alt", fileExt);
      }
      else if(fileExt=='flv' || fileExt=='avi' || fileExt=='wmv' || fileExt=='mp4'){
        img.setAttribute("src", "../images/video.png");;
        img.setAttribute("alt", fileExt);
      }
      else if(fileExt=='txt' || fileExt=='doc' || fileExt=='docx'){
        img.setAttribute("src", "../images/document.png");;
        img.setAttribute("alt", fileExt);
        console.log(fileExt);
      }
      else if(fileExt=='mp3' || fileExt=='mp4' || fileExt=='aac' || fileExt=='wma'){
        img.setAttribute("src", "../images/audio.png");;
        img.setAttribute("alt", fileExt);
      }

      const p = document.createElement("p");
      p.textContent = fileName;

      fileDiv.appendChild(img);
      fileDiv.appendChild(p);
      folderContainer.appendChild(fileDiv);

      fileDiv.addEventListener("dblclick", function() {
        const filePath = this.getAttribute("data-filepath");
        window.open(filePath); 
        console.log(`File '${fileName}' was double-clicked`);
      });
    }
  });
});

/*---------------DROP ZONE----------------------------------------------------*/
const dropZone = document.getElementById('drop-zone');


['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropZone.addEventListener(eventName, (e) => {
    e.preventDefault();
    e.stopPropagation();
  }, false);
});


['dragenter', 'dragover'].forEach(eventName => {
  dropZone.addEventListener(eventName, () => {
    dropZone.classList.add('drag-over');
  }, false);
});


['dragleave', 'drop'].forEach(eventName => {
  dropZone.addEventListener(eventName, () => {
    dropZone.classList.remove('drag-over');
  }, false);
});


dropZone.addEventListener('drop', (e) => {
  const files = e.dataTransfer.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileName = file.name;
    const fileExt = fileName.split(".").pop().toLowerCase();
    const fileDiv = document.createElement("div");
    fileDiv.classList.add("file");
    fileDiv.setAttribute("data-filepath", URL.createObjectURL(file));
    const img = document.createElement("img");
    if(fileExt=='png' || fileExt=='jpg' || fileExt=='jpeg' ){
      img.setAttribute("src", "../images/picture.png");;
      img.setAttribute("alt", fileExt);
    }
    else if(file.type === ''){
      img.setAttribute("src", "../images/folder.png");;
      img.setAttribute("alt", fileExt);
    }
    else if(fileExt=='flv' || fileExt=='avi' || fileExt=='wmv' || fileExt=='mp4'){
      img.setAttribute("src", "../images/video.png");;
      img.setAttribute("alt", fileExt);
    }
    else if(fileExt=='txt' || fileExt=='doc' || fileExt=='docx'){
      img.setAttribute("src", "../images/document.png");;
      img.setAttribute("alt", fileExt);
      console.log(fileExt);
    }
    else if(fileExt=='mp3' || fileExt=='mp4' || fileExt=='aac' || fileExt=='wma'){
      img.setAttribute("src", "../images/audio.png");;
      img.setAttribute("alt", fileExt);
    }
    else if(fileExt=='html' || fileExt=='js' || fileExt=='css' || fileExt=='xhtml'){
      img.setAttribute("src", "../images/browser.png");;
      img.setAttribute("alt", fileExt);
    }

    console.log(fileExt);
    const p = document.createElement("p");
    p.textContent = fileName;

    fileDiv.addEventListener("dblclick", function() {
      const filePath = this.getAttribute("data-filepath");
      window.open(filePath); 
      console.log(`File '${fileName}' was double-clicked`);
    });

    fileDiv.appendChild(img);
    fileDiv.appendChild(p);
    folderContainer.appendChild(fileDiv);}

  
}, false);







/*-------------- MAPPA KIJELÖLÉS -------------------------------------*/
/*
const container = document.getElementById('container');
const selected = false;
for(let i = 0; i < container.length; i++){
    container.addEventListener('click',function(e){
       this.classList.add('kijelolt');
       selected = true;
    })
}
*/

/*-----------------------ÚJ MAPPA LÉTREHOZÁS--------------------------------*/

const folderContainer = document.getElementById("folder-container");
const ujmappa = document.getElementById("ujmappa");
const mappanev = document.getElementById("mappanev");



ujmappa.addEventListener("click", function() {
    let nemegyedi = false;
    let  uresnev = false;
    const  mappanevClone =  mappanev.cloneNode(true);
    const folderName = window.prompt("Adja meg a mappa nevét!", "mappa");
    mappanevClone.innerHTML = folderName;
    mappanevClone.classList.add('mappanevek');
    
 
    const mappanevek = Array.from(document.getElementsByClassName('mappanevek'));
    console.log(mappanevek);
    if( mappanevek.length != 0){        /*vannak már mappák de újat akarok még létrehozni*/

        for(i=0; i<mappanevek.length; i++) {   //végigmegyek a meglévő mappákon (meglévő mappáink száma: i<mappanevek.length)

            if (mappanevek[i].innerHTML==folderName) {  //meglévő mappanév egyezik e ? p tag tartalma; csak az első fileal azonosítja be :(  )
                    nemegyedi=true;
                    alert("A mappa neve nem egyedi!");
                } if (nemegyedi)  { 
                    break;
                }

                /* if (promptResult == mappanevek[i].innerHTML) {  //meglévő mappanév egyezik e ? p tag tartalma
                    alert("A mappa neve nem egyedi!");
                    }*/
                
                if(folderName == "") {
                    uresnev=true;
                    alert("A mappának kötelezö nevet adni!");
                } if (uresnev)  { 
                    break;
                }
                /*if(promptResult == "") {
                    alert("A mappának kötelezö nevet adni!");
                }  */
                
                else {    //elkészíti a mappát
                    /*if (folderName) {
                        createFolder(folderName);
                    }
                    function createFolder(name) {*/

                    const folderDiv = document.createElement("div");
                    console.log("adddiv");
                    folderDiv.classList.add("folder");
                    folderContainer.appendChild(folderDiv);

                    folderDiv.selected=false;

                    const img = document.createElement("img");
                    console.log("addkep");
                    /*NewFolder.classList.add("img");*/
                    img.setAttribute("src", "../images/folder.png");
                    folderDiv.appendChild(img);
                    folderDiv.appendChild(mappanevClone);


                    const folderDivs = document.querySelectorAll('.folder');

                    for (let i = 0; i < folderDivs.length; i++) {
                        folderDivs[i].addEventListener('dblclick', function() {
                        const folderName = this.querySelector('p')
                        /*const folderName = this.querySelector('p').textContent;*/
                        window.sessionStorage.setItem('ssMappa', folderName);
                        window.location.href = '../html/mappa.html';
                        });
                    }

                   /* folderDiv.addEventListener("click", function () {
                        folderDiv.classList.toggle("selected");
                    });*/
                    
                    break; //ha nincs break többször legenárálná a mappát(ahány mappád megvan már annyiszor futna le a for ciklus)
                    //csak egy mappa kell ezért kell a break 1x fut le 
                        
        
                }
        };
     
    } else 
        {                 /*nincsenek még mappák de újat akarok létrehozni*/
            if (folderName == "") {
                alert("A mappának kötelezö nevet adni!");
            
            } else {
                    const folderDiv = document.createElement("div");
                    console.log("adddiv");
                    folderDiv.classList.add("folder");
                    folderContainer.appendChild(folderDiv);

                    folderDiv.selected=false;

                    const img = document.createElement("img");
                    console.log("addkep");
                    /*NewFolder.classList.add("img");*/
                    img.setAttribute("src", "../images/folder.png");
                    folderDiv.appendChild(img);
                    folderDiv.appendChild(mappanevClone);


                    const folderDivs = document.querySelectorAll('.folder');

                    for (let i = 0; i < folderDivs.length; i++) {
                        folderDivs[i].addEventListener('dblclick', function() {
                        const folderName = this.querySelector('p')
                        /*const folderName = this.querySelector('p').textContent;*/
                        window.sessionStorage.setItem('ssMappa', folderName);
                        window.location.href = '../html/mappa.html';
                        });
                    }

                    /*folderDiv.addEventListener("click", function () {
                        folderDiv.classList.toggle("selected");
                    });*/
                 
                }  
        
        } 
               
           

                  


/*-------------------MAPPA KIJELÖLÉS ----------------------------------------*/

let selectedElement = null;
  
function removeClickedClass() {
  if (selectedElement) {
    selectedElement.classList.remove('clicked');
    selectedElement = null;
  }
}
const icons = document.querySelectorAll('.folder,.file');
icons.forEach(div => {
  div.addEventListener('click',(event) => {
    const clickedElement = event.target.closest('.folder, .file');
    if (!clickedElement) return;
  
    removeClickedClass();
    clickedElement.classList.add('clicked');
    selectedElement = clickedElement;
  })
})

/*--------------------MAPPA TÖRLÉSE------------------------------------------*/
const torles = document.getElementById('torles');torles.addEventListener('click',function(){
  const selectedFolder = document.querySelector('.clicked');
  if (selectedFolder) {
    selectedFolder.remove();
  }
})
});





/*const ujmappa = document.getElementById("ujmappa");
const menu = document.getElementById("menu");
const divContainer = document.getElementById("divContainer");
        /*const picContainer = document.getElementById('picContainer');*/
/*const mappanev = document.getElementById("mappanév");

ujmappa.addEventListener("click", function () {
  let nemegyedi = false;
  let  uresnev = false;
  const mappanevClone = mappanev.cloneNode(true);
  const promptResult = window.prompt("Adja meg a mappa nevét!", "documentary");
  mappanevClone.innerHTML = promptResult;
  mappanevClone.classList.add('mappanevek');
 
  const mappanevek = Array.from(document.getElementsByClassName('mappanevek'));
  if(mappanevek.length != 0){        /*vannak már mappák de újat akarok még létrehozni*/

 /*       for(i=0; i<mappanevek.length; i++) {   //végigmegyek a meglévő mappákon (meglévő mappáink száma: i<mappanevek.lenght)
            
            
            if (promptResult == mappanevek[i].innerHTML) {  //meglévő mappanév egyezik e ? p tag tartalma; csak az első fileal azonosítja be :(  )
                nemegyedi=true;
                alert("A mappa neve nem egyedi!");
            } if (nemegyedi)  { 
                break;
            }

            /* if (promptResult == mappanevek[i].innerHTML) {  //meglévő mappanév egyezik e ? p tag tartalma
                alert("A mappa neve nem egyedi!");
                }*/
            
/*            if(promptResult == "") {
                uresnev=true;
                alert("A mappának kötelezö nevet adni!");
            } if (uresnev)  { 
                break;
            }
            /*if(promptResult == "") {
                alert("A mappának kötelezö nevet adni!");
            }  */
            
/*            else {    //elkészíti a mappát
        
                const KintiContainer = document.createElement("div");
                console.log("add");
                KintiContainer.classList.add("picContainer");
                divContainer.appendChild(KintiContainer);
            
                const NewFolder = document.createElement("img");
                console.log("add");
                NewFolder.classList.add("img");
                NewFolder.src = "../images/folder.png";
                KintiContainer.appendChild(NewFolder);
                KintiContainer.appendChild(mappanevClone);
            
                KintiContainer.addEventListener("click", function () {
                KintiContainer.classList.toggle("selected");
                });
            
                break; //ha nincs break többször legenárálná a mappát(ahány mappád megvan már annyiszor futna le a for ciklus)
                     //csak egy mappa kell ezért kell a break 1x fut le 
            }

        };
  } else {                 /*nincsenek még mappák de újat akarok létrehozni*/
/*        if (promptResult == "") {
            alert("A mappának kötelezö nevet adni!");
        
            } else {
        
                const KintiContainer = document.createElement("div");
                console.log("add");
                KintiContainer.classList.add("picContainer");
                divContainer.appendChild(KintiContainer);
            
                const NewFolder = document.createElement("img");
                console.log("add");
                NewFolder.classList.add("img");
                NewFolder.src = "../images/folder.png";
                KintiContainer.appendChild(NewFolder);
                KintiContainer.appendChild(mappanevClone);
            
                KintiContainer.addEventListener("click", function () {
                    KintiContainer.classList.toggle("selected");
                });
            }  
    
    } 
       
   
});

//dubleclick mappánál létrehozzon htm kiterjesztésű filet, és azután rögtön azt jelenítse meg iframebe 

/*--------------------MAPPA TÖRLÉSE------------------------------------------*/
/*const torles = document.getElementById("torles");

torles.addEventListener("click", function () {
  let selected = document.getElementsByClassName("selected");
  [...selected].forEach((s) => {
    s.remove();
  });
});*/
