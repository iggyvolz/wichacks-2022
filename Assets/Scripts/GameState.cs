using UnityEngine;

public class GameState : MonoBehaviour
{
	public Animal animal;

	private Animal? previousAnimal = null;

    void Update()
    {
	    if (previousAnimal != animal)
	    {
		    Debug.Log($"You have a {animal.data().Name}");
		    Debug.Log($"Habitat: {animal.data().Habitat}");
		    Debug.Log($"Location: {animal.data().Location}");
		    Debug.Log($"Favorite Foods: {animal.data().FavoriteFoods}");
		    Debug.Log($"Fun Facts: {animal.data().FunFacts}");
		    Debug.Log($"Threats: {animal.data().Threats}");
		    Debug.Log($"Size: {animal.data().Size}");
		    SpriteRenderer animalView = transform.Find("AnimalImage").GetComponent<SpriteRenderer>();
		    animalView.sprite = animal.data().Image;
		    previousAnimal = animal;
	    }
    }
}
