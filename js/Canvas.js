import AnimalFacts from "../Data/animalfacts.js"
export default class Canvas extends HTMLCanvasElement
{
    get context() {
        return this.getContext("2d");
    }
    connectedCallback() {
        this.width = 1080;
        this.height = 1920;
        this.style="max-width: 90vw; max-height: 90vh; border: 1px solid black";
        console.log({AnimalFacts});
        const animal = AnimalFacts.filter(x => x.Name === "Hawksbill Turtle")[0];
        console.log({animal});
    }
}