// $(()=>{

// })

let inputNewTask = $('#inpNewTask')
let btnAddTask = $('#btnAddTask')
let btnClearTask = $('#btnClearTask')
let ulTasks = $('#ulTasks')
let btnCleanupTask = $('#btnCleanupTask')
let btnSortTask = $('#btnSortTask')
let count = 0


function addItem() {

    let className = 'list-group-item-light'
    if(count%2 == 0){
        className = 'list-group-item-light'
        count = count + 1 
    } else {
        className = 'list-group-item-dark'
        count = count + 1 
    }

    let liTask = $('<li>',{
        'class' : 'list-group-item '+className,
        text    : inputNewTask.val()
    })

    liTask.click(() => {
        liTask.toggleClass("done"); 
    })

    ulTasks.append(liTask)
    inputNewTask.val('')
}


btnAddTask.click(addItem)

btnClearTask.click(() => {
    inputNewTask.val('')
})

inputNewTask.keypress((e) => {
    if(e.which == 13) addItem()
})

btnCleanupTask.click(() => {
    $('#ulTasks .done').remove()
})

btnSortTask.click(() => {
    $('#ulTasks .done').appendTo(ulTasks)
})