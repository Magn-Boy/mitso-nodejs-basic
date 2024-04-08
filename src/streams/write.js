import fs from 'fs';

const write = async () => {
    const writeStream = fs.createWriteStream('./files/fileToWrite.txt', { flags: 'a' });
    process.stdin.pipe(writeStream);
    console.log('Enter data to write to file (press Ctrl + D to finish):');
};

await write();