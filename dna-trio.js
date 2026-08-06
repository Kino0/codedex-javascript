const dnaPieces = ["A", "C", "G", "T"];
let myDNA =[]

for (let i = 0; i < 24; i++) {
    
    let stringJoin = [];
    
    for (let j = 0; j < 3; j++){
      let randomIndex = Math.floor(Math.random() * dnaPieces.length);
      stringJoin.push(dnaPieces[randomIndex])
    }

    myDNA.push(stringJoin.join(''));
}

for (let i = 0; i < myDNA.length; i += 4){
  let sliceDNA = myDNA.slice(i, i + 4)
  console.log(sliceDNA)
}


/*

// Explicação do código por partes //

* Neste exercício teremos 2 arrays sendo 1 deles com tamanho (4) de índices (0 ~ 3) e outro vazio inicialmente que criamos
* O primeiro laço for que tem um alcance de 0 ~ 24, executa o laço interno 24 vezes (requesito do exercício)
* O laço interno a ele tem a função de armazenar numa variável temporária a execução do Math.floor()
* O Math.floor() vai gerar 3 números aleatorios dentro de um alcance de 0 ~ 3 que corresponde ao tamanho do array,
* no qual esta sendo operado esse for: dnaPieces = ["A", "C", "G", "T"]
* O exercício requer que a exibição em console seja com dados juntos e ñ separados, ex: ["ACT"],["CTA"],["ATC"] * 24
* Dessa forma se faz uso do método slice(), para isso é armazenado os 3 números gerados em outro array temporario chamado stringJoin
* Como queremos que seja exibido 3 letras e não 3 números que o Math.random gerar, damos um push(dnaPieces[randomIndex]) no stringJoin
* Essa ação faz com que o stringJoin agora contenha 3 letras aleatórias com base no array original dnaPieces
* Nessa parte do código dnaPieces[randomIndex], estamos acessando os itens dentro do array dnaPieces por meio de seus índices,
* sendo esses índices o valor armazenado em randomIndex no qual atualmente são 3 números aleatórios gerados por Math.random()
* Agora com as 3 letras aleatórias em stringJoin[], podemos executar o método slice() diretaamente nele: stringJoin.join('')
* Fazendo com que as letras se juntem na string e depois damos um push() dessa informações no array que criamos vazio: myDNA.push(stringJoin.join(''));
* Com todas essas alterações feitas, ainda tem o problema da exibição requerida no exercício que requer que sejam exibidos 4 pares por linhas, ex:
* 'GAA', 'GCC', 'TCA', 'CCA',
* 'GGT', 'GGC', 'TGG', 'GTC',
* Da forma que fizemos até o momento, são exibidos todos na mesma linha: 'GAA', 'GCC', 'TCA', 'CCA', 'GGT', 'GGC', 'TGG', 'GTC',
* Para resolver este problema precisamos de u outro laço de repetição que vai pegar o myDNA[] e exibir ele no console em pares de 4 pulando linhas
* Nosso último for pega o tamanho total de myDNA[] que são 24 elementos de uma string com 3 letras aleatórias cada: 'TCA' * 24,
* fazendo com que o for execute de 0 ~ o tamanho do myDNA[], logo após ele incrementa dessa forma em cada execução: i += 4
* Em vez de i++ (i = i + 1) nós fazemos com que ele pegue o valor atual de i e some + 4 (pulando de 4 em 4 casas)
* Após definir o alcance e incremento do laço for, executamos o método slice() passando de quanto a quanto quremos o corte:
* A execução slice(i, i + 4) é feita em myDNA (myDNA.slice(i, i + 4)) e armazenamos o resultado disso numa variável sliceDNA
* Fazendo a impressão de sliceDNA no console, temos o resultado requerido no exercício com a formatação de dados solicitada

*/