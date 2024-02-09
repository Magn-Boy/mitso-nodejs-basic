import { promises as fs } from 'fs'; 
const create = async () => {
    const filePath = './files/fresh.txt';
    const content = 'I am fresh and young\n';

    try {
        await fs.access(filePath);
        throw new Error('Файла не сущществует');
    } catch (error) {
        if (error.code !== 'ENOENT') throw error;
        await fs.writeFile(filePath, content);
        console.log('Файл создан')
    }
};

await create();