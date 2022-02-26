using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Random = UnityEngine.Random;

public class GameState : MonoBehaviour
{
	public Animal animal;

    // Start is called before the first frame update
    void Start()
    {
		// animal = (Animal)typeof(Animal).GetEnumValues().GetValue(Random.Range(0, typeof(Animal).GetEnumValues().Length));
		// Debug.Log($"They live in {animal.Habitat}");
    }

    private Animal? previousAnimal = null;

    // Update is called once per frame
    void Update()
    {
	    if (previousAnimal != animal)
	    {
		    Debug.Log($"You have a {animal.data().Name}");
		    SpriteRenderer animalView = transform.Find("AnimalImage").GetComponent<SpriteRenderer>();
		    animalView.sprite = animal.data().Image;
		    previousAnimal = animal;
	    }
    }
}
