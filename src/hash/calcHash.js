import { createReadStream } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
    const fileName = './files/fileToCalculateHashFor.txt';
    const hash = createHash('sha256');
    const stream = createReadStream(fileName);

    return new Promise((resolve, reject) => {
        stream.on('data', (chunk) => {
            hash.update(chunk);
        });

        stream.on('end', () => {
            const hashResult = hash.digest('hex');
            console.log(`SHA256 hash of ${fileName}: ${hashResult}`);
            resolve();
        });

        stream.on('error', (error) => {
            reject(error);
        });
    });
};

await calculateHash();