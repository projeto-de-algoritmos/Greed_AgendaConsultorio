// minHeap.js

export class MinHeap {
    constructor() {
        this.heapArray = [];
        /* inicia como uma matriz vazia 
        que vai armazenar os elementos do heap. */
    }
    
    // update(obj) {
    //     const find = this.heapArray.findIndex((element) => element.noAtual === obj.noAtual);
    //     // procura um elemento no heap com base no valor de 'noAtual' dentro do objeto.
    //     this.heapArray[find] = obj;
    //     // e o atualiza com um novo objeto
    //     this.shiftUp(find);
    // }

    shiftUp(i) {
        if (i === 0) return;
        // se o nó atual 'i' for raiz, não é necessário fazer nada
    
        if (this.heapArray[i].horaFim < this.heapArray[this.parent(i)].horaFim) {
            this.swap(i, this.parent(i));
            // se o peso do nó atual for menor que o peso do nó pai, troca os dois nós
            this.shiftUp(this.parent(i));
            // chama recursivamente 'shiftUp' com o índice do nó pai
        }
    }
    
    push(obj) { //adicionar um novo elemento
        const len = this.heapArray.push(obj);
        // insere o novo objeto no final da matriz 'heapArray'
        if (len === 1) return;
        // se o comprimento for 1 = heap vazio, não é necessário fazer nada
        this.shiftUp(len - 1);
        // caso não for 1, chama a função 'shiftUp' com o índice do último elemento inserido para manter a propriedade do heap
    }
    
    peek() { //retornar o elemento de maior prioridade
        return this.heapArray[0];
    }

    pop() { //remover e retornar um elemento específico de uma estrutura 
        if (this.heapArray.length === 0) return null;
        // se o heap está vazio, retorna 'null'
        if (this.heapArray.length === 1) return this.heapArray.pop();
        // se o heap tiver apenas um elemento, retorna esse elemento.

    
        const len = this.heapArray.length;
        const raiz = 0;
        const last = len - 1;
        // define os índices da raiz e do último elemento do heap.

        this.swap(raiz, last);
        // troca a raiz com o último elemento.
        const min = this.heapArray.pop();
        // armazena o último elemento (anterior da raiz) da matriz
        this.heapify(raiz);
        return min;
        // retorna o elemento removido, que é o menor elemento do heap.
    }
    
    
    heapify(i) {
        const len = this.heapArray.length;
        const left = this.left(i);
        const right = this.right(i);
        // obter os índices dos nós filho esquerdo e filho direito do nó atual

        let smallest = i;
        // inicializa o índice do menor como o índice do nó atual

        if (left < len && this.heapArray[left].horaFim < this.heapArray[smallest].horaFim) {
            smallest = left;
            // se o nó filho esquerdo existir e tiver um peso menor que o nó atual, atualiza o índice do menor
        }
        if (right < len && this.heapArray[right].horaFim < this.heapArray[smallest].horaFim) {
            smallest = right;
            // se o nó filho direito existir e tiver um peso menor que o menor até agora, atualiza o índice do menor
        }
    
        if (smallest !== i) {
            this.swap(i, smallest);
            // se o índice do menor não for o mesmo que o índice atual, troca os nós
            this.heapify(smallest);
        }
    }
    
    swap(a, b) {
        const temp = this.heapArray[a];
        this.heapArray[a] = this.heapArray[b];
        this.heapArray[b] = temp;
    }
    
    parent(i) {
        //calcula o índice do nó pai de um nó com o índice i no heap
        return Math.floor((i - 1) / 2);
    }
    
    left(i) {
        //calcula o índice do nó filho esquerdo de um nó com o índice i no heap
        return 2 * i + 1;
    }
    
    right(i) {
        //calcula o índice do nó filho direito de um nó com o índice i no heap. 
        return 2 * i + 2;
    }
}
  