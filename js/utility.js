let testData={
        gender:"Male",age:67.0,hypertension:0,illness:"stroke",
        heart_disease:1,ever_married:"Yes", work_type:"Private",
        Residence_type:"Urban",avg_glucose_level:228.69, 
        bmi:36.6,smoking_status:"formerly smoked"
    };
const strokeFields = `
                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="hypertension" class="col-form-label" >hypertension</label>
                        </div>
                        <div class="col-auto">
                        <select name="hypertension" id="hypertension" class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option value=1>Yes</option>
                            <option value=0>No</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="glucose" class="col-form-label" >Glucose Level</label>
                        </div>
                        <div class="col-auto">
                        <input name="avg_glucose_level" value=10 min="30" max="300" step="0.01 type="number" id="glucose" class="form-control" required>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="bmi" class="col-form-label" >BMI</label>
                        </div>
                        <div class="col-auto">
                        <input name="bmi" value=20 min="5" max="100" type="number" id="bmi" class="form-control" required>
                        </div>
                    </div>
		    <input id="illness" type="hidden" name="illness" value="stroke">

                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="heart_disease" class="col-form-label" >heart_disease</label>
                        </div>
                        <div class="col-auto">
                        <select name="heart_disease" id="heart_disease" class="form-select form-select-sm" aria-label=".form-select-sm example" required>
                            <option value=1>Yes</option>
                            <option value=0>No</option>
                            </select>
                        </div>
                    </div>
                    `
const hyperFields = ` <input id="illness" type="hidden" name="illness" value="hypertension">
                        <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="glucose" class="col-form-label" >Glucose Level</label>
                        </div>
                        <div class="col-auto">
                        <input name="avg_glucose_level" value=10 min="30" max="300" step="0.01 type="number" id="glucose" class="form-control" required>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="bmi" class="col-form-label" >BMI</label>
                        </div>
                        <div class="col-auto">
                        <input name="bmi" value=20 min="5" max="100" type="number" id="bmi" class="form-control" required>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="heart_disease" class="col-form-label" >heart_disease</label>
                        </div>
                        <div class="col-auto">
                        <select name="heart_disease" id="heart_disease" class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option value=1>Yes</option>
                            <option value=0>No</option>
                            </select>
                        </div>
                    </div>
                    `
const bmiFields = ` <input id="illness" type="hidden" name="illness" value="bmi">

                    <div class="col-sm-4">
                    <div class="col-auto">
                    <label for="hypertension" class="col-form-label" >hypertension</label>
                    </div>
                    <div class="col-auto">
                    <select name="hypertension" id="hypertension" class="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option value=1>Yes</option>
                        <option value=0>No</option>
                        </select>
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="col-auto">
                    <label for="glucose" class="col-form-label" >Glucose Level</label>
                    </div>
                    <div class="col-auto">
                    <input name="avg_glucose_level" value=10 min="30" max="300" step="0.01 type="number" id="glucose" class="form-control" required>
                    </div>
                    </div>
    
                    <div class="col-sm-4">
                    <div class="col-auto">
                    <label for="heart_disease" class="col-form-label" >heart_disease</label>
                    </div>
                    <div class="col-auto">
                    <select name="heart_disease" id="heart_disease" class="form-select form-select-sm" aria-label=".form-select-sm example" required>
                        <option value=1>Yes</option>
                        <option value=0>No</option>
                        </select>
                    </div>
                    </div>
                    `

const glucoseFields = `<input id="illness" type="hidden" name="illness" value="glucose">
                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="heart_disease" class="col-form-label" >heart_disease</label>
                        </div>
                        <div class="col-auto">
                        <select name="heart_disease" id="heart_disease" class="form-select form-select-sm" aria-label="form-select-sm example">
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="bmi" class="col-form-label" >BMI</label>
                        </div>
                        <div class="col-auto">
                        <input name="bmi" value=20 min="5" max="100" type="number" id="bmi" class="form-control" required>
                        </div>
                    </div>
                    `

export const spinner = ` <div class="spinner-border text-primary" role="status">
                        </div>
                        `

export const printResult = function(name,value){
    let info = `<h3 class="fw-bolder text-uppercase">${name} Value: ${value}</h3>`
    return info
}
export function makeForm(otherField='stroke'){
    let addField = otherField=='stroke'? strokeFields:otherField=='hypertension'? hyperFields:otherField == "bmi"? bmiFields: glucoseFields;
    let commonFields = `</hr>
               <form id="userdata">
		     <div class="row g-3 align-items-center">
                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="age" class="col-form-label" >Age</label>
                        </div>
                        <div class="col-auto">
                        <input name="age" type="number" id="age" value="10" min="0.01" max="90" step="0.01" class="form-control" required>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="ever_married" class="col-form-label" >ever_married</label>
                        </div>
                        <div class="col-auto">
                            <select name="ever_married" class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="Residence-type" class="col-form-label" >Residence Type</label>
                        </div>
                        <div class="col-auto">
                            <select id="Residence_type" name="Residence_type" class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option value="Urban">Urban</option>
                            <option value="Rural">Rural</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="work_type" class="col-form-label" >work type</label>
                        </div>
                        <div class="col-auto">
                        <select id="work_type" name="work_type" class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option value="Private">Private</option>
                            <option value="Govt_job">Government</option>
                            <option value="children">Children</option>
                            <option value="Never_worked">Never Worked</option>
                            <option value="Self-employed">Self Employed</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="smoking_status" class="col-form-label" >Smoking Status</label>
                        </div>
                        <div class="col-auto">
                        <select name="smoking_status" class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option value="never smoked">never smoked</option>
                            <option value="formerly smoked">formerly smoked</option>
                            <option value="Unknown">Unknown</option>
                            <option value="smokes">smokes</option>
                            </select>
                        </div>
                    </div>
		    <div class="col-sm-4">
                        <div class="col-auto">
                        <label  for="gender" class="col-form-label" >Gender</label>
                        </div>
                        <div class="col-auto">
                            <select name="gender" class="form-select form-select-sm" aria-label="form-select-sm example">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>


                    ${addField}
                </div>

                <div class="row w-50 mt-2 align-items-center">
                    <input type="submit" class="btn btn-primary" value="Get Prediction">
                </div>
		</form>
                    `
return commonFields;
}