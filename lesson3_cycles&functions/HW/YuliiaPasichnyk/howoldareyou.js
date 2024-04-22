let age = prompt("How old are you?")
let ageMessage = 'років'; 

if (age < 0 || isNaN(age)|| !Number.isInteger(Number(age))) {
    alert( "The age is invalid");
    
} else {
 
    if (age[age.length - 1] === '1'  && !(age.length > 1 && age[age.length - 2] === '1')) {
        ageMessage = 'рік'
    } 
    if (age[age.length - 1] === '2' || age[age.length - 1] === '3' || age[age.length - 1] === '4') {
        ageMessage = 'роки'
    }
    console.log(age + ' ' + ageMessage);
}
let resultMessage = `${age} ${ageMessage}`







