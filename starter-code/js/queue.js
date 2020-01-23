let queue = new QueueDataStructure ()

let queueInput = document.querySelector(`.queuesColum input`);
let queueAddBtn = document.getElementById(`qdadd`).addEventListener(`click`, addItem);
let stackTakeBtn = document.getElementById(`qdtake`).addEventListener(`click`, removeItem);

function addItem(){
    let emptyQueues = document.querySelectorAll(`.queue`);
    console.log(emptyStacks)
    if(stack.canPush()){
        stackValue = stackInput.value;
        emptyStacks[emptyStacks.length-1].innerHTML = stackValue;
        emptyStacks[emptyStacks.length-1].classList.remove(`empty`);
        emptyStacks[emptyStacks.length-1].classList.add(`full`);
        stack.push(stackValue);
    } else window.alert(`Stack Overflow!`)
}

function removeItem(){
    fullStacks = document.querySelectorAll(`.full`);
    if (stack.isEmpty()) {
        window.alert(`Oops! You can't remove anything!`)
    } else {
        fullStacks[0].innerHTML="";
        fullStacks[0].classList.remove(`full`);
        fullStacks[0].classList.add(`empty`)
        stack.pop();
    }
}