import { AbstractControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms";




export class UserNameValidators{
    static cannotContainsSpace(control:AbstractControl): ValidationErrors | null{
        if((control.value).indexOf(" ") >=0){
            return {cannotContainsSpace : true}
        }
        return null
    }


    static shouldBeUnique(control:AbstractControl): Promise<ValidationErrors|null>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(control.value == "Goulagwe"){
                    resolve({shouldBeUnique:true}) 
                }
                resolve(null);
            }, 2000);
        })
        
    }






}


