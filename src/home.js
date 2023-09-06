export class homePage{    
    display(){}
}

export class summary extends homePage{
    constructor(words) {
        super()
        this.words = words
    }
    display(){
        const summary = document.createElement("div")
        summary.textContent = this.words
        document.body.appendChild(summary); 
    }    
}

export class timings extends homePage{
    constructor(words) {
        super()
        this.words = words
    }
    display(){
        const timings = document.createElement("div")
        timings.textContent = this.words
        document.body.appendChild(timings); 
    }    
}

export class location extends homePage{
    constructor(words) {
        super()
        this.words = words
    }
    display(){
        const location = document.createElement("div")
        location.textContent = this.words
        document.body.appendChild(location); 
    }    
}

export const summaryInfo = new summary("Cozy place, great food!")
export const timingsInfo = new timings("Open from 11:00 AM to 10:00 PM")
export const locationInfo = new location("123 Main St, City, Country")

//summaryInfo.display();
//timingsInfo.display();
//locationInfo.display();


