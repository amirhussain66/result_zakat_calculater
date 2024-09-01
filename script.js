function getRes() {
    let StudentTotalMarks = document.getElementById("TotalMarks").value;
    let StudentObtainMarks = document.getElementById("ObtainMarks").value
    let StudentName = document.getElementById("Name").value
    
    let res = (StudentObtainMarks / StudentTotalMarks) * 100;

    document.getElementById("result").innerHTML = `The percentage of ${StudentName} Result is ${res} % `;

    // let grade="";
    if(res>=80){
        document.getElementById("Grade").innerHTML=`You have A+ Grade`
    }
    else if(res>=70){
        document.getElementById("Grade").innerHTML=`You have A Grade`
    }
    else if(res>=65){
        document.getElementById("Grade").innerHTML=`You have B Grade`
    }
   

}
function zakat() {

    const goldWeight = document.getElementById('TotalGold').value;
    const silverWeight = document.getElementById('TotalSilver').value;
    const moneyAmount = document.getElementById('Rupees').value;

    const ZAKAT_RATE = 0.025;

    let resultGold = '';
    const moneyZakat = moneyAmount * ZAKAT_RATE;

    if (goldWeight < 87) {
        result = 'No Zakat is required on gold as the weight is below 87 grams.';
    } else {
        const goldZakat = goldWeight * ZAKAT_RATE;
        resultGold =`Zakat on Gold: ${goldZakat.toFixed(2)} grams `

    }
    let resultsilver = '';
    if (silverWeight < 612) {
        resultSilver = 'No Zakat is required on silver as the weight is below 612 grams.';
    } else {
        const silverZakat = silverWeight * ZAKAT_RATE;
        resultSilver = `Zakat on Silver: ${silverZakat.toFixed(2)} grams`;
    }

    document.getElementById('resullt').innerHTML = ` ${resultGold} ,  ${resultSilver} 
    Zakat on Money: ${moneyZakat.toFixed(2)} Rupees`;
}
