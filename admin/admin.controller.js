



async function addAdmin(req,res) {
    try{
       if(req.body.password == "tashxisapp123" && req.body.login =="tashxisapp"){
        return res.status(200).send(true)
       } else{
        return res.status(200).send(false)
       }    
    }catch(err){    
        res.status(400).send(err)
    }
}



module.exports={

    addAdmin
 
}