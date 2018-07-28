function myFirstApp (name, age) {

	alert ("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills () {
		let skills = ["html", "css", "photoshop", "tilda" ];

		for (let i=0; i < skills.length; i++){
			skills [i] = document.write("Я владею " + skills[i] + "<br>");
		}
	}

	showSkills();


	function checkAge () {
		if (age > 18) {
			alert("Вы можете работать в компани")
		} else {
			alert("Вы не можете работать в компани")
		}
	}
	checkAge ();

	function calcPow(a) {
		console.log(a*a)
	};

	calcPow(4);
	calcPow(15);
	calcPow(7);

}

myFirstApp("Natalia", 21)