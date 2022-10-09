import {makeForm,spinner,printResult} from "/js/utility.js";

document.addEventListener('DOMContentLoaded', ()=>{
   document.getElementById("userdata").onsubmit = async function(e){
	   e.preventDefault();
	   let userdata = new FormData(this);
	   await alert(userdata['illness']);
	   //makePrediction(userdata);
   }
 
    
    function plotBar(xValues,yValues,divItem){
        let data = [
            {
            x: xValues,
            y: yValues,
            type: 'bar'
            }
        ];
        
        Plotly.newPlot(divItem, data);
    }
        

    function get_form(condition="stroke"){
        return makeForm(condition);
    }

    let url = 'https://ml-app-idris01.koyeb.app/prediction';
    let testData={
        gender:"Male",age:67.0,hypertension:0,illness:"stroke",
        heart_disease:1,ever_married:"Yes", work_type:"Private",
        Residence_type:"Urban",avg_glucose_level:228.69, 
        bmi:36.6,smoking_status:"formerly smoked"
    };

    async function makePrediction(userdata,info=spinner){
        document.getElementById('result').innerHTML=info;
	document.getElementById('info').innerHTML=`please wait...`;
        let query = userdata['illness']
	await fetch(url,{
            method: 'POST',
            headers:{
                Accept: 'application.json',
                'Content-type': 'application/json'
            },
            body: userdata
        })
        .then(response=>response.json())
        .then(result =>{
            if (query == 'stroke' || query == 'hypertension'){
                let predictClass = result['prediction_class'];
                let negative = parseFloat(result['probability']['negative'])
                let positive = parseFloat(result['probability']['positive'])
                console.log(negative,positive);
                document.getElementById('result').innerHTML=``;
		document.getElementById('info').innerHTML=`The Model Predicted ${predictClass=='1'? "High":"Low"} Likelihood of ${query}`;
 
 
                plotBar(['negative','positive'],[negative, positive],'result');
            }
            else{
                let value = result['prediction'];
                result.innerHTML=printResult(query,value);
            }
        })

    }
    const statusButtons = document.querySelectorAll('input[name="healthStatus"]');
    for (const status of statusButtons) {
        status.addEventListener('change', function(e){
            if (this.checked) {
                let inputArea = document.getElementById("userdata");
                inputArea.innerHTML=get_form(this.value);
                //makePrediction(this.value);
            }
        })
        
    }

});
