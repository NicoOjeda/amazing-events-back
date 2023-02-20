const CurrentDate = require('../models/CurrentDate')

const controller = {

read: async(req,res) =>{

    try{
        let todos = await CurrentDate.find()
        res.status(200).json({
            response: todos,
            success: true,
            message: "se encuentra fecha"
        })

    } catch(error){
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}

}

module.exports = controller