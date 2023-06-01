const correctAns = ['a','a'];
var ans = [];
var count = 0;
var one = document.getElementsByName("one");
function checkAnswers() {
    for(let i=0;i < one.length;i++)
    {
        if(one[i].checked == true)
        {
            ans[count] = one[i].value;
            count++;
        }
    }
    for(let j=0;j<ans.length;j++)
    {
        if(ans[j] === correctAns[j])
            alert("correct! "+ans[j])
    }
    ans = [];
}