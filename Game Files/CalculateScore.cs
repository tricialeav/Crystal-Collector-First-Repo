using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class CalculateScore : MonoBehaviour {

	public GameObject crystalPrefab; 
	public GameObject[] crystals;
	public static float score = 12; 

	void Start()
	{
		crystals = GameObject.FindGameObjectsWithTag("Pick Up");
		GetComponent<TextMesh>().text="Crystals Left: " + score;
	}

	void Update() {
		if (score == crystals.Length) {
			GetComponent<TextMesh> ().text = "Crystals Left: " + score; 
		} else if (GetCrystal.newScore > 0) {
			GetComponent<TextMesh> ().text = "Crystals Left: " + GetCrystal.newScore;
		} else {
			GetComponent<TextMesh> ().text = "You win!";
		}
	}

}