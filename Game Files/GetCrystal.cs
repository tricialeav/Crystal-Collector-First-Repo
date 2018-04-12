using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GetCrystal : MonoBehaviour {
		void Update ()
		{
			if(Input.GetButtonDown("Fire2"))
			{
				Destroy(gameObject);
			}
		}
	}