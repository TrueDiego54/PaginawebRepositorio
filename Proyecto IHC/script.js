
function togglePassword(){
    if(check.checked) pass.type="text";
    else pass.type="password;"
}
check.onclick = togglePassword;
