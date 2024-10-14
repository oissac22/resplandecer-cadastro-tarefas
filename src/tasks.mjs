import fs from 'fs';

const TASK_FILE_PATH = "src/data.json"

// Função para carregar tarefas do arquivo JSON
function loadTasks() {
  try {
    const dataBuffer = fs.readFileSync(TASK_FILE_PATH);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

// Função para salvar tarefas no arquivo JSON
function saveTasks(tasks) {
  const dataJSON = JSON.stringify(tasks, null, 2);
  fs.writeFileSync(TASK_FILE_PATH, dataJSON);
}

// Função para adicionar uma nova tarefa
export function addTask(name) {
  name = name.toUpperCase();
  const tasks = loadTasks();
  const duplicateTask = tasks.find((task) => task.name === name);

  if (!duplicateTask) {
    tasks.push({
      id: tasks.length + 1,
      name: name,
    });
    saveTasks(tasks);
    console.log('Tarefa adicionada com sucesso!');
  } else {
    console.log('Essa tarefa já existe.');
  }
}

// Função para remover uma tarefa
export function removeTask(name) {
  name = name.toUpperCase();
  const tasks = loadTasks();
  const filteredTasks = tasks.filter((task) => task.name !== name);

  if (tasks.length > filteredTasks.length) {
    saveTasks(filteredTasks);
    console.log('Tarefa removida com sucesso!');
  } else {
    console.log('Tarefa não encontrada.');
  }
}

// Função para listar as tarefas
export function listTasks() {
  const tasks = loadTasks();
  if (!tasks.length) {
    console.log("Nenhum registro encontrado")
    return;
  }
  tasks.forEach((task) => {
    console.log(`${task.id}. ${task.name}`);
  });
}
