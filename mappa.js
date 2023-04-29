/*---------------------MAPPA.HTML MAPPA NÉV--------------------------------*/
const mappanev = document.getElementById('mappanev');
mappanev.innerHTML =    window.localStorage.getItem('lsUsername')+"'s Documents/"
                        +window.localStorage.getItem('lsMappa');