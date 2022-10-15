document.addEventListener("DOMContentLoaded", () => {
    // your code here
    const form = document.getElementById('create-task-form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const newTask = e.target.new_task_description.value
        buildToDo(newTask)
        const highPriority = document.getElementsByClassName('high priority')
        const mediumPriority = document.getElementsByClassName('medium priority')
        const lowPriority = document.getElementsByClassName('low priority')


        // const ul = document.querySelector('ul')
        // for (let item of ul.childNodes) {
        //     if (item.className === 'high priority') {
        //         ul.appendChild(item)
        //     } else if (item.className === 'medium priority') {
        //         ul.appendChild(item)
        //     } else if(item.className === 'low priority'){
        //         ul.appendChild(item)
        //     }
        // }


        for (let item of highPriority) {
            item.addEventListener('click', e => console.log(e.target.parentNode.remove()))
        }
        for (let item of mediumPriority) {
            item.addEventListener('click', e => console.log(e.target.parentNode.remove()))
        }
        for (let item of lowPriority) {
            item.addEventListener('click', e => console.log(e.target.parentNode.remove()))
        }

    })


});

function buildToDo(toDo) {
    const li = document.createElement('li')

    const priority = document.getElementById('select')
    const index = priority.selectedIndex
    const priorityText = priority.options[index].text

    if (priorityText === "high priority") {
        li.className = 'high priority'
        li.style.backgroundColor = 'red'
    } else if (priorityText === 'medium priority') {
        li.className = 'medium priority'
        li.style.backgroundColor = 'yellow'
    } else {
        li.className = 'low priority'
        li.style.backgroundColor = 'green'
    }

    li.textContent = `${toDo}  ${priorityText}  `
    li.style.listStyle = 'none'
    const btn = document.createElement('button')
    btn.textContent = 'x'
    li.appendChild(btn)
    const ul = document.querySelector('ul')
    ul.appendChild(li)
    // const ulHidden=document.createElement('ul')
    // ulHidden.append(li)
    // for (item of ulHidden.childNodes){
    //     console.log(item)
    //     if (item.className==='high priority'){
    //         ul.appendChild(li)
    //     }else if (item.className==='medium priority'){
    //         ul.appendChild(li)
    //     }else if(item.className==='low priority'){
    //         ul.appendChild(li)
    //     }
    // }
}





