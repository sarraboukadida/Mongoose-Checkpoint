const mongoose = require ('mongoose') ;

const personSchema = mongoose.Schema ({

    name: {
        type : String,
        default: "first and last name" ,
        required: true
    } ,
    age : {
        type : Number,
        default: 15
    } ,
    favoriteFoods: [String] ,
})



module.exports = mongoose.model ('person', personSchema)