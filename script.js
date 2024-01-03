function get_todos(){
    var todos= new Array;
    var todos_str= localStorage.getItem('todo');
    if(todos_str!==null){
        todos= JSON.parse(todos_str);
    }
    return todos;
}
//to add a task
function addtask(){
    var task= document.getElementById('task').value;
    var todos= get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}
//to remove a task
function removetask(){
    var id= this.getAttribute('id');
    var todos=get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}

//to display the tasks
function show(){
    var todos= get_todos();
    var html ="<ul>";
    for(var i=0;i<todos.length;i++){
        html+= '<li>'+ todos[i]+'<button class= "remove" id="'+i+'">Delete</button><li>';
    };
    html+="</ul>";
    document.getElementById('todos').innerHTML= html;
    var buttons= document.getElementsByClassName('remove');
    for(var i=0;i<buttons.length;i++){
        buttons[i].addEventListener('click', removetask);
    };
}
document.getElementById('add').addEventListener('click', addtask);
show();

function DefaultValue(a){
    if(a.DefaultValue==a.value)
    a.value="";
};
