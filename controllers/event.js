const Event = require('../models/Event')

const controller = {

read: async(req,res) =>{

    try{
        let todos = await Event.find()
        res.status(200).json({
            response: todos,
            success: true,
            message: "se encuentran eventos"
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