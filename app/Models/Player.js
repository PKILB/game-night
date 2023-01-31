

export class Player {
    constructor(name) {
        this.name = name;
        this.score = 0; 
    }
}

//Player.js
get PlayerTemplateCard(){
    return `
        <div class="card">
            <div class="card-body">
                ${this.name} - ${this.score}
            </div>
        </div>`
    }