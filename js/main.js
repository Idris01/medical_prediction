document.addEventListener('DOMContentLoaded', ()=>{

    function get_form(condition="stroke"){
        let commonFields = `<div class="row g-3 align-items-center">
                                <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">Password</label>
                                </div>
                                <div class="col-auto">
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
                                </div>
                                <div class="col-auto">
                                <span id="passwordHelpInline" class="form-text">
                                    Must be 8-20 characters long.
                                </span>
                                </div>
                            </div>
                            `
        return commonFields;
    }

    const statusButtons = document.querySelectorAll('input[name="healthStatus"]');
    for (const status of statusButtons) {
        status.addEventListener('change', function(e){
            if (this.checked) {
                inputArea = document.getElementById("userdata");
                inputArea.innerHTML=get_form();
            }
        })
        
    }
});