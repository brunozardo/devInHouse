let todos = []
let option = prompt("Type what you want to do\nnew - Add a new item\ndelete - To remove an item from the list\nlist - List all the items\nquit - Quit app")
while (option !== "quit"){
    if (option == "new"){
        let newTodo = prompt("Type the Todo you want to add then press Enter\nTo go back type: back\nTo quit type: quit")
        todos.push(newTodo)
        console.log(`Done!, "${newTodo}" added to the list`)
    }else if (option == "list"){
        console.log("_____________V_YourList_V_____________")
        for (item of todos){
            console.log(`Number -> [${todos.indexOf(item)}] : ${item}`)
        }
        console.log("______________________________________")
    }else if (option == "delete"){
        let itemToDelete =  parseInt(prompt("Type the Number of the Item you want to delete"))
        if (!Number.isNaN(itemToDelete)){
              todos.splice(itemToDelete,1)
              console.log(`Item "${todos[itemToDelete++]}" was deleted with success!`)
        }
        else{
            console.log("Unknow item")
        }
    }else{
        console.log("Please type a valid option")
    }
    option = prompt(`Type what you want to do\nnew - Add a new item\ndelete - To remove an item from the list\nlist - List all the items\nquit - Quit app`)
}
console.log("Thanks!")