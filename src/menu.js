export class menu {
    display(){}
}

export class beverages extends menu{
    constructor(drinks) {
        super()
        this.drinks = drinks
    }
    display(){
        const beverages = document.createElement("div")
        beverages.textContent = this.drinks
        document.body.appendChild(beverages); 
    }    
}

export class sides extends menu{
    constructor(food) {
        super()
        this.food = food
    }
    display(){
        const sides = document.createElement("div")
        sides.textContent = this.food
        document.body.appendChild(sides); 
    }    
}

export class meals extends menu{
    constructor(food) {
        super()
        this.food = food
    }
    display(){
        const meals = document.createElement("div")
        meals.textContent = this.food
        document.body.appendChild(meals); 
    }    
}

export const beveragesInfo = new beverages("Blue lagoon")
export const sidesInfo = new sides("Tacos")
export const mealsInfo = new meals("Biryani")
