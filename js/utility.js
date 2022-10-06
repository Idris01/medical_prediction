const strokeFields = `
                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="bmi" class="col-form-label" >BMI</label>
                        </div>
                        <div class="col-auto">
                        <input type="number" id="bmi" class="form-control" min=0.01 max=100>
                        </div>
                    </div>

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
const hyperFields = `

                    `
const bmiFields = `

                    `
export function makeForm(otherField='stroke'){
    let addField = otherField=='stroke'? strokeFields:otherField=='stroke'? hyperFields:bmiFields
    let commonFields = `</hr>
                <div class="row g-3 align-items-center">
                    <div class="col-sm-4">
                        <div class="col-auto">
                        <label for="age" class="col-form-label" >Age</label>
                        </div>
                        <div class="col-auto">
                        <input type="number" id="age" class="form-control" min=0.01 max=100>
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
                            <select id="Residence-Type" class="form-select form-select-sm" aria-label=".form-select-sm example">
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

                    ${addField}
                </div>

                <div class="row w-50 mt-2 align-items-center">
                    <button type="submit" class="btn btn-primary">Get Prediction</button>
                </div>
                    `
return commonFields;
}