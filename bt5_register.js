
function test(){
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var address=document.getElementById("address").value;
    var telephone=document.getElementById("telephone").value;
    var password=document.getElementById("password").value;
    var password1=document.getElementById("password1").value;
    if(fname==""|| lname=="" ||address==""||telephone==""||password==""||password1==""){
        alert("Điền đầy đủ các chỗ trống");
    }
    if( password!=password1){
        alert("Mật khẩu nhập lại phải trùng với mật khẩu trước đó !");
    }
}