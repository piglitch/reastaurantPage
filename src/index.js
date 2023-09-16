import {nibble} from './home.js';
import { bluelagoon, tacos, biryani, strawberrycrush } from './menu.js';
import { cntct} from './contact.js';
import './style.css';
import _ from 'lodash';

/////////////////////////////////////////////////////
const buttonspace = document.createElement('div');
buttonspace.classList.add('btn')

const xyz = document.createElement('div')
xyz.classList.add('newbtn')

const homebtn = document.createElement('button');
homebtn.type = 'button';
homebtn.textContent = 'Home';
buttonspace.appendChild(homebtn)


const menubtn = document.createElement('button');
menubtn.type = 'button';
menubtn.textContent = 'Menu';
buttonspace.appendChild(menubtn)

const contactbtn = document.createElement('button');
contactbtn.type = 'button';
contactbtn.textContent = 'Contact';
buttonspace.appendChild(contactbtn)
document.getElementById("content").appendChild(buttonspace);

//// Home should be the first thing one can see when the page loads
nibble.display(xyz)
document.getElementById("content").appendChild(xyz)

///// Reusable function to show buttons
function showButtons() {
    // Clear the document body
    xyz.innerHTML = '';

    // Recreate the buttonspace and append the buttons
    const newButtonSpace = document.createElement('div');
    newButtonSpace.classList.add('btn');
    newButtonSpace.appendChild(homebtn);
    newButtonSpace.appendChild(menubtn);
    newButtonSpace.appendChild(contactbtn);

    // Append the new buttonspace to the document body
    document.getElementById("content").appendChild(newButtonSpace);
}



function homeButton(){   
    homebtn.addEventListener('click', () =>{
        showButtons()
        nibble.display(xyz)
        document.getElementById("content").appendChild(xyz)
        xyz.style.backdropFilter = '';
    });
}

function menuButton(){    
    menubtn.addEventListener('click', () =>{
        showButtons()
        bluelagoon.display(xyz)
        strawberrycrush.display(xyz)
        tacos.display(xyz)
        biryani.display(xyz)
        document.getElementById("content").appendChild(xyz)
        xyz.style.backdropFilter = 'blur(30px)';
        xyz.style.borderRadius = "20px";
    });
}

function contactButton(){    
    contactbtn.addEventListener('click', () =>{
        showButtons()
        
        cntct.display(xyz)
//        numberInfo.display(xyz)
//        mailInfo.display(xyz)        
        document.getElementById("content").appendChild(xyz)
        xyz.style.backdropFilter = '';
    });
}

homeButton();
menuButton();
contactButton();


