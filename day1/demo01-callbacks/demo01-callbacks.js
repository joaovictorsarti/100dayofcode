const fs = require('fs')
// fs.readFile('./arq.txt', (error, resposta ) => {
//     if(error){
//         console.error('Deu ruim', error.stack)
//         return;
//     }
//     console.log('resposta', resposta.toString())
// })

fs.readFile('./arq.txt', (errorArq, respostaArq) => {
    if (errorArq) {
        console.error('Deu ruim no arq1', errorArq)
        return;
    }
    fs.readFile('./arq2.txt', (errorArq2, respostaArq2) => {
        if (errorArq2) {
            console.error('Deu ruim  no arq2', errorArq2)
            return;
        }
        fs.readFile('./arq3.txt', (errorArq3, respostaArq3) => {
            if (errorArq3) {
                console.error('Deu ruim no arq3', errorArq3)
                return;
            }
            const conteudo = `${respostaArq}\n${respostaArq2}\n${respostaArq3}`
            fs.writeFile('./final.txt', conteudo, (errorWrite, respostaWrite) => {
                if(errorWrite){
                    console.error('Deu ruim na gravacao', errorWrite)
                    return;
                }
                console.log('Arquivo gravado com sucesso')
            })
        })
    })
})