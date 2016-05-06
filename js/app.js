var output = document.getElementById('log');

function assert(outcome, description) {
	var li = document.createElement('LI');
	li.className = outcome ? 'pass' : 'fail';
	li.appendChild(document.createTextNode(description));

	output.appendChild(li);
};
