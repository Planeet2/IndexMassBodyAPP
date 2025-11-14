function calcImt(){
    const heightInput = document.getElementById("height").value;
    const weightInput = document.getElementById("weight").value;
    const result = document.getElementById("result");

    const height = parseFloat(heightInput);
    const weight = parseFloat(weightInput);

    if(!height || !weight || height <= 0 || weight <= 0){
        result.textContent = "Пожалуйста введите данные";
        result.style.color = "red";
        return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);

    let category = "";

    if(bmi < 18.5){
        category = "Недовес";
        result.style.color = "#ffa726";
    } else if(bmi < 24.9){
        category = "Нормально";
        result.style.color = "#66bb6a";
    } else if(bmi < 29.9){
        category = "Перевес";
        result.style.color = "#ffca28";
    } else{
        category = "Ожиренье";
        result.style.color = "#ef5350";
    }

    result.textContent = `Твой ИМТ ${bmi} (${category})`;
}

