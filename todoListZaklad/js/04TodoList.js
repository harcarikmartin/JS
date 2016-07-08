var staticTasks='[{"id":"1","task":"Write Europass CV as web page","isDone":true},{"id":"2","task":"Implement TODO list","isDone":false},{"id":"3","task":"Do final assignment","isDone":false}]';

var tasks=JSON.parse(staticTasks);

var taskTemplate =$("#tmplTask").html();

console.log(taskTemplate);

for(var i = 0; i < tasks.length; i++) {
	var $element = $(Mustache.render(taskTemplate, tasks[i]));
	
	//zmena priradenia class, ak je element isDone
	if (tasks[i].isDone) {
		$element.removeClass("activeTask");
		$element.addClass("completedTask");
	}
	
	$("#frmTasks").append($element);//vypis do formulara na html stranke todoList.html
	
	/* vypis do dokumentu
	document.write(Mustache.render(taskTemplate, tasks[i]));
	*/
}

/* vypis do dokumentu cez skrateny for
for(var task of tasks) {
	document.write(Mustache.render(taskTemplate, task));
}
*/


