import Screen from "./Screen.js";
import Gamestate from "../GameState.js";
import Images, { BackgroundYard, GoalsIcon, MenuIcon, PetIcon, ResourcesIcon, ShopIcon, GoalAdd } from "../../Images/Images.js";
export default class GoalAddScreen extends Screen
{
    /**
     * @param {Gamestate} gs
     * @param {CanvasRenderingContext2D} ctx 
     */
     async draw(gs,ctx){
        ctx.drawImage(await GoalAdd, 0, 0);
        console.log(MenuIcon)
        ctx.drawImage(await MenuIcon, 30, 30)
    }
}