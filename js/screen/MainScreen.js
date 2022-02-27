import Screen from "./Screen.js";
import Gamestate from "../GameState.js";
import Images, { BackgroundYard, GoalsIcon, PetIcon, ResourcesIcon, ShopIcon } from "../../Images/Images.js";
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
        console.log(gs)
        console.log(name + hat)
        const animalimage = await Images[name + hat]
        ctx.drawImage(animalimage, (screen.width/2)-(animalimage.width), 1300);
        ctx.drawImage(await GoalsIcon, 30, 1740)
        ctx.drawImage(await PetIcon, 230, 1740)
        console.log(ShopIcon + "is here")
        ctx.drawImage(await ShopIcon, 400, 1740)
        console.log(ResourcesIcon + "is here")
        ctx.drawImage(await ResourcesIcon, 1680, 1740)
    }
}