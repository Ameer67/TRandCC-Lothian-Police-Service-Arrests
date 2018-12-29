let mainContainer = document.querySelector('#main-container');
mainContainer.addEventListener('click', myFunction);
let arrestLog = [{
    name: 'Joe',
    date: 'Dec 27, 2018',
    car: '2001 Ford Focus',
}];

function myFunction(e){
    console.log(e.target.id);
    if (e.target.nodeName === 'INPUT'){
        console.log('input found');
        arrestLog.push(
            {
                name: 'Bill Nye',
                date: 'Oct 28, 2018',
                car: '2011 Ford Fiesta', 
            }
        );
    } else if (e.target.className === 'delete-arrest') {
        console.log('delete arrest');
    }
}