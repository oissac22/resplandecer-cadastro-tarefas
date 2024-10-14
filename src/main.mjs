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
  menu();
  rl.question('Escolha uma opção: ', (option) => {
    switch (option) {
      case '1':
        console.clear();
        tasks.listTasks();
        showMenu();
        break;
      case '2':
        console.clear();
        rl.question('Digite o nome da tarefa: ', (taskName) => {
          tasks.addTask(taskName);
          showMenu();
        });
        break;
      case '3':
        console.clear();
        rl.question('Digite o nome da tarefa para remover: ', (taskName) => {
          tasks.removeTask(taskName);
          showMenu();
        });
        break;
      case '4':
        console.clear();
        rl.close();
        break;
      default:
        console.clear();
        console.log('Opção inválida.');
        showMenu();
        break;
    }
  });
}

showMenu();