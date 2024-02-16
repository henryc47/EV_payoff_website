function revealMessage()
{
    document.getElementById("hiddenMessage").style.display = 'block';
}
function countDown()
{
    var currentVal = document.getElementById("countDownButton").innerHTML;
    if (currentVal>0)
    {
        newVal = currentVal - 1;
    }
    if (newVal==0)
    {
        newVal = "Time for a cruise"
    }
    document.getElementById("countDownButton").innerHTML = newVal;
}