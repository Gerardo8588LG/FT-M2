
const [boton] = $("#boton");   // Hice destructuring
const [search] = $("#search");
const [deleteBtn] = $("#delete");
const url = "http://localhost:5000/amigos";

const listFriends = (response) => { 
    const[lista] = $("#lista"); 
    lista.innerText = "";

    response.forEach((friend) => {
       const newLi = document.createElement("li");
       newLi.innerText = friend.name;
       lista.appendChild(newLi); 
    });
}

const showFriends = () => {
    $("#lista").empty();
    $.get(url, listFriends)

}

const searchFriend = () => {
    const [input] = $("#input");
    const id = input.value; //Number
    input.value = "";

    $.get(`${url}/${id}`, (response) => {
const [amigo] = $("#amigo");
amigo.innerText = response.name;
    
});
}
const deleteFriend = () => {
    const [inputDelete] = $("#inputDelete");
    const id = inputDelete.value;
    inputDelete.value = "";

    $.ajax({
        type: "DELETE",
        url: `${url}/${id}`,
        success: (response) => { 
            listFriends(response)

            const [success] = $("#success");
            success.innerText = `Tu amigo de id: ${id} ha sido elimino con exito`
        }
    })
}

boton.addEventListener("click", showFriends);
search.addEventListener("click", searchFriend);
deleteBtn.addEventListener("click", deleteFriend);