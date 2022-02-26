import Screen from "./Screen.js";
import Gamestate from "../GameState.js";
import TempState from "../TempState.js";
import Images from "../../Images/Images.js";
export default class MainScreen extends Screen
{
    /**
     * @param {Gamestate} gs
     * @param {TempState} ts
     * @param {CanvasRenderingContext2D} ctx 
     */
    async draw(gs,ts,ctx){
        // console.log({gs,ts,ctx});
        ctx.drawImage(await Images[gs.Animal.replaceAll(" ", "")], 0, 0);
    }
}