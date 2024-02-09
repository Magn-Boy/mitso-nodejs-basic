import { promises as fs } from 'fs';

const copy = async () => {
    const sourceDirectory = './files';
    const destinationDirectory = './files_copy';
    
    try {
        await fs.mkdir(destinationDirectory);
    } catch (error) {
        if (error.code !== 'File exists') throw new Error('FS operation failed');
    }

    let files;
    try {
        files = await fs.readdir(sourceDirectory);
    } catch (error) {
        throw new Error(`Failed to read source directory: ${error.message}`);
    }

    await Promise.all(files.map(async (file) => {
        const sourceFile = `${sourceDirectory}/${file}`;
        const destinationFile = `${destinationDirectory}/${file}`;

        console.log(`Copying file ${sourceFile} to ${destinationFile}`);

        try {
            await fs.copyFile(sourceFile, destinationFile);
            console.log(`File ${file} copied successfully`);
        } catch (error) {
            console.error(`Error copying file ${file}: ${error.message}`);
        }
    }));

    console.log('All files copied successfully');
};

try {
    await copy();
} catch (error) {
    console.error(error.message);
}

