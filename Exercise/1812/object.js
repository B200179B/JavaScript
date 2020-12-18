$(document).ready(function(){
    var user= {};
    $("#form").submit(function(event){
        user.firstname=$("#first").val();
        user.secondname=$("#second").val();
        console.log(user);
    })
})