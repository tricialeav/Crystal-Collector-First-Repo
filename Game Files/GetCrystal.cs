using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GetCrystal : MonoBehaviour {
	void OnCollisionEnter (Collision col)
	{
			Destroy(this.gameObject);
	}
}