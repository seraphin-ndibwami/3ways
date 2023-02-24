function invite() {

    let player = document.querySelector(".invitations");
    let rounds = document.querySelector(".section_rounds");
    let rightSection = document.querySelector(".rightsection");
    let smallPicture= document.querySelector(".small_picture");
    let name = document.querySelector(".status-name");
    let status = document.querySelector (".status")
    

    player.addEventListener("click",()=>{

        rightSection.removeChild(rounds);
        smallPicture.classList.add("small_picture_class");
        name.classList.add("status-name_class");
        status.classList.add("status_class");
    })
 
}

invite();