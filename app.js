let firstName = document.querySelector('input#first-name');

firstName.addEventListener('focus', function(e){
    firstName.value = '';
    console.log(e);
})

firstName.addEventListener('blur', function(e){
    if(firstName.value === ''){
        firstName.value = 'test';
    }
    
    console.log(e);
})