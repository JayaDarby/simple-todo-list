
document.querySelector('input').addEventListener('focus', function(event){
    this.value ='';
    event.preventDefault();
});

document.querySelector('form').addEventListener('submit', function(event){
	event.preventDefault();
	var item = document.createElement('LI');
	var input = document.getElementById('todoItem');
    item.innerHTML = input.value;

    document.querySelector('UL').appendChild(item);
});



