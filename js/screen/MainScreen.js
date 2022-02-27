import Screen from "./Screen.js";
import Gamestate from "../GameState.js";
import Images, { BackgroundYard } from "../../Images/Images.js";
export default class MainScreen extends Screen
{
    /**
     * @param {Gamestate} gs
     * @param {CanvasRenderingContext2D} ctx 
     */
    async draw(gs,ctx){
        ctx.drawImage(await BackgroundYard, 0, 0);
        const name = gs.Animal.replaceAll(" ", "");
        const hat = gs.Hat ?? ""
        console.log(name + hat)
        ctx.drawImage(await Images[name + hat], screen.width/8, 650 );
    }
}