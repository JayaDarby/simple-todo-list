
document.querySelector('input').addEventListener('focus', function(event){
    this.value ='';
    event.preventDefault();
});

document.body.addEventListener('mouseover', function(event){
	if(event.srcElement.nodeName == 'SPAN'){
      event.srcElement.style.color = 'red';
    }
    event.preventDefault();
});

document.body.addEventListener('mouseout', function(event){
	if(event.srcElement.nodeName == 'SPAN'){
      event.srcElement.style.color = 'white';
    }
    event.preventDefault();
});

document.querySelector('form').addEventListener('submit', function(event){
	var item = document.createElement('LI');
	var input = document.getElementById('todoItem');
    item.innerHTML = input.value;
    event.preventDefault();
    var deleteSpan = document.createElement('SPAN');
    deleteSpan.style.float='right';
    deleteSpan.style.color='white';
    deleteSpan.innerHTML = 'Delete';
    if(input.value != ''){
        document.querySelector('UL').appendChild(item);
        item.appendChild(deleteSpan);
        document.querySelector('input').value='';
    }
});

document.body.addEventListener('click', function(event){	
    if(event.srcElement.nodeName == 'SPAN')	{
        event.srcElement.parentElement.remove();
    }
    else if(event.srcElement.nodeName == 'LI'){
		if(event.srcElement.className)
			event.srcElement.className='';
		else
		  event.srcElement.className = 'completed';
    }
})


