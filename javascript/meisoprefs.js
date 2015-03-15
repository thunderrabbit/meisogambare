var MeisoPreferences = function() {

	// the values in prefs are only defaults that will be overwritten if user clicks save prefs
	var meditationTime = 5;

	function saveThatInThis(variable, value) {
		localStorage[variable] = JSON.stringify(value);
	}

	function getThat(variable) {
		return localStorage[variable] ? JSON.parse(localStorage[variable]) : undefined;
	}

	function saveMeditationTime(time) {
		// save MeditationTime
		saveThatInThis('meditationTime',time);
	}

	function restoreMeditationTime() {
		return getThat('meditationTime') || meditationTime;
	}

	return {
		setMeditationTime: saveMeditationTime,
		getMeditationTime: restoreMeditationTime
	}

};