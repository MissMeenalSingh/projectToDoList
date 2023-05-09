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

    var taskJson = { title: inputNewTask.val(), taskDone: false };
    let liTask = $('<li>',{
        'class' : 'list-group-item '+className,
        'id' : count,
        text    : taskJson.title
    }).data("json-data", taskJson);

    liTask.click((e) => {
        var id = $(e.target).attr("id");
        var taskJson = $('#'+id).data("json-data")
        if (taskJson.taskDone) taskJson.taskDone = false
        else taskJson.taskDone = true
        disableEnableSortCleanup()
        liTask.toggleClass("done")
    })

    ulTasks.append(liTask)
    inputNewTask.val('')
    disableEnable(inputNewTask.val() != '')
}

function disableEnable(enable) {
    if(enable) {
        btnClearTask.prop('disabled' , false)
        btnAddTask.prop('disabled' , false)
    } else {
        btnClearTask.prop('disabled' , true)
        btnAddTask.prop('disabled' , true)
    }
}

function disableEnableSortCleanup() {
    var enable = false
    $('ul li').each(function() {
        var liId = $(this).attr("id");
        var taskJson = $('#'+liId).data("json-data")
        if (taskJson.taskDone) enable = true
      })
    if(enable) {
        btnCleanupTask.prop('disabled' , false)
        btnSortTask.prop('disabled' , false)
    } else {
        btnCleanupTask.prop('disabled' , true)
        btnSortTask.prop('disabled' , true)
    }
}

btnAddTask.click(addItem)

btnClearTask.click(() => {
    inputNewTask.val('')
    disableEnable(inputNewTask.val() != '')

})

inputNewTask.keypress((e) => {
    if(e.which == 13 && inputNewTask.val() != '') addItem()
    disableEnable(inputNewTask.val() != '')
})

btnCleanupTask.click(() => {
    $('#ulTasks .done').remove()
})

btnSortTask.click(() => {
    $('#ulTasks .done').appendTo(ulTasks)
})

inputNewTask.on('input', () => {
    disableEnable(inputNewTask.val() != '')
})
