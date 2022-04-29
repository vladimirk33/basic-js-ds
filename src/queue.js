const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

    constructor() {
        this.queue = null;
    }

    getUnderlyingList() {
        return this.queue;
    }

    enqueue(value) {
        const el = new ListNode(value);
        if (!this.queue) {
            this.queue = el;
        } else {
            let queue = this.queue;
            while (queue.next) {
                queue = queue.next;
            }
            queue.next = el;
        }
    }

    dequeue() {
        const el = this.queue.value;
        this.queue = this.queue.next;
        return el;
    }
}

module.exports = {
    Queue
};