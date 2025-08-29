// Add input element inside form, before button, to take fruit description
const input = document.createElement('input');
const form = document.querySelector('form');
const submitBtn = document.querySelector('button[type="submit"]');
input.id = 'description';

form.insertBefore(input, submitBtn);

const fruits = document.querySelector('.fruits');
const div = document.querySelectorAll('div');
const addInput = document.querySelector('#fruit-to-add')


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newFruit = document.createTextNode(addInput.value);
    const para = document.createElement('p');
    para.style.fontStyle = 'italic';
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'delete';
    para.append(document.createTextNode(input.value));
    const li = document.createElement('li');
    li.className = 'fruit';
    li.appendChild(newFruit);
    li.append(para);
    li.appendChild(deleteButton);
    fruits.appendChild(li);
});
fruits.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn'))
        e.target.parentElement.remove();   
})



// Show the fruit description in italics on the next line


// Create a filter that shows only those fruits whose either name or description or both matches the entered text

const filter = document.querySelector('#filter');

filter.addEventListener('keyup', function (e) {
    const filterText = e.target.value;

    
    const fruits = document.querySelectorAll('.fruit');
    // for (let i = 0; i < fruits.length; i++)
    fruits.forEach((fruit)=>
    {
        if (fruit.firstElementChild.style.fontStyle === 'italic') fruit.firstElementChild.style.fontStyle = 'normal';
        const descrValalue = fruit.firstElementChild.textContent.toLowerCase();
        const item = fruit.firstChild.textContent.toLowerCase();
        if (item.indexOf(filterText) === -1 && descrValalue.indexOf(filterText) === -1 )
        {
            fruit.style.display = 'none';
        }
        else {
            fruit.style.display = 'flex';
        }
    })
})