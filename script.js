const addItemBtnEl = document.getElementById('add-item-btn');
const itemInputEl = document.getElementById('item-content-input');
const listEl = document.getElementById('todo-list');
const onItemDelete = evt => {
    evt.target.parentElement.remove();
}
const onAddItemClick = () => {
    const itemValue = itemInputEl.value;
    if (!itemValue) return;

    const liEl = document.createElement('li');
    // liEl.innerText = itemValue;
    liEl.innerHTML = `<span>${itemValue}</span> <button onClick="onItemDelete(event)">delete</button>`
    listEl.append(liEl);
    itemInputEl.value = '';
};
const onSthClick = () => {
    console.log('clicked');
}

addItemBtnEl.addEventListener('click', onAddItemClick);
addItemBtnEl.addEventListener('click', onSthClick);

itemInputEl.addEventListener('keypress', (evt) => {
    if (evt.charCode ==13 && !evt.shiftKey){
        onAddItemClick();
    }
})
console.dir(addItemBtnEl);