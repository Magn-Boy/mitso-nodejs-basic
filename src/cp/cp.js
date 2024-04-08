import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', ['files/script.js', ...args], {
        stdio: ['pipe', 'pipe', 'inherit'] 
    });

    
    childProcess.stdout.on('data', (data) => {

        process.stdout.write(data);
    });

    
    process.stdin.pipe(childProcess.stdin);
};
const args = ['argument1', 'argument2', 'argument3'];
// Put your arguments in function call to test this functionality
spawnChildProcess(args);
