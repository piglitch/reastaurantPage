export class Contact {
    display(){}
}

export class Name extends Contact{
    constructor(name) {
        super()
        this.name = name
    }
    display(){
        const myname = document.createElement("div")
        myname.textContent = this.name
        document.body.appendChild(myname); 
    }    
}

export class Number extends Contact{
    constructor(cell) {
        super()
        this.cell = cell
    }
    display(){
        const cellnum = document.createElement("div")
        cellnum.textContent = this.cell
        document.body.appendChild(cellnum); 
    }    
}

export class Email extends Contact{
    constructor(email) {
        super()
        this.email = email
    }
    display(){
        const mailID = document.createElement("div")
        mailID.textContent = this.email
        document.body.appendChild(mailID); 
    }    
}

export const nameInfo = new Name("Name: Avi")
export const numberInfo = new Number("Ph: LoL")
export const mailInfo = new Email("Mail: avibanerjee2000@gmail.com")

