class Acchandle{
    constructor(){
    
    }

   static newAcc(name){
    var plrname1 = "players/"+name
    var plrtakenornot = "players/"+name+"/taken"
    var checkbool = false
    var nameexistornot = false
    database.ref(plrname1).on("value",(data)=>{

        if(data){nameexistornot = true}else{nameexistornot = false}
        
        database.ref(plrtakenornot).on("value",(data)=>{
        if(data){checkbool = true}else{checkbool = false}})

    if( checkbool == false ){
    
    checkName(checkbool)
    }else{ 
    something(plrname1,name)
    checkName(checkbool)
    }

    })

    function something(nameofplr,name){
    database.ref(nameofplr).update({
       taken:true})
    }

    }

    static deleteAcc(name){
        
    }
}