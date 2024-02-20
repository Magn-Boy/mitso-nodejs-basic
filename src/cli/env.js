const parseEnv = () => {
    const mitsoVariables = Object.entries(process.env)
    .filter(([key]) => key.startsWith('MITSO_'))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');
    console.log(mitsoVariables); 
};

parseEnv();