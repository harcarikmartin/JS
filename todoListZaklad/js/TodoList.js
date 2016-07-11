var tasks = [];

if(localStorage.toDoList) {
	tasks = JSON.parse(localStorage.toDoList);
}

var taskTemplate =$("#tmplTask").html();

console.log(taskTemplate);

function addTaskToHtml(task) {
	if(task) {
		var $element = $(Mustache.render(taskTemplate, task));
		
		//zmena priradenia class, ak je element isDone
		if (task.isDone) {
			$element.removeClass("activeTask");
			$element.addClass("completedTask");
		}
		
	
		$element.click(function() {
				$(this).toggleClass("activeTask");
				$(this).toggleClass("completedTask");
				var dataId = $(this).attr("data-id");
				
				for(var i = 0; i < tasks.length; i++) {
					if(tasks[i].id == dataId) {
						tasks[i].isDone =!tasks[i].isDone;
					}
				}
				localStorage.toDoList = JSON.stringify(tasks);
			}
		);
		
		$("#frmTasks").append($element);//vypis do formulara na html stranke todoList.html
		
		
	}
}

for(var i = 0; i < tasks.length; i++) {
	addTaskToHtml(tasks[i]);
}

$("#btAddTask").click(function() {
		taskDesc = $("#inNewTask").val().trim();
		if(taskDesc && taskDesc.length > 0) {
			var newTask = {
				id: Date.now(), 
				task: taskDesc,
				isDone: false
			}
			addTaskToHtml(newTask);
			tasks.push(newTask);
			console.log(tasks);
		}
		localStorage.toDoList = JSON.stringify(tasks);
	}
);

$("#btRemCmpl").click(function() {
		$(".completedTask").remove();
		
		tasks = tasks.filter(function(task) {
				return !task.isDone;
			}
		);
		localStorage.toDoList = JSON.stringify(tasks);
	}
);

