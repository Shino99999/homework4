function changeString() {
    var send_string = document.getElementById("#caption_input");
    var new_string = document.getElementById("#string");

    new_string.innerText = send_string.value;
}