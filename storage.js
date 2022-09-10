document.getElementById('btn-add-name').addEventListener('click', function(){
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;
    //console.log(nameValue);  
    
    localStorage.setItem('name', nameValue);
})


document.getElementById('btn-add-age').addEventListener('click', function(){
    const ageField = document.getElementById('age-field');
    const ageValue = ageField.value;
    //console.log(nameValue);  
    
    localStorage.setItem('age', ageValue);
})