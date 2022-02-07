let image = []; 
let input;
$(".add").click(function(){
input = $(".image-url").val();
image.push(".picture-url");
$(".gallery").append("<img src=" + input + ">");
$("input:text").val(" ");
});