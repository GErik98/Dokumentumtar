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
        img.setAttribute("src", "images/picture.png");;
        img.setAttribute("alt", fileExt);
      }
      else if(fileExt=='fajlmappa'){
        img.setAttribute("src", "images/folder.png");;
        img.setAttribute("alt", fileExt);
      }
      else if(fileExt=='flv' || fileExt=='avi' || fileExt=='wmv' || fileExt=='mp4'){
        img.setAttribute("src", "images/video.png");;
        img.setAttribute("alt", fileExt);
      }
      else if(fileExt=='txt' || fileExt=='doc' || fileExt=='docx'){
        img.setAttribute("src", "images/document.png");;
        img.setAttribute("alt", fileExt);
        console.log(fileExt);
      }
      else if(fileExt=='mp3' || fileExt=='mp4' || fileExt=='aac' || fileExt=='wma'){
        img.setAttribute("src", "images/audio.png");;
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
      img.setAttribute("src", "images/picture.png");;
      img.setAttribute("alt", fileExt);
    }
    else if(file.type === ''){
      img.setAttribute("src", "images/folder.png");;
      img.setAttribute("alt", fileExt);
    }
    else if(fileExt=='flv' || fileExt=='avi' || fileExt=='wmv' || fileExt=='mp4'){
      img.setAttribute("src", "images/video.png");;
      img.setAttribute("alt", fileExt);
    }
    else if(fileExt=='txt' || fileExt=='doc' || fileExt=='docx'){
      img.setAttribute("src", "images/document.png");;
      img.setAttribute("alt", fileExt);
      console.log(fileExt);
    }
    else if(fileExt=='mp3' || fileExt=='mp4' || fileExt=='aac' || fileExt=='wma'){
      img.setAttribute("src", "images/audio.png");;
      img.setAttribute("alt", fileExt);
    }
    else if(fileExt=='html' || fileExt=='js' || fileExt=='css' || fileExt=='xhtml'){
      img.setAttribute("src", "images/browser.png");;
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



/*-----------------------ÚJ MAPPA LÉTREHOZÁS & MAPPA KIJELÖLÉS--------------------------------*/


const folderContainer = document.getElementById("folder-container");
const ujmappa = document.getElementById("ujmappa");


function createFolder(name) {
  const folderDiv = document.createElement("div");
  folderDiv.classList.add("folder");

  folderDiv.selected=false;

  const img = document.createElement("img");
  img.setAttribute("src", "images/folder.png");

  const p = document.createElement("p");
  p.textContent = name;

  folderDiv.appendChild(img);
  folderDiv.appendChild(p);

  folderContainer.appendChild(folderDiv);

  const folderDivs = document.querySelectorAll('.folder');

  for (let i = 0; i < folderDivs.length; i++) {
    folderDivs[i].addEventListener('dblclick', function() {
      const folderName = this.querySelector('p').textContent;
      window.localStorage.setItem('lsMappa', folderName);
      window.location.href = 'mappa.html';
    });
  }
}

ujmappa.addEventListener("click", function() {
  const folderName = prompt("Adja meg a mappa nevét:", "mappa");
  if (folderName) {
    createFolder(folderName);
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

 /* icons.addEventListener('click', function(event) {
    const clickedElement = event.target.closest('.folder, .file');
    if (!clickedElement) return;
  
    removeClickedClass();
    clickedElement.classList.add('clicked');
    selectedElement = clickedElement;
  });
  


/*--------------------MAPPA TÖRLÉSE------------------------------------------*/
const torles = document.getElementById('torles');

torles.addEventListener('click',function(){
  const selectedFolder = document.querySelector('.clicked');
  if (selectedFolder) {
    selectedFolder.remove();
  }
})
});


