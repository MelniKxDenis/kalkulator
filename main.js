send.addEventListener("click",calc);
function calc(){
    let val_c = c.value;
    let val_i = i.value;
    let val_g = g.value;
    let val_xn = xn.value;
    let val_result;
    val_result = parseInt(val_c) + parseInt(val_i) + parseInt(val_g) + parseInt(val_xn);
    result.innerHTML = val_result;
}