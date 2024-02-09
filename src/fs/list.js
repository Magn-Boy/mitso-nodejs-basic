import { promises as fs } from 'fs';

const list = async () => {
    const directory = './files';

    try {
        await fs.access(directory);
    } catch (error) {
        throw new Error('Directory does not exist');
    }

    const files = await fs.readdir(directory);

    console.log('Список файлов в папке files:');
    files.forEach(file => {
        console.log(file);
    });
};

list().catch(error => console.error(error.message));