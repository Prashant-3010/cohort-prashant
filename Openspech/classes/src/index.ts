 import {measure, once} from "helpful-decorators";
 
 class DateClass{ 
    private timeZone: string; 
     constructor(timeZone:string){  
        this.timeZone = timeZone;
        
     }  
     @measure
     getTime(){ 
        var d = new Date();  
        console.log("hi there from khushi");
        return d.getTime();
     } 
     
       
}  


const dateobject =  new DateClass("IND"); 
  dateobject.getTime(); 
 dateobject.getTime();
dateobject.getTime();   
dateobject.getTime();   
dateobject.getTime();   


