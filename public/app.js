function getnumber(num){
    var result = document.getElementById("result");
    result.value += num;
}

function clearReasult(){
    var result = document.getElementById("result");
    result.value = "0"
}
function get_result(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
    console.log(result.value)
}