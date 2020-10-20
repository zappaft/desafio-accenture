const code = '2 222 222 33 66 8 88 777 33';

let arrayCode = code.split(' ');

let palavra = '';
arrayCode.forEach(l=>{

    if(l=='2'){
        palavra+='A';
    }else if(l=='22'){
        palavra+='B';
    }else if(l=='222'){
        palavra+='C';
    }else if(l=='3'){
        palavra+='D';
    }else if(l=='33'){
	palavra+='E';
    }else if(l=='333'){
 	palavra+='F';
    }else if(l=='6'){
       	palavra+='M';  
   }else if(l=='66'){
       	palavra+='N'; 
   }else if(l=='8'){
        palavra+='T'; 
   }else if(l=='88'){
        palavra+='U'; 
   } else if(l=='777'){
        palavra+='R'; 
   } 
    
} 
   
)
console.log(palavra);