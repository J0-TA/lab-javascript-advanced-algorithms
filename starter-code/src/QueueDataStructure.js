class QueueDataStructure {
    constructor() {
        this.queueControl = [];
        this.MAX_SIZE = 8;
    }
    isEmpty() {
        if (this.queueControl.length === undefined || this.queueControl.length === 0) {
            return true;
        }
        return false;
    }
    canEnqueue() {
        if (this.queueControl.length < this.MAX_SIZE) {
            return true;
        }
        return false;
    }
    enqueue(queue) {
        if (this.canEnqueue(queue) === true) {
            this.queueControl.unshift(queue)
            return this.queueControl
        }
        return 'Queue Overflow'
    }
    dequeue(queue) {
        if (this.isEmpty(queue) === true) {
            return 'Queue Underflow'
        }
        return this.queueControl.shift(queue)
    }
}