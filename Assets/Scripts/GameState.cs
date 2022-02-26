using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameState : MonoBehaviour
{
	public Animal animal;
    // Start is called before the first frame update
    void Start()
    {
		animal = Animal.animals[Random.Range(0, Animal.animals.Length)];
		Debug.Log($"You have a {animal.AnimalName}");
		Debug.Log($"They live in {animal.Habitat}");
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
