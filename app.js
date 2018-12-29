let arrestContainer = document.querySelector('.arrest-container');
let arrestList = document.querySelector('.arrest-list');
let arrestCount = document.querySelector('.arrest-count');
let arrestLog = [];

arrestContainer.addEventListener('click', arrestFunction);

function arrestFunction(e){
    if (e.target.id === 'submit-arrest'){

        let arrestForm = e.target.form;
        let allInputsFilled = true;
        
        for (let i = 0; i < arrestForm.length - 1; i++){
            if (arrestForm[i].value === ''){ //check if any inputs are blank
                allInputsFilled = false;
            } 
        }

        console.log(allInputsFilled);

        if (allInputsFilled === true) { // do the following if all inputs are filled
            let newRecord = document.createElement('li');
            newRecord.className = 'arrest';
            newRecord.innerHTML = `
                <div class="arrest-info">
                    <div class="arrest-date"> ${arrestForm[0].value}</div>
                    <div class="arrest-name"> ${arrestForm[1].value} </div>
                    <div class="arrest-car"> ${arrestForm[2].value} ${arrestForm[3].value} ${arrestForm[4].value}</div>
                </div>
                <a href="#" class="delete-arrest"><img src="img/x.png"></a>
            `;
            arrestLog.push(newRecord); // add the new element to the array
            document.querySelector('.no-results').style.display = 'none'; // hide 'no results'
            for (let i = 0; i < arrestForm.length - 1; i++){ // clear inputs
                arrestForm[i].value = '';
            }

            for (let i = 0; i < arrestLog.length; i++){ // add new element as child of arrestList
                arrestList.appendChild(arrestLog[i]);
            }
        }
        
    ///////////////////////////////////////////////////////////////////////        

    } else if (e.target.parentElement.className === 'delete-arrest') {
        console.log('delete arrest');
    }
    arrestCount.innerText = arrestLog.length;
}