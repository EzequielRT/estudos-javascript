function addEndereco(endereco) {
    
    //Desconstruindo objeto
    const { cidade, estado } = endereco;
    
    //Objeto literal
    const novoEndereco = {
        cidade,
        estado,
        pais:'Brasil'
    }

    console.log(`${novoEndereco.cidade}, ${novoEndereco.estado}, ${novoEndereco.pais}`);
}

addEndereco({cidade:'Porto Alegre', estado:'Rio Grande do Sul'});

