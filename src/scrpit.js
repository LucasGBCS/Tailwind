
  // Obtendo elementos
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  // Função para adicionar tarefa
  function addTask() {
    const taskText = taskInput.value.trim(); // Pega o texto da tarefa e remove espaços extras
    if (taskText !== "") { // Verifica se o campo não está vazio
      const li = document.createElement("li");
      li.classList.add("flex", "items-center", "justify-between", "p-2", "bg-white", "rounded-lg", "shadow-sm", "mb-2");
      
      // Cria o texto da tarefa
      const taskContent = document.createElement("span");
      taskContent.textContent = taskText;

      // Cria o botão para remover a tarefa
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "🗑️";
      removeBtn.classList.add("text-red-500", "hover:text-red-700", "ml-2");
      removeBtn.onclick = function () {
        taskList.removeChild(li);
      };

      // Adiciona o conteúdo e o botão de remover à tarefa
      li.appendChild(taskContent);
      li.appendChild(removeBtn);

      // Adiciona a tarefa à lista
      taskList.appendChild(li);

      // Limpa o input
      taskInput.value = "";
    }
  }

  // Adiciona tarefa quando o botão for clicado
  addTaskBtn.addEventListener("click", addTask);

  // Também adiciona tarefa ao pressionar Enter
  taskInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });

