import Screen from "./Screen.js";
import Gamestate from "../GameState.js";
import TempState from "../TempState.js";
import Images from "../../Images/Images.js";
export default class MainScreen extends Screen
{
    /**
     * @param {Gamestate} gs
     * @param {CanvasRenderingContext2D} ctx 
     */
    async draw(gs,ctx){
        const name = "Saola"
        const hat = "tophat"
        console.log(name + hat)
        ctx.drawImage(await Images[name + hat], 0, 0);
    }
}