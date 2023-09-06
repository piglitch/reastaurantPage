import { summaryInfo, timingsInfo, locationInfo } from './home.js';
import { beveragesInfo, sidesInfo, mealsInfo } from './menu.js';
import { nameInfo, numberInfo, mailInfo } from './contact.js';
import './style.css';
import _ from 'lodash';
/////////////////////////////////////////////////////
const buttonspace = document.createElement('div');
buttonspace.classList.add('btn')

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
summaryInfo.display()
timingsInfo.display()
locationInfo.display()

///// Reusable function to show buttons
function showButtons() {
    // Clear the document body
    document.body.innerHTML = '';

    // Recreate the buttonspace and append the buttons
    const newButtonSpace = document.createElement('div');
    newButtonSpace.classList.add('btn');
    newButtonSpace.appendChild(homebtn);
    newButtonSpace.appendChild(menubtn);
    newButtonSpace.appendChild(contactbtn);

    // Append the new buttonspace to the document body
    document.body.appendChild(newButtonSpace);
}



function homeButton(){   
    homebtn.addEventListener('click', () =>{
        document.body.innerHTML = '';
        showButtons()
        summaryInfo.display()
        timingsInfo.display()
        locationInfo.display()
    });
}

function menuButton(){    
    menubtn.addEventListener('click', () =>{
        document.body.innerHTML = '';
        showButtons()
        beveragesInfo.display()
        sidesInfo.display()
        mealsInfo.display()
    });
}

function contactButton(){    
    contactbtn.addEventListener('click', () =>{
        document.body.innerHTML = '';
        showButtons()
        nameInfo.display()
        numberInfo.display()
        mailInfo.display()
    });
}

homeButton();
menuButton();
contactButton();



