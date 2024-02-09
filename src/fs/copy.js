import { promises as fs } from 'fs';
// Закончить асинхронную функцию, ошибка не известная, узнать почему не копируются файлы с одного католога в другой
const copy = async () => {
    const sourceDirectory = './files';
    const destinationDirectory = './files_copy';
    
    try {
        await fs.access(sourceDirectory);
        await fs.access(destinationDirectory);
        throw new Error('Каталоги уже существуют');
    } catch (error) {
        if (error.code !== 'ENOENT') throw new Error ('FS operation failed')
    }

    await fs.mkdir(destinationDirectory);
    const files = await fs.readdir(sourceDirectory);

    await Promise.all(files.map( async (file) => {
        const sourceFile = '${sourceDirectory}/${file}';
        const destinationFile = '${destinationDirectory}/${file}';
        await fs.copyFile(sourceFile, destinationFile);
    })); 
    console.log('Все файлы скопированы успешно');

    try {
        await copy();
    } catch (error) {
        console.error(error.message);
    }
};

