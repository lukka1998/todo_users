async function getAlltodos(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(response.data);
    return response.data

}
async function getUsers(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.data);
    return response.data
}
async function main() {
    let todos = await getAlltodos();
    let users = await getUsers();
    renderhtml(todos ,users);
}
async function renderhtml(todos ,users ){
    let html = `
    <div class="item">
            <div class="left">
                <input type="checkbox">
                <p>Image</p>
                <p class = "title">Title</p>
            </div>
            <p>Email</p>
            <p>Adress</p>
            <p>zipcode</p>

            <p>Status</p>
            <p>Delete</p>
        </div>`
    for(let i = 0 ;i < 10; i++){
        html+=
        `<div class="item margin">
        <div class="left">
            <input type="checkbox">
            <img src="images/f1b9162386ccc9e2100b78f333fed351.png" alt="">
            <p>${todos[i].title}</p>
        </div>
        <p>${users[i].email}</p>
        <p>${users[i].address.street}</p>
        <p>${users[i].address.zipcode}</p>
        <p>${ todos[i].completed ? `<p class = "true">success<p>` : `<p class = "false">false<p>` }</p>
         <img class="button" src="images/trash-bin.png" alt="">
        
    </div>

        `

    }
document.querySelector(".main").innerHTML = html
}
main();
document.querySelector(".button").addEventListener("click" ,function(){
    document.querySelector(".item").style.display = "none"
} );
