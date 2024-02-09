import { promises as fs } from 'fs';

const rename = async () => {
    const sourceFile = './files/wrongFilename.txt';
    const destinationFile = './files/properFilename.md';

    try {
        await fs.access(sourceFile);
        await fs.access(destinationFile);
        throw new Error ('Файлы уже существуют');
    } catch (error) {
        if (error.code !== 'ENOENT') throw new Error ('FS operation failed');
    }

    try {
        await fs.rename(sourceFile, destinationFile);
        console.log('Файл успешно переименован');
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

rename().catch(error => console.error(error.message));