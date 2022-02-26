public class Animal
{
    public static readonly Animal HawksbillTurtle = new Animal("Hawksbill Turtle", "Oceans", "Tropical Oceans and Coral Reefs", "Jellyfish, sponges, sea anemones", "30-35 inches, 90-150 lbs", "Known for their narrow, pointed beak", "Rising seas, pollution, loss of coral reefs");
    public static readonly Animal AfricanForestElephant = new Animal("African Forest Elephant", "Gabon, Republic of Congo", "Dense Tropical Forests", "Tree leaves and fruits", "8-10 feet, 2-5 tons", "Can live up to 70 years", "Deforestation and Habitat Loss");
    public static readonly Animal Saola = new Animal("Saola", "Annamite Mountains of Vietnam and Laos", "Evergreen forests", "Fig leaves and bushes", "33 inches, 176-200 lbs", "Also known as the \"Asian Unicorn\", Discovered first in 1992, Lives 8-11 years in the wild", "Hunting, Habitat Loss");
    public static readonly Animal SundaTiger = new Animal("Sunda Tiger", "Island of Summatra", "Tropical broadleaf evergreen forests, freshwater swamp forests and peat swamps", "Fish, monkeys, wild boar", "6-10 feet, 165-308 lbs", "Fewer than 400 exist today, Smallest species of tigers", "Hunting, Deforestation");
    public static readonly Animal[] animals = {HawksbillTurtle, AfricanForestElephant, Saola, SundaTiger};
    public readonly string AnimalName, Location, Habitat, FavoriteFoods, Size, FunFacts, Threats;


    Animal(string animalName, string location, string habitat, string favoriteFoods, string size, string funFacts, string threats)
    {
        AnimalName = animalName;
        Location = location;
        Habitat = habitat;
        FavoriteFoods = favoriteFoods;
        Size = size;
        FunFacts = funFacts;
        Threats = threats;
    }
}
