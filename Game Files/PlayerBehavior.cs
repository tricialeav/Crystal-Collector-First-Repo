using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerBehavior : MonoBehaviour {
	public Animator anim; 

	// Use this for initialization
	void Start () {
		anim = GetComponent<Animator> (); 
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetKey ("w") || Input.GetKey ("d") || Input.GetKey ("s") || Input.GetKey ("a") || 
			Input.GetKey(KeyCode.UpArrow) || Input.GetKey(KeyCode.DownArrow) || Input.GetKey(KeyCode.RightArrow) || 
			Input.GetKey(KeyCode.LeftArrow)) {
			anim.Play ("Fly");

		} else {
			anim.Play ("Wait");
		}

	}
}
