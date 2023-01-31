import { appState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";
import {getFormData} from "../Utils/FormHandler.js"


export class PlayersController {
    drawPlayers() {
        let players = appState.players
        console.log('drawing players', players);
        let names = ''
        players.forEach(player => names += player.HTMLTemplate)
        document.getElementById('players').innerHTML = names
    }
    

    addPlayer() {
        window.event.preventDefault()
        const form = window.event.target
        console.log('Creating Player', form);
        let playerData = getFormData(form);
        playersService.createPlayer(playerData);
        console.log(playerData);
        this.drawPlayers()
    }
}

