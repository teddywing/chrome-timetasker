(function() {
	var CLIENT = 'af83';
	var PROJECT = 'Enroute';
	var MODULE = 'Sprint 3';
	var TASK = 'General Time - No Task';
	var WORK_TYPE = 'Développeur';
	var TIME = 7;
	var BILLABLE = true;


	var client_0 = document.getElementById('f_clientID0');
	var project_0 = document.getElementById('f_projectID0');
	var module_0 = document.getElementById('f_moduleID0');
	var task_0 = document.getElementById('f_taskID0');
	var work_type_0 = document.getElementById('f_worktypeID0');
	var date_0 = document.getElementById('f_date0');
	var time_0 = document.getElementById('f_time0');
	var billable_0 = document.getElementById('f_billable0');


	popupate_select(client_0, CLIENT);

	fire_select_event(
		popupate_select(project_0, PROJECT)
	);

	window.setTimeout(function() {
		popupate_select(module_0, MODULE);
	}, 500);

	window.setTimeout(function() {
		popupate_select(task_0, TASK);
	}, 500);

	window.setTimeout(function() {
		popupate_select(work_type_0, WORK_TYPE);
	}, 500);

	// popupate_select(date_0, '');
	time_0.value = TIME;
	popupate_select(billable_0, BILLABLE ? 't' : 'f');


	function popupate_select(element, name) {
		var options = element.getElementsByTagName('option');

		for (var i = 0; i < options.length; i++) {
			if (options[i].textContent === name) {
				element.value = options[i].value;
				return element;
			}
		}
	}

	function fire_select_event(element) {
		var event = document.createEvent('HTMLEvents');
		event.initEvent('change', false, true);
		element.dispatchEvent(event);
	}
})();
