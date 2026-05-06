let x = 0; // contador

function TrocarFoto(){ // function que foi criada baseada no HTML, junto com o ID
    let img = document.getElementById("MinhaFoto");

    if (x === 0){ // Quando clicar na foto, vai mudar de uma pra outra
        img.src = "img/Foto2.jpeg";
        x = 1;
    } else {
        img.src = "img/Foto1.jpeg";
        x = 0;
    }
} 

