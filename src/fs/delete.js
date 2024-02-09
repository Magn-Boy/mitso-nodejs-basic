import { promises as fs } from 'fs';

const remove = async () => {
    const fileToRemove = './files/fileToRemove.txt';

    try {
        await fs.access(fileToRemove);
    } catch (error) {
        throw new Error ('FS operation failed');
    }

    try {
        await fs.unlink(fileToRemove);
        console.log('Файл успешно удалён');
    } catch (error) {
        console.log(`Error deleting file: ${error.message}`);
    }
};

remove().catch(error => console.error(error.message));