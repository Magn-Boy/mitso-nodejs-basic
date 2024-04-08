import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
    const readStream = fs.createReadStream('./files/fileToCompress.txt');
    const writeStream = fs.createWriteStream('archive.gz');
    const gzip = zlib.createGzip();

    readStream.pipe(gzip).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('File compressed successfully');
    });

    writeStream.on('error', (error) => {
        console.error(`Error compressing file: ${error.message}`);
    });
};

await compress();