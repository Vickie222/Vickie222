const calculate1 = (nm1, nm2, opera) => {
    if (Number.isNaN(nm1) || Number.isNaN(nm2) ){
        
        console.log("error, supply only numbers");
        return false;
    }
    const Operations = ['add','subtract','multiply','divide']; 
   if  (!Operations.includes(opera)){
return "Invalid operation supplied";
    }
    switch (opera){
        case'add':
        return nm1 + nm2;
        case'subtract':
        return nm1 - nm2;
        case'multiply':
        return nm1 * nm2;
        case'divide':
        return nm1 / nm2;
    }
}
function calculate (nm1, nm2, opera)
 {
    if (typeof nm1 === 'number' || typeof nm2 === 'number' ) {
        const Operations = ['add','subtract','multiply','divide']; 
        if  (!Operations.includes(opera)){
        return "Invalid operation supplied";
        }
        if (opera == "add") {
            return nm1 + nm2;
        }
        else if (opera == "subtract"){
            return nm1 - nm2;
        }
        else if (opera == "multiply"){
            return typeof (nm1) ,nm1 * nm2;
        }
        else if (opera == "divide"){
            return nm1 / nm2;
        }
    
    }
    else {
        return "error, supply only numbers";
    }
    
}
console.log(calculate(5,3,"add"));
console.log(calculate(5,3,"subtract"));
console.log(calculate(10,2,"multiply"));
console.log(calculate(10,2,"divide"));
console.log(calculate1(5,3,"add"));
console.log(calculate1(5,3,"subtract"));
console.log(calculate1(10,2,"multiply"));
console.log(calculate1(10,2,"divide"));