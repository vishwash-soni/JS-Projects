let userInput = document.getElementById("date");
let output = document.getElementById("output");
let resetBtn = document.getElementById("reset");
console.log(userInput);
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge(){
    if (!userInput.value) {
        output.innerHTML = '<span style="color: red;">Please select your Date of Birth.</span>';
        return;
    }

    let bithDate = new Date(userInput.value)
    
    let d1 = bithDate.getDate();
    let m1 = bithDate.getMonth()+1;
    let y1 = bithDate.getFullYear();

    let todayDate = new Date();

    let d2 = todayDate.getDate();
    let m2 = todayDate.getMonth()+1;
    let y2 = todayDate.getFullYear();

    let d3,m3,y3;

    y3 = y2-y1;

    if(m2 >= m1){
        m3 = m2-m1;
    }
    else{
        y3--;
        m3 = 12 + m2 -m1;
    }
    if(d2 >= d1){
        d3 = d2-d1;
    }
    else{
        m3--;
        d3 = getDateInTheMonth(y3,m3)+d2-d1;
    }
    if(m3<0){
        m3 = 1;
        y3--;
    }

    output.innerHTML = `Your age is <span>${y3}</span> years <span>${m3}</span> months and <span>${d3}</span> days`;
    console.log(d3,m3,y3);
}

function getDateInTheMonth(year,month){
    return new Date(year,month,0).getDate();
}

resetBtn.addEventListener("click", function() {
    userInput.value = '';
    output.innerHTML = '';
});