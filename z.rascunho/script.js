// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter). 
// Your tasks: 
// 1.  Store Mark's and John's mass and height in variables 
// 2.  Calculate both their BMIs using the formula (you can even implement both 
// versions) 
// 3.  Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John. 
// Test data: 
// §  Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
// m tall. 
// §  Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
// m tall. 

let markAltura = 1.69;
let markPeso = 78;

let jhonAltura = 1.88;
let jhonPeso =  95;

let markBmi = ((markPeso/markAltura) ** 2) /(markAltura * markAltura)
console.log(markBmi) 

let jhonBmi = ((jhonPeso/jhonAltura) ** 2) /(jhonAltura * jhonAltura)
console.log(jhonBmi) 

// 3.  Create a Boolean variable 'markHigherBMI' containing information about // whether Mark has a higher BMI than John. 

let markHigherBMI = markBmi > jhonBmi;
console.log(markHigherBMI)