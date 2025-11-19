
function lidhFotot(url1, url2, url3) {
    const foto1 = document.getElementById("Foto1");
    const foto2 = document.getElementById("Foto2");
    const foto3 = document.getElementById("Foto3");

    
    const luajAudio = (urlFoto) => {
        
        const fileName = urlFoto.split('.')[0]; 
        const audioUrl = fileName + '.mp3'; 
        
        const audio = new Audio(audioUrl);
        
       
        audio.currentTime = 0; 
        audio.play().catch(error => {
            console.error("Gabim gjatë luajtjes së audios:", error);
        });
    };

    if (foto1 && foto2 && foto3) {
        
       
        foto1.addEventListener("click", () => {
            foto1.style.backgroundImage = `url('${url1}')`;
            foto1.textContent = "";
            luajAudio(url1); 
        });

        
        foto2.addEventListener("click", () => {
            foto2.style.backgroundImage = `url('${url2}')`;
            foto2.textContent = "";
            luajAudio(url2); 
        });
        
        
        foto3.addEventListener("click", () => {
            foto3.style.backgroundImage = `url('${url3}')`;
            foto3.textContent = "";
            luajAudio(url3); 
        });
    }
}