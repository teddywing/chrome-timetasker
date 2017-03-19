chrome.storage.sync.get({
	client: '',
	project: '',
	module: '',
	task: 'General Time - No Task',
	work_type: '',
	time: 7,
	billable: true
}, timetasker);

function timetasker (fields) {
	var client_0 = document.getElementById('f_clientID0');
	var project_0 = document.getElementById('f_projectID0');
	var module_0 = document.getElementById('f_moduleID0');
	var task_0 = document.getElementById('f_taskID0');
	var work_type_0 = document.getElementById('f_worktypeID0');
	var date_0 = document.getElementById('f_date0');
	var time_0 = document.getElementById('f_time0');
	var billable_0 = document.getElementById('f_billable0');
	var duplicate_0 = document.querySelector('[onclick="Timegrid.duplicate(0);"]');


	populate_select(client_0, fields.client);

	fire_select_event(
		populate_select(project_0, fields.project)
	);

	window.setTimeout(function() {
		populate_select(module_0, fields.module);
	}, 500);

	window.setTimeout(function() {
		populate_select(task_0, fields.task);
	}, 500);

	window.setTimeout(function() {
		populate_select(work_type_0, fields.work_type);
	}, 500);

	time_0.value = fields.time;
	populate_select(billable_0, fields.billable ? 't' : 'f');


	window.setTimeout(function() {
		for (var i = 0; i < 4; i++) {
			duplicate_0.click();
		}

		// Auto-fill the four duplicated time entries with dates following
		// the one picked in the first time entry
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
}
