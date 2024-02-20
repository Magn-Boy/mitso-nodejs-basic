const parseArgs = () => {
    process.argv.slice(2).forEach((arg, index, arr) => {
        if (index % 2 === 0) {
            console.log(`${arg} is ${arr[index + 1]}`);
        }
    }); 
};

parseArgs();