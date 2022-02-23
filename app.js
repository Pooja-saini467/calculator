let OutputScreen =document.getElementById("Output-Screen");

function display(num) {
    OutputScreen.value +=num;
}

function Calculate() {
    try{
        OutputScreen.value = eval(OutputScreen.value);
    }
    catch(error) {
        alert("Invalid")
    }
}

function Clear() {
    OutputScreen.value = "";
}

function del() {
    OutputScreen.value = OutputScreen.value.slice(0,-1);
}