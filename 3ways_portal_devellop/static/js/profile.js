//invitations tabs 

function open_tab () {

    let recieve_tab =document.querySelector('.recieve_tab');
    let sent_tab =document.querySelector('.send_tab');

    let sent_content = document.querySelector('#Sent')
    let received_content =document.querySelector('#recieved')

    sent_content.style.display="none";
    recieve_tab.style.background="#717375";

    // Envent on tabs 

    recieve_tab.addEventListener ("click",()=>{
        

        if (received_content.style.display=="none") {
            received_content.style.display="flex";
            sent_content.style.display="none";
            sent_tab.style.background="black";
            recieve_tab.style.background="#717375";
            
        } else {
            received_content.style.display="none";
            sent_content.style.display="flex";
            recieve_tab.style.background="black";
            sent_tab.style.background="#717375";
            
        }

    })

    sent_tab.addEventListener ("click",()=>{

        if (sent_content.style.display=="flex") {

            sent_content.style.display ="none";
            received_content.style.display="flex";
            sent_tab.style.background="black";
            recieve_tab.style.background="#717375";
            
            
        } else {
            sent_content.style.display ="flex";
            received_content.style.display="none";
            recieve_tab.style.background="black";
            sent_tab.style.background="#717375";

        }

    })

}

// accepting or rejecting  invitation 

function confirmation () {

    let personToinvite = document.querySelectorAll('.invitations');
    let confirmationsection = document.querySelector ('.accept_decline_section');

   for (let index = 0; index < personToinvite.length; index++) {
    const element = personToinvite[index];
    element.addEventListener('click',()=>{
        confirmationsection.classList.add('show_confirmation')
    })
   }
}



open_tab();
confirmation();
