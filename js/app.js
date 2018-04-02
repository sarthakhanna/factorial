document.getElementById("bt").addEventListener("click",factorial);
var fact=1;
function factorial()
{
    var i;
    var n=document.getElementById("t1").value;
    if(n>1)
    {
        for(i=n; i>0;i--)
           fact*=i; 
    }
    else
        fact=1;
    

document.getElementById("answer").value= fact;
}