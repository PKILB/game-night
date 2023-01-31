import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";



class PlayerService {

    createPlayer(playerData) {
        let newPlayer = new Player(playerData.name)
        appState.players.push(newPlayer)
    }
}

export const playersService = new PlayerService()

