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
	var duplicate_0 = document.querySelector('[onclick="Timegrid.duplicate(0);"]');


	populate_select(client_0, CLIENT);

	fire_select_event(
		populate_select(project_0, PROJECT)
	);

	window.setTimeout(function() {
		populate_select(module_0, MODULE);
	}, 500);

	window.setTimeout(function() {
		populate_select(task_0, TASK);
	}, 500);

	window.setTimeout(function() {
		populate_select(work_type_0, WORK_TYPE);
	}, 500);

	time_0.value = TIME;
	populate_select(billable_0, BILLABLE ? 't' : 'f');


	window.setTimeout(function() {
		for (var i = 0; i < 4; i++) {
			duplicate_0.click();
		}

		date_0.addEventListener('change', function() {
			var date_group = this.value.split('/')
			var date = new Date(
				'20' + date_group[2],
				date_group[1] - 1, // JS 0-indexed month
				date_group[0]
			);

			for (var i = 2; i <= 5; i++) {
				var date_el = document.getElementById('f_date' + i);
				date.setDate(date.getDate() + 1);
				date_el.value = format_date(date);
			}
		});
	}, 2000);


	function populate_select(element, name) {
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

	// Format: dd/mm/yy
	function format_date(date) {
		var month = date.getMonth() + 1;
		var year = date.getFullYear().toString().substring(2);

		return date.getDate() + '/' + month + '/' + year;
	}
})();
