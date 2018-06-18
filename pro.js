//alert("welcome to your bank");
//var fn= prompt("enter the frst name");
//var ln= prompt("enter the lastname");
//var age= prompt("enter the age");
//var len= prompt("enter the hi8");
//if((fn[0]==ln[0])&&(age>20)&&(age<40)&&(len>150))
//{console.log("you are a spy");}

function sleepin(weekday,vacation) {
return(!weekday || vacation)
}
function monkey(asmile,bsmile)
{
  return(asmile && bsmile) || (!asmile && !bsmile)
}
function time(str,n)
{
  for (var i = 0; i < n; i++) {
     console.log(str * n);
}}
function lucky(a,b,c)
{
  if(a==13)
  {
    return 0;
  }
  if(b==13)
  {
    return a;
  }
  if(c==13)
  {
    return a+b;
  }
  else{
    return a+b+c;
  }
}
function police(speed,bd)
{
  if (bd) {
    speed-=5;

  }
  if(speed<=60){
  return 0;
}
else if(60<speed<=80){
  return 1;
}

else{
  return 2;}

}
