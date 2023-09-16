import nbbl from './nibbleNook.png'

export class DisplayableContent {
    constructor(content) {
        this.content = content;
    }

    display(xyz) {
        const element = document.createElement("img");
        element.classList.add('home')
        element.src = this.content;
        xyz.appendChild(element);
    }
}

export const nibble = new DisplayableContent(nbbl);

