let arrestContainer = document.querySelector('.arrest-container');
let arrestList = document.querySelector('.arrest-list');
let suspect = document.querySelector('#name');
let date = document.querySelector('#date');
let year = document.querySelector('#year');
let make = document.querySelector('#make');
let model = document.querySelector('#model');

let arrestLog = [];

arrestContainer.addEventListener('click', arrestFunction);

function arrestFunction(e){
    if (e.target.id === 'submit-arrest'){

        let arrestForm = e.target.form;
        let allInputsFilled = true;
        function addArrestRecord(date, suspect, year, make, model) { //creates new object
            this.date = date;
            this.suspect = suspect;
            this.year = year;
            this.make = make;
            this.model = model;
        }
        
        for (let i = 0; i < arrestForm.length - 1; i++){
            if (arrestForm[i].value === ''){ //check if any inputs are blank
                allInputsFilled = false;
            } 
        }
        console.log(allInputsFilled);
        if (allInputsFilled === true) {
            arrestLog.push(
                new addArrestRecord(arrestForm[0].value, arrestForm[1].value, arrestForm[2].value, arrestForm[3].value, arrestForm[4].value)
            );
            let newRecord = document.createElement('li');
            newRecord.className = 'arrest';
            newRecord.innerHTML = `
                <div class="arrest-info">
                <div class="arrest-date"> ${arrestLog[arrestLog.length - 1].date}</div>
                <div class="arrest-name"> ${arrestLog[arrestLog.length - 1].suspect} </div>
                <div class="arrest-car"> ${arrestLog[arrestLog.length - 1].year} ${arrestLog[arrestLog.length - 1].make} ${arrestLog[arrestLog.length - 1].model}</div>
                </div>
                <a href="#" class="delete-arrest"><img src="img/x.png"></a>
            `;
            for (let i = 0; i < arrestForm.length - 1; i++){ // clear inputs
                arrestForm[i].value = '';
            }

            document.querySelector('.no-results').style.display = 'none';
            arrestList.appendChild(newRecord);
        }
        
        

    } else if (e.target.parentElement.className === 'delete-arrest') {
        console.log('delete arrest');
    }
}