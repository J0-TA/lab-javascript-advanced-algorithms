let queue = new QueueDataStructure ()

let queueInput = document.querySelector(`.queuesColum input`);
let queueAddBtn = document.querySelector(`#qdadd`).addEventListener(`click`, addQueueItem);
let queueTakeBtn = document.querySelector(`#qdtake`).addEventListener(`click`, removeQueueItem);

function addQueueItem(){
    emptyQueues = document.querySelectorAll(`.queue`);
    fullQueues = document.querySelectorAll(`.full`)
    console.log(emptyQueues)
    if(queue.canEnqueue()){
        queueValue = queueInput.value;
        emptyQueues[emptyQueues.length - fullQueues.length].innerHTML = queueValue;
        emptyQueues[0].classList.remove(`empty`);
        emptyQueues[0].classList.add(`full`);
        queue.enqueue(queueValue);
    } else window.alert(`Queue Overflow!`)
}

function removeQueueItem(){
    fullQueues = document.querySelectorAll(`.full`);
    if (queue.isEmpty()) {
        window.alert(`Oops! You can't remove anything!`)
    } else {
        fullQueues[fullQueues.length-1].innerHTML="";
        fullQueues[fullQueues.length-1].classList.remove(`full`);
        fullQueues[fullQueues.length-1].classList.add(`empty`)
        stack.dequeue();
    }
}