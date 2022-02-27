import Gamestate from "./GameState.js";
import MainScreen from "./screen/MainScreen.js";
import Dialog from "./Dialog.js";
import animals from "../Data/animals.js";

const screens = {
    main: new MainScreen(),
};
export default class Canvas extends HTMLCanvasElement
{
    /** @var Gamestate */
    gs = new Gamestate();
    get ctx() {
        return this.getContext("2d");
    }
    async connectedCallback() {
        this.width = 1080;
        this.height = 1920;
        this.style="max-width: 90vw; max-height: 90vh; border: 1px solid black";
        this.gs.Screen = "main";
        const dialog = Dialog();
        console.log({dialog});
        const form = dialog.appendChild(document.createElement("form"));
        form.method = "dialog";
        const select = form.appendChild(document.createElement("select"));
        animals.map(x => x.Name).forEach(name => {
            const option = select.appendChild(document.createElement("option"));
            option.value = option.innerText = name;
        });
        form.appendChild(document.createElement("button")).innerText = "Submit";
        // input.type = "submit";
        dialog.showModal();
        this.gs.Animal = await new Promise(r => dialog.addEventListener("close", () => r(select.value)));
        requestAnimationFrame(this.frame.bind(this));
    }
    frame() {
        this.ctx.clearRect(0,0,this.width,this.height);
        screens[this.gs.Screen].draw(this.gs, this.ctx);
        //requestAnimationFrame(this.frame.bind(this));
    }
}