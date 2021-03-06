import Animal from "../js/Animal.js";
/** @type Animal[] */
export default [
    {
        "Name": "Hawksbill Turtle",
        "Location": "Oceans",
        "Habitat": "Tropical Oceans and Coral Reefs",
        "FavoriteFoods": "Jellyfish, sponges, sea anemones",
        "Size": "30-35 inches, 90-150 lbs",
        "FunFacts": "Known for their narrow, pointed beak.",
        "Threats": "Rising seas, pollution, loss of coral reefs"
    },
    {
        "Name": "African Forest Elephant",
        "Location": "Gabon,  Republic of Congo",
        "Habitat": "Dense Tropical Forests",
        "FavoriteFoods": "Tree leaves and fruits",
        "Size": "8-10 feet, 2-5 tons",
        "FunFacts": "Can live up to 70 years",
        "Threats": "Deforestation and Habitat Loss"
    },
    {
        "Name": "Saola",
        "Location": "Annamite Mountains of Vietnam and Laos.",
        "Habitat": "Evergreen forests",
        "FavoriteFoods": "Fig leaves and bushes",
        "Size": "33 inches, 176-200 lbs",
        "FunFacts": "Also known as the \"Asian Unicorn\", Discovered first in 1992, Lives 8-11 years in the wild",
        "Threats": "Hunting, Habitat Loss"
    },
    {
        "Name": "Sunda Tiger",
        "Location": "Island of Summatra",
        "Habitat": "Tropical broadleaf evergreen forests, freshwater swamp forests and peat swamps",
        "FavoriteFoods": "Fish, monkeys, wild boar.",
        "Size": "6-10 feet, 165-308 lbs",
        "FunFacts": "Fewer than 400 exist today, Smallest species of tigers",
        "Threats": "Hunting, Deforestation"
    }
].map(x => Object.assign(new Animal(), x))