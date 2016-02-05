var upcount= 0;   //keeps track of seconds for the upcounter
var downcount=0;  //keeps track of seconds for the downcounter
var upinterval=null; //variable to disable interval function
var downinterval=null;



function resetAll()   //function to handle reset button
{
  resetClickUp();
  resetClickDown();
}

function stopClickUp()  //function to handle stop button
{
    $(".up-start-button").attr("disabled",false);
  clearInterval(upinterval);

}

function stopClickDown()
{
      $(".down-start-button").attr("disabled",false);
    clearInterval(downinterval);
}

function startClickUp() //function to handle start button
{

  {

    var countVal=+$(".time-val").val();



    $(".up-progress").attr("max",countVal);

    $(".up-start-button").attr("disabled",true);  //disable start button once timer starts
    upinterval=setInterval(upcounter,1000);


  }


}
function startClickDown()
{


  var countVal=+$(".time-val").val();

  if( downcount==0)
    downcount= $(".time-val").val();


  $(".down-progress").attr("max",countVal);

  $(".down-start-button").attr("disabled",true);
  downinterval=setInterval(downcounter,1000);
}


function resetClickUp()
{

    $(".up-start-button").attr("disabled",false);
    $(".upcount").html("0 Days <br> 0 Hours<br> 0 Minutes <br> 0 Seconds");
    $('.up-progress').val(0);   //reset progress bar to zero
    upcount=0;
    clearInterval(upinterval);

}

function resetClickDown()
{
    $(".down-start-button").attr("disabled",false);
    $(".downcount").html("0 Days <br> 0 Hours<br> 0 Minutes <br> 0 Seconds");
    $('.down-progress').val(0);
    downcount=0;
    clearInterval(downinterval);
}

function upcounter()
{
  if(upcount<+$(".time-val").val())
  {
    upcount=upcount+1;    //increment 1 second everytime this function is called

    var myDate = secondsToString(upcount);
    $(".upcount").html(myDate);
    $('.up-progress').val(upcount);
  }
  else {
    clearInterval(upinterval);
  }

}

function downcounter()
{
  if(downcount>0)
  {
    downcount=downcount-1;

  var myDate = secondsToString(downcount);
    $(".downcount").html(myDate);
    $('.down-progress').val(downcount);
  }
  else {
      clearInterval(downinterval);
  }

}

function secondsToString(seconds)   //This function converts seconds to days hours minutes and seconds
{
var numdays = Math.floor(seconds / 86400);
var numhours = Math.floor((seconds % 86400) / 3600);
var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
var numseconds = ((seconds % 86400) % 3600) % 60;
return numdays + " Days <br> " + numhours + " Hours <br> " + numminutes + " Minutes <br> " + numseconds + " Seconds <br>";
}
