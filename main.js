document.querySelector('button').addEventListener('click', function() {
	var fibonacciEnd = document.getElementById('number').value;
	var outpuElement = document.getElementById('output');
	outpuElement.innerHTML = '';
	
	var fibonacci = [0, 1, 1];
	for (var i = 3; i < fibonacciEnd; i++) {
		fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
	}
	for (var i = 0; i < fibonacciEnd; i++) {
		outpuElement.innerHTML += '<li>' + fibonacci[i] + '</li>';
	};
});
