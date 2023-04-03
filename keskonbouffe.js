let rep = ["image/rep/mcdo.png", "image/rep/subway.png", "image/rep/sushi.png"]

let metz = ["image/metz/mcdo.png", "image/metz/subway.png", "image/metz/bk.jpg", "image/metz/kefan.png", 
            "image/metz/sushi.png", "image/metz/poulaillon.jpeg", "image/metz/tonton.png"]

let muse = ["image/muse/bk.jpg", "image/muse/subway.png", "image/muse/sushi.png", "image/muse/kefan.png", 
            "image/muse/poulaillon.jpeg", "image/muse/tonton.png"]


var img = new Image();
img.src="image/rep/mcdo.png";
img.src="image/rep/subway.png";
img.src="image/rep/sushi.png";

img.src="image/metz/bk.jpg";
img.src="image/metz/subway.png";
img.src="image/metz/bk.jpg";
img.src="image/metz/kefan.png";
img.src="image/metz/sushi.png";
img.src="image/metz/poulaillon.jpeg";

img.src="image/muse/bk.jpg";
img.src="image/muse/subway.png";
img.src="image/muse/sushi.png";
img.src="image/muse/kefan.png";
img.src="image/muse/poulaillon.jpeg";


let previmage = 0;



document.querySelector("#rep").onclick = function(){
    let changeImage = document.querySelector("#illustration");              //change image en fonction de a ligne suivante

    let nouvelleimage = Math.round(Math.random()*(rep.length-1));          //Prend un chiffre aléa du tableau
    while(previmage == nouvelleimage){                                      //Tant que chiffre prev = nouvelleimage    
        nouvelleimage = Math.round(Math.random()*(rep.length-1));          //Repiocher un nouveau chiffre
    }
    changeImage.src = rep[nouvelleimage];                                  //L'image est remplacée
    previmage = nouvelleimage;   
}

document.querySelector("#metz").onclick = function(){
    let changeImage = document.querySelector("#illustration");              

    let nouvelleimage = Math.round(Math.random()*(metz.length-1));        
    while(previmage == nouvelleimage){                                       
        nouvelleimage = Math.round(Math.random()*(metz.length-1));        
    }
    changeImage.src = metz[nouvelleimage];                              
    previmage = nouvelleimage;                                             
}

document.querySelector("#muse").onclick = function(){                       
    let changeImage = document.querySelector("#illustration");              

    let nouvelleimage = Math.round(Math.random()*(muse.length-1));        
    while(previmage == nouvelleimage){                                     
        nouvelleimage = Math.round(Math.random()*(muse.length-1));          
    }
    changeImage.src = muse[nouvelleimage];                                
    previmage = nouvelleimage;                                             
}



