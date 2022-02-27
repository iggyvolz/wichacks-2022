import Gamestate from "./GameState.js";
import MainScreen from "./screen/MainScreen.js";
import Dialog from "./Dialog.js";
import animals from "../Data/animals.js";
import GoalAddScreen from "./screen/GoalAddScreen.js"
import GoalViewScreen from "./screen/GoalViewScreen.js"
import ResourcesScreen from "./screen/ResourcesScreen.js"
import ShopScreen from "./screen/ShopScreen.js"
import PetScreen from "./screen/PetScreen.js"
import { BackgroundYard, ResourcesIcon } from "../Images/Images.js";

const screens = {
    main: new MainScreen(),
    goalAdd: new GoalAddScreen(),
    goalView: new GoalViewScreen(),
    resources: new ResourcesScreen(),
    shop: new ShopScreen(),
    pet: new PetScreen()
};

let currentScreen = "";

let goalBtn = document.querySelector("#goals");
let petBtn = document.querySelector("#pet");
let shopBtn = document.querySelector("#shop");
let resourceBtn = document.querySelector("#resources");
//let mainBtn = document.querySelector("#menu");
goalBtn.addEventListener("click", changeScreen(goalBtn));
petBtn.addEventListener("click", changeScreen(petBtn));
shopBtn.addEventListener("click", changeScreen(shopBtn));
resourceBtn.addEventListener("click", changeScreen(resourceBtn));

function changeScreen(btn){
    switch (btn) {
        case goalBtn:
          currentScreen = "goalView";
          console.log("goal screen!")
          break;
        case petBtn:
            currentScreen = "pet";
            console.log("pet screen!")
            break;
        case shopBtn:
          currentScreen = "shop";
          console.log("shop screen!")
          break;
        case resourceBtn:
          currentScreen = "resources";
          console.log("resource screen!")
          break;
    }
}


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
        this.gs.Screen = currentScreen;
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