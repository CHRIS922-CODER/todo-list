const input = document.getElementById('input');
const submit = document.getElementById('submit');
const container = document.querySelector('.container');
let state = false;


submit.addEventListener('click',(e)=>{
    let allItems = container.querySelectorAll('.list-items');
    e.preventDefault();
    let text = input.value;
    const listItems = document.createElement('div');
    listItems.classList.add('list-items');
    listItems.setAttribute('id',randomHexColor());
              listItems.innerHTML = text;
      listItems.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    listItems.remove();
       addToLS();
      });



            input.value = "";
          container.appendChild(listItems);
          addToLS();
        });

          const hideTask = document.querySelector('.hide-task');     
          hideTask.addEventListener('click', (e)=>{
                    e.preventDefault();
                    let allItems = container.querySelectorAll('.list-items');
                      
                      allItems.forEach((item)=>{
                          item.classList.toggle('hidden');
                      });
                      
          });

let getItems = localStorage.getItem('list');
console.log(getItems);

function addToLS(){
let id = randomHexColor();
let item = listItems.innerText;

localStorage.setItem(id,JSON.stringify(item));

}

// random hexColor function 
const colorValues = ['a','b','c','d','e','f',1,2,3,4,5,6,7,8,9];
function randomHexColor(){
    let color = '#';
    for(let i=0; i<6; i++){
        let random = colorValues[Math.floor(Math.random()*colorValues.length)];
         color+= random;
    }
    return color;
}