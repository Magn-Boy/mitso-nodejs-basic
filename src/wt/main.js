import os from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
    const numCores = os.cpus().length;

    const results = [];

    const workers = Array.from({ length: numCores }, (_, index) => {
        const worker = new Worker('./worker.js', { workerData: 10 + index });

        worker.on('message', (message) => {
            results.push({ status: 'resolved', data: message });
        });

        worker.on('error', (error) => {
            results.push({ status: 'error', data: null });
        });

        return worker;
    });

    await Promise.all(workers.map(worker => new Promise((resolve) => {
        worker.on('exit', () => {
            resolve();
        });
    })));

    console.log(results);
};

await performCalculations();