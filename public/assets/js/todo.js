$(document).ready(function () {
  const $addTodoBtn = $("#addTodo");
  const $todoInput = $("#addTodoInput");
  const $todosDiv = $("#todos");

  //Async API call - This line of code speaks to code on server.js
  $.get("/api/todos").then((todos) => {
    todos.forEach((todo) => {
      const $todosCol = $("<div>")
        .addClass("col-sm-12" ${todo.completed ? 'blue' : 'red'})
        .attr({
          id: `todo${todo.id}`,
        })
        .text(todo.todo);

      $todosDiv.append($todosCol);
    });

  });
  $addTodoBtn.on('click', function() {
      const todoText = $todoInput.val().trim();
      if (todoText.length === 0){
          alert("You need to input information.")
      }
  })
});
