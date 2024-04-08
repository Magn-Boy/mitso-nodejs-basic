import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
    const gzipStream = fs.createReadStream('archive.gz');
    const decompressStream = zlib.createGunzip();
    const writeStream = fs.createWriteStream('./files/fileToCompress.txt', { flags: 'a' });

    gzipStream.pipe(decompressStream).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('Decompression completed');
    });

    writeStream.on('error', (error) => {
        console.error(`Error writing decompressed file: ${error.message}`);
    });
};

await decompress();