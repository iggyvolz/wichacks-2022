import Screen from "./Screen.js";
import Gamestate from "../GameState.js";
import Images, { BackgroundYard, GoalsIcon, MenuIcon, PetIcon, ResourcesIcon, ShopIcon, Goal } from "../../Images/Images.js";
export default class GoalViewScreen extends Screen
{
    /**
     * @param {Gamestate} gs
     * @param {CanvasRenderingContext2D} ctx 
     */
     async draw(gs,ctx){
        ctx.drawImage(await Goal, 0, 0);
    }
}