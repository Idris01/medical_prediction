let testData={
        gender:"Male",age:67.0,hypertension:0,illness:"stroke",
        heart_disease:1,ever_married:"Yes", work_type:"Private",
        Residence_type:"Urban",avg_glucose_level:228.69, 
        bmi:36.6,smoking_status:"formerly smoked"
    };
const strokeFields = `
                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="bmi" class="col-form-label" >BMI</label>
                        </div>
                        <div class="col-auto">
                        <input type="number" id="bmi" class="form-control" min=0.01 max=100 required>
                        </div>
                    </div>
		    <input type="hidden" name="illness" value="stroke">

                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="heart_disease" class="col-form-label" >heart_disease</label>
                        </div>
                        <div class="col-auto">
                        <select id="heart_disease" class="form-select form-select-sm" aria-label=".form-select-sm example" required>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    `
const hyperFields = ` <input type="hidden" name="illness" value="hypertension">

                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="heart_disease" class="col-form-label" >heart_disease</label>
                        </div>
                        <div class="col-auto">
                        <select id="heart_disease" class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    `
const bmiFields = ` <input type="hidden" name="illness" value="bmi">

                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="heart_disease" class="col-form-label" >heart_disease</label>
                        </div>
                        <div class="col-auto">
                        <select id="heart_disease" class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select>
                        </div>
                    </div>


                    `

const glucoseFields = ` <input type="hidden" name="illness" value="glucose">

                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="heart_disease" class="col-form-label" >heart_disease</label>
                        </div>
                        <div class="col-auto">
                        <select id="heart_disease" class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    `

export const spinner = ` <div class="spinner-border text-primary" role="status">
                        </div>
                        `

export const printResult = function(name,value){
    let info = `<h3>${name.toUpper()} Value: ${value}</h3>`
}
export function makeForm(otherField='stroke'){
    let addField = otherField=='stroke'? strokeFields:otherField=='hypertension'? hyperFields:otherField == "bmi"? bmiFields: glucoseFields;
    let commonFields = `</hr>
                <div class="row g-3 align-items-center">
                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="age" class="col-form-label" >Age</label>
                        </div>
                        <div class="col-auto">
                        <input type="number" id="age" class="form-control" required>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="ever_married" class="col-form-label" >ever_married</label>
                        </div>
                        <div class="col-auto">
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="Residence-Type" class="col-form-label" >Residence Type</label>
                        </div>
                        <div class="col-auto">
                            <select id="Residence-type" class="form-select form-select-sm" aria-label=".form-select-sm example">
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
                        <select id="work_type" class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option value="private">Private</option>
                            <option value="Government">Government</option>
                            <option value="Children">Children</option>
                            <option value="Never-worked">neverworked</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="smoking_status" class="col-form-label" >Smoking Status</label>
                        </div>
                        <div class="col-auto">
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option value="never smoked">never smoked</option>
                            <option value="formerly smoked">formerly smoked</option>
                            <option value="Unknown">Unknown</option>
                            <option value="smokes">smokes</option>
                            </select>
                        </div>
                    </div>
		    <div class="col-sm-4">
                        <div class="col-auto">
                        <label name="gender" for="gender" class="col-form-label" >Gender</label>
                        </div>
                        <div class="col-auto">
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
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
                    `
return commonFields;
}
