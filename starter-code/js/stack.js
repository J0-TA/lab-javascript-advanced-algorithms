let stack = new StackDataStructure ()

let stackInput = document.querySelector(`.stacksColum input`);
let stackAddBtn = document.getElementById(`stkadd`).addEventListener(`click`, addStackItem);
let stackTakeBtn = document.getElementById(`stktake`).addEventListener(`click`, removeStackItem);

function addStackItem(){
    let emptyStacks = document.querySelectorAll(`.empty`);
    console.log(emptyStacks)
    if(stack.canPush()){
        stackValue = stackInput.value;
        emptyStacks[emptyStacks.length-1].innerHTML = stackValue;
        emptyStacks[emptyStacks.length-1].classList.remove(`empty`);
        emptyStacks[emptyStacks.length-1].classList.add(`full`);
        stack.push(stackValue);
    } else window.alert(`Stack Overflow!`)
}

function removeStackItem(){
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