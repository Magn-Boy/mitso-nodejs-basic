import { error } from 'console';
import { promises as fs } from 'fs';

const read = async () => {
    const fileToRead = './files/fileToRead.txt';
    try {
        await fs.access(fileToRead);
    } catch (error){
        throw new Error('FS operation failed');
    }

    try {
        const content = await fs.readFile(fileToRead, 'utf-8');
        console.log('Содержимое файла:');
        console.log(content);
    }catch (error) {
        console.log('Ошибка при чтении файла: ${error.message}')
    }
};

read().catch(error => console.error(error.message));