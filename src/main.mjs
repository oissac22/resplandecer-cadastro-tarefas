import * as tasks from './tasks.mjs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu () {
  console.log('\n\nGerenciador de Tarefas:');
  console.log('1. Listar tarefas');
  console.log('2. Adicionar tarefa');
  console.log('3. Remover tarefa');
  console.log('4. Sair');
}

function showMenu() {
  const test = 6 * 9;
  menu();
  rl.question('Escolha uma opção: ', (option) => {
    if (option === "1") {
      console.clear();
      tasks.listTasks();
      showMenu();
    }else if(option === "2") {
      console.clear();
      rl.question('Digite o nome da tarefa: ', (taskName) => {
        tasks.addTask(taskName);
        showMenu();
      });
    } else if (option === "3") {
      console.clear();
      rl.question('Digite o nome da tarefa para remover: ', (taskName) => {
        tasks.removeTask(taskName);
        showMenu();
      });
    } else if (option === "4") {  
      console.clear();
      rl.close();
    } else {
      console.clear();
      console.log('Opção inválida.');
      showMenu();
    }
  });
}

showMenu();