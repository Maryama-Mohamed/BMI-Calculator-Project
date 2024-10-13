
const heightInput = document.getElementById("height");

const wightInput = document.getElementById("weight");

const calculateBtn = document.getElementById("calculateBtn");

const bmiValue = document.getElementById("bmiValue");

const bmiCategory = document.getElementById("bmiCategory");

const suggestion = document.getElementById("suggestion");

calculateBtn.addEventListener("click", () =>{

    const heightCm = parseFloat(heightInput.value);

    const weightKg = parseFloat(wightInput.value);
 
    if(isNaN(heightCm) || isNaN(weightKg) || heightCm <= 0 || weightKg <= 0){

        // alert("Invalid height and weight please enter a value");
        swal.fire({
            title: "Error",
            text: "please  enter a valid height and weight",
            icon: "error",
            confirmButtonText: "OK",
        })
        return;
    } 
    
    const heightM = heightCm /100;

    const bmi = (weightKg / (heightM * heightM)).toFixed(2);

    bmiValue.textContent = bmi;

    bmiCategory.textContent = getBmiCategory(bmi);
    suggestion.textContent = getSuggestion(bmi);
    
});

function getBmiCategory(bmi){
    if(bmi < 18.5){
        return "Under Weight";
    }else if(bmi >= 18.5 && bmi < 24.9){
        return "Normal Weight";
    }else if(bmi >= 25 && bmi < 29.9){
        return "Over Weight";
    }else{
        return "Obesity";
    }
}


function getSuggestion(bmi){
    if(bmi < 18.5){
        return "You are Under Weight. consider a balanced diet with more clorie intake";
    }else if(bmi >= 18.5 && bmi <= 24.9){
        return "Great Job! You Have a healthy weight. keep maintaining your balanced diet"
    }else if(bmi >= 25 && bmi < 29.9){
        return "You are slightly over weight. a balanced diet and regular exercise could help you keep your balanced"
    }else{
        return "You are in Obisity range. it is recommended to consult a healthycare provider for advice"
    }

}


