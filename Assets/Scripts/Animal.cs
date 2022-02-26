public class AnimalData
{
    public static readonly System.Collections.Generic.Dictionary<Animal, AnimalData> Animals = new System.Collections.Generic.Dictionary<Animal, AnimalData>
    {
        { Animal.HawksbillTurtle, new AnimalData { Name = "Hawksbill Turtle", Location = "Oceans", Habitat = "Tropical Oceans and Coral Reefs", FavoriteFoods = "Jellyfish, sponges, sea anemones", Size = "30-35 inches, 90-150 lbs", FunFacts = "Known for their narrow, pointed beak", Threats = "Rising seas, pollution, loss of coral reefs", Image = UnityEngine.Resources.Load<UnityEngine.Sprite>("HawksbillTurtle"), } },
        { Animal.AfricanForestElephant, new AnimalData { Name = "African Forest Elephant", Location = "Gabon, Republic of Congo", Habitat = "Dense Tropical Forests", FavoriteFoods = "Tree leaves and fruits", Size = "8-10 feet, 2-5 tons", FunFacts = "Can live up to 70 years", Threats = "Deforestation and Habitat Loss", Image = UnityEngine.Resources.Load<UnityEngine.Sprite>("AfricanForestElephant"), } },
        { Animal.Saola, new AnimalData { Name = "Saola", Location = "Annamite Mountains of Vietnam and Laos", Habitat = "Evergreen forests", FavoriteFoods = "Fig leaves and bushes", Size = "33 inches, 176-200 lbs", FunFacts = "Also known as the \"Asian Unicorn\", Discovered first in 1992, Lives 8-11 years in the wild", Threats = "Hunting, Habitat Loss", Image = UnityEngine.Resources.Load<UnityEngine.Sprite>("Saola"), } },
        { Animal.SundaTiger, new AnimalData { Name = "Sunda Tiger", Location = "Island of Summatra", Habitat = "Tropical broadleaf evergreen forests, freshwater swamp forests and peat swamps", FavoriteFoods = "Fish, monkeys, wild boar", Size = "6-10 feet, 165-308 lbs", FunFacts = "Fewer than 400 exist today, Smallest species of tigers", Threats = "Hunting, Deforestation", Image = UnityEngine.Resources.Load<UnityEngine.Sprite>("SundaTiger"), } },
    };
    public string Name {get; private set;}
    public string Location {get; private set;}
    public string Habitat {get; private set;}
    public string FavoriteFoods {get; private set;}
    public string Size {get; private set;}
    public string FunFacts {get; private set;}
    public string Threats {get; private set;}
    public UnityEngine.Sprite Image { get; private set; }
}

public enum Animal
{
    HawksbillTurtle,
    AfricanForestElephant,
    Saola,
    SundaTiger,
}

public static class _Animal
{
    public static AnimalData data(this Animal animal)
    {
        return AnimalData.Animals[animal];
    }
}
