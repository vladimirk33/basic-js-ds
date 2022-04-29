const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

    constructor() {
        this.rootTree = null;
    }

    root() {
        return this.rootTree;
    }

    add(data) {
        if (!this.rootTree) {
            this.rootTree = new Node(data);
        } else {
            let node = this.rootTree;
            let last = node;
            while (node) {
                last = node;
                if (data < node.data) {
                    node = node.left;
                } else {
                    node = node.right;
                }
            }
            if (data < last.data) {
                last.left = new Node(data);
            } else {
                last.right = new Node(data);
            }
        }
    }

    has(data) {
        if (this.find(data)) {
          return true;
        }
        return false;
    }

    find(data) {
        let node = this.rootTree;
        while (node) {
            if (node.data === data) return node;
            if (data < node.data) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
        return null;
    }

    remove( /* data */ ) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    min(node = this.rootTree) {
        let min = node.data;
        while (node) {
            min = node.data;
            node = node.left;
        }
        return min;
    }

    max(node = this.rootTree) {
        let max = node.data;
        while (node) {
            max = node.data;
            node = node.right;
        }
        return max;
    }
}

module.exports = {
    BinarySearchTree
};