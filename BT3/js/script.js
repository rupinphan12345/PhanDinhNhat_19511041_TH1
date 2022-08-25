$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        dataType: 'jsonp',
        success: function(data) {
            console.log(data);
            let htmlPosts = "";
            data.map((post) => {
                htmlPosts = htmlPosts + `
                    <li>
                        <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox"> ${post.title} <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                    </li>
                `
            })

            $("#posts").append(htmlPosts)
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });

});

const btnAdd = document.getElementById("btnAdd")


const addPost = (inputValue) => {
    const body = {
        title: inputValue,
        body: "fwfe"
    }
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: "POST",
        data: JSON.stringify(body),
        dataType: 'json',
        success: function(response) {
            console.log("success");
        },
        error: function(error) {
            console.log("Something went wrong", error);
        }
    });

}
btnAdd.onclick = () => {
    let inputValue = $("#inputTitle").val();
    addPost(inputValue);
}