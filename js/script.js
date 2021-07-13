$("#ButtonPost").on("click", function(e){
    e.preventDefault();
    var div = document.createElement("div");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");
    
    checkbox.type = "checkbox";
    checkbox.name = "todo";

    label.textContent = $("#todoText").val();
    div.append(checkbox);
    div.append(label);
    $("#todoList").append(div);
    console.log("uwu");
})


$("#ButtonClear").on("click", () => {
    $("[name='todo']").each(function() {
        this.checked = false;
    })
})

$("#ButtonMark").on("click", () => {
    $("[name='todo']").each(function() {
        this.checked = true;
    })
})

$("#ButtonDelete").on("click", () => {
    $("#todoList").empty();
})