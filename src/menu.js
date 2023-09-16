import blgn from './bluelagoon.jpg';
import bryni from './biryani.jpg';
import tcos from './tacos.jpeg';
import strbrry from './strawberrycrush.jpg'
import food from './constants.js';
export class MenuItem {
    constructor(itemType, itemName, itemPath, itemInfo) {
        this.itemType = itemType;
        this.itemName = itemName;
        this.itemPath = itemPath;
        this.itemInfo = itemInfo
    }

    display(xyz) {
        const itemContainer = document.createElement("div");
        itemContainer.classList.add('menu')
        // Create and append the image element
        const imgElement = document.createElement("img");
        imgElement.classList.add('imgElmnt')
        imgElement.src = this.itemPath;
        imgElement.alt = `${this.itemType}: ${this.itemName}`;
        imgElement.width = 200;
        imgElement.height = 150;
       
        // Create and append the item text
        const itemElement = document.createElement("p");
        itemElement.classList.add('foodType')
        itemElement.textContent = `${this.itemType}: ${this.itemName}`;
        //itemContainer.appendChild(itemElement);

        // Create itemInfo
        const iteminfo = document.createElement('div');
        iteminfo.classList.add('menuDetails')
        iteminfo.textContent = this.itemInfo;


        const menuName = document.createElement('div');
        menuName.classList.add('MENU')
        menuName.appendChild(imgElement)
        menuName.appendChild(itemElement)
        

        itemContainer.appendChild(menuName)
        itemContainer.appendChild(iteminfo)

        xyz.appendChild(itemContainer);
    }
}

export const bluelagoon = new MenuItem("Beverage", "Blue Lagoon", blgn, food.blueLagoon);
export const tacos = new MenuItem("Side", "Tacos", tcos, food.tacos);
export const biryani = new MenuItem("Meal", "Biryani", bryni, food.biryani);
export const strawberrycrush = new MenuItem("Beverage", "Strawberry Crush", strbrry, food.strawberryCrush)