import AnimalFacts from "../Data/animalfacts.js"
import Images, {Saola} from "../Images/Images.js"
import Dialog from "./Dialog.js";
export default class Canvas extends HTMLCanvasElement
{
    get context() {
        return this.getContext("2d");
    }
    async connectedCallback() {
        this.width = 1080;
        this.height = 1920;
        this.style="max-width: 90vw; max-height: 90vh; border: 1px solid black";
        console.log({AnimalFacts});
        const dialog = Dialog();
        console.log({dialog});
        const form = dialog.appendChild(document.createElement("form"));
        form.method = "dialog";
        const select = form.appendChild(document.createElement("select"));
        AnimalFacts.map(x => x.Name).forEach(name => {
            const option = select.appendChild(document.createElement("option"));
            option.value = option.innerText = name;
        });
        form.appendChild(document.createElement("button")).innerText = "Submit";
        // input.type = "submit";
        dialog.showModal();
        const animal = await new Promise(r => dialog.addEventListener("close", () => r(AnimalFacts.filter(x => x.Name === select.value)[0])));
        console.log({animal});
        const ctx = this.getContext("2d");
        ctx.drawImage(await Images[animal.Name.replaceAll(" ", "")], 0, 0);
    }
}