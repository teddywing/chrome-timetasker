function save_options() {
	var client = document.getElementById('client').value;
	var project = document.getElementById('project').value;
	var module = document.getElementById('module').value;
	var task = document.getElementById('task').value;
	var work_type = document.getElementById('work_type').value;
	var time = document.getElementById('time').value;
	var billable = document.getElementById('billable').checked;

	chrome.storage.sync.set({
		client: client,
		project: project,
		module: module,
		task: task,
		work_type: work_type,
		time: time,
		billable: billable
	}, function() {
		// Update status to let user know options were saved.
		var status = document.getElementById('status');
		status.textContent = 'Options saved.';
		setTimeout(function() {
			status.textContent = '';
		}, 750);
	});
}

function restore_options() {
	chrome.storage.sync.get({
		client: '',
		project: '',
		module: '',
		task: 'General Time - No Task',
		work_type: '',
		time: 7,
		billable: true
	}, function(items) {
		document.getElementById('client').value = items.client;
		document.getElementById('project').value = items.project;
		document.getElementById('module').value = items.module;
		document.getElementById('task').value = items.task;
		document.getElementById('work_type').value = items.work_type;
		document.getElementById('time').value = items.time;
		document.getElementById('billable').checked = items.billable;
	});
}

document.addEventListener('DOMContentLoaded', restore_options);
document
	.getElementById('save')
	.addEventListener('click', save_options);
