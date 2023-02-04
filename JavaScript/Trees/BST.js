class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.root === null) {
            const newNode = new Node;
            this.root = newNode;
            return this;
        }

        let temp = this.root;
        while (true) {
            if (newNode.value < temp.value){
                if (!temp.left) {
                   temp.left = newNode;
                   return newNode;
                }
                if (temp.left.value === newNode.value) return undefined;
                temp = temp.left;
            } else {
                if (!temp.right) {
                   temp.right = newNode;
                   return newNode;
                }
                if (temp.right.value === newNode.value) return undefined;
                temp = temp.right;
            }
        }
        
    }
}
