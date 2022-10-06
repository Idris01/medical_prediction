import {makeForm} from "/js/utility.js";

document.addEventListener('DOMContentLoaded', ()=>{

    function get_form(condition="stroke"){
        return makeForm(condition);
    }

    const statusButtons = document.querySelectorAll('input[name="healthStatus"]');
    for (const status of statusButtons) {
        status.addEventListener('change', function(e){
            if (this.checked) {
                let inputArea = document.getElementById("userdata");
                inputArea.innerHTML=get_form(this.value);
            }
        })
        
    }
});