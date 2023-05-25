var gamePattern=[];
var arr=["red","blue","green","yellow"];
function nextSequence(){
    var randomNumber=Math.floor((Math.random()*4));
    return randomNumber;

}
var i=-1;
$(document).on("keydown",function(){
    var randomChosenColour=nextSequence();
    gamePattern=[];
    var a=arr[randomChosenColour];
    gamePattern.push(a);
    $("h1").text("Level 1");
    var audi= new Audio("./sounds/"+a+".mp3");
    audi.play();
    $("#"+a).fadeOut(100).fadeIn(100);
   
     i=-1;
   
});

var done=false;
$(".btn").on("click",function(){
        
       var gotid= $(this).attr("id");
       i=i+1;
       
       var aud = new Audio("./sounds/"+gotid+".mp3");
       if(correct(i,gotid)){
        $("#"+gotid).addClass("pressed");
        setTimeout(function(){
            $("#"+gotid).removeClass("pressed");},100);
            
        aud.play();
        if(i===gamePattern.length-1){
            
            $("h1").text("Level "+(i+2));
            var randomChosenColour=nextSequence();
            var a=arr[randomChosenColour];
            gamePattern.push(a);
            i=-1;
           
            var audi= new Audio("./sounds/"+a+".mp3");
            audi.play();
            $("#"+a).fadeOut(100).fadeIn(100);
            
        
        }
   
       }
       else if(!correct(i,gotid) || done===true){
        var aud = new Audio("./sounds/wrong.mp3");
        aud.play();
        $("h1").text("Game Over, Press any key to restart ");
        done=true;
        $("body").css("backgroundColor","red");
        gamePattern=[];
        setTimeout(function(){
        $("body").css("backgroundColor","#011F3F");},1000);
        }
       
       
    });
function correct( i,gotid){
    if(gamePattern[i]===gotid){
        
        return true;
    }
    else{
       
        return false;
    }
}

