function about(){
    alert("This is a website which helps you to replace the one text with another text in paragraph.")
}

function replace(){
    // find and replace input fields
    var find = document.getElementById("find-text").value;
    var replace = document.getElementById("replace-text").value;

    //input-textarea
    var oldText = document.getElementById("Input-TextArea").value;
    oldText = oldText.replaceAll(find, replace);

    // put the all replaces text in Output-TextArea
    document.getElementById("Output-TextArea").value = oldText;

    
}