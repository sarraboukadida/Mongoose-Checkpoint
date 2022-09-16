const Person = require ('./models/personModel');

//Create and Save a Record of a Model:
const createAndSavePerson = (req,res) => {

    let sarra = new Person ({name:'Sarra', age : 30, favoriteFoods: ['pasta'] });

    sarra.save(req.body) 
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err));
}

// Create Many Records with model.create()
let  arrayOfPeople = [
    {name: 'salma', age:18, favoriteFoods: ['pasta','pizza','burritos'] },
    {name: 'oussema', age:35, favoriteFoods: ['lasagne', 'burritos']},
    {name: 'jamila', age:20, favoriteFoods: ['burger','pizza', 'burritos']},
];
const createManyPeople =(req,res) => {
    
    Person.create (arrayOfPeople,(req.body))
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err));
}

//add a person
const createPerson = (req,res) => {
    Person.create (req.body)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
}

// Use model.find() to Search  Database
const searchBD = (req,res) => {
    Person.find()
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
}

//Use model.findOne() to Return a Single Matching Document from Database
const searchOnePeson = (req,res) => {
    Person.find({favoriteFoods:{$all:['pasta']}})
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
}

//Use model.findById() to Search Your Database By _id
const SearchById= (req,res) => {
    Person.findById('632474f120c0c63289c60314')
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
}

//Perform Classic Updates  - adding humberger as a food 

const addFood = (req,res) => {
    Person.updateOne({_id:"6324a5503d347b327b425796"},{$push:{favoriteFoods:'humberger'}}) 
     .then(response => res.json(response))
     .catch(err => res.status(500).json(err));
}

//Perform New Updates on a Document Using model.findOneAndUpdate()
const personName = (req,res) => {
    Person.findOneAndUpdate ({name:'Sarra'}, {age:20})
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
}

//Delete One Document Using model.findByIdAndRemove (findByIdAndDelete)
const removeByiD = (req,res) => {
    Person.findByIdAndDelete('63247a88d29272a28d7d438f')
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
}

// Delete Many Documents with model.remove() or .model.detele() Delete all the people whose name is “Mary”,
const deletePeople = (req,res) => {
    Person.remove ({name: {$regex:/Mary/}} )
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
}

//Chain Search Query Helpers to Narrow Search Results:

const queryChain = (req,res) => {
    Person.find( {favoriteFoods: 'burritos' } ).sort({name: 'asc'}).limit(2).select('-age')
    .exec()
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
}


module.exports = { createAndSavePerson, createManyPeople, searchBD, createPerson, searchOnePeson, SearchById, addFood, personName, removeByiD, deletePeople, queryChain}