let fazer = ()=>{
    let promise = new Promise((resolve, reject)=>{

        console.log('Aguarde...');

        setTimeout(()=>{
            resolve('OK')
        }, 3000);

    });

    return promise;
};

fazer()
    .then((resposta)=>{
        console.clear();
        console.log(`Resposta: ${resposta}`);
    });