let arrestContainer = document.querySelector('.arrest-container');
let arrestList = document.querySelector('.arrest-list');
let arrestCount = document.querySelector('.arrest-count');
let arrestLog = [];

///////////////// ADD REMOVE ARRESTS ////////////////////////
arrestContainer.addEventListener('click', arrestFormFunction);
function arrestFormFunction(e){
    let arrestForm = e.target.form; // grab arrest form
    if (e.target.id === 'submit-arrest'){ // if item clicked on has id of submit-arrest
        e.preventDefault();
        let allInputsFilled = true; // default to all inputs already filled
        
        for (let i = 0; i < arrestForm.length - 1; i++){
            if (arrestForm[i].value === ''){ //check if any inputs are blank
                allInputsFilled = false; // if they are, change flag to false
            } 
        }

        if (allInputsFilled === true) { // do the following if all inputs are filled

            let arrestDate = new Date(arrestForm[0].value + ' '); // change arrest date into date object
            let monthDay = arrestDate.toDateString().substring(4); // convert to string and remove day name 
            let year = monthDay.slice(6, 11); // grab year
            monthDay = monthDay.slice(0, 6) + ','; // grab month and add ,
            
            let newRecord = document.createElement('li');
            newRecord.className = 'arrest';
            newRecord.innerHTML = `
                <div class="arrest-info">
                    <div class="arrest-date"> ${monthDay + year}</div>
                    <div class="arrest-name"> ${arrestForm[1].value} </div>
                    <div class="arrest-car"> ${arrestForm[2].value} ${arrestForm[3].value} ${arrestForm[4].value}</div>
                </div>
                <a href="#" class="delete-arrest"><img src="img/x.png"></a>
            `;
            
            arrestLog.push(newRecord); // add the new element to the array
            document.querySelector('.no-results').style.display = 'none';
            document.querySelector('.categories').style.display = 'grid'; // hide 'no results'
            for (let i = 0; i < arrestForm.length - 1; i++){ // clear inputs
                arrestForm[i].value = '';
            }
            arrestForm[0].type = 'text'; // change back date input type
            for (let i = 0; i < arrestLog.length; i++){ // add new element as child of arrestList
                arrestList.appendChild(arrestLog[i]);
            }
        }
    }

    /////////////////////////////////////////////////      

    else if (e.target.parentElement.className === 'delete-arrest') { // if X button was clicked
        let currentArrestIndex = arrestLog.indexOf(e.target.parentElement.parentElement); // grab index of which arrest was clicked on
        arrestLog.splice(currentArrestIndex, 1); // remove arrest from log
        arrestList.removeChild(e.target.parentElement.parentElement); // remove arrest from page

        if (arrestLog.length === 0) { //display no results if arrayLog is 0
            document.querySelector('.no-results').style.display = 'block';
            document.querySelector('.categories').style.display = 'none';
        }
    }

    /////////////////////////////////////////////////////

    arrestCount.innerText = arrestLog.length; // update number of arrests
    if (arrestLog.length === 1) {
        arrestCount.nextElementSibling.innerText = 'arrest';
    } else {
        arrestCount.nextElementSibling.innerText = 'arrests';
    }
}

//////// CHANGE DATE INPUT TYPE BASED ON FOCUS ////////////
arrestContainer.addEventListener('focusin', function(e){
    if (e.target.id === 'date') {
        e.target.type = 'date';
    }
});

arrestContainer.addEventListener('focusout', function(e){
    if (e.target.id === 'date' && e.target.value === '') {
        e.target.type = 'text';
    }
});