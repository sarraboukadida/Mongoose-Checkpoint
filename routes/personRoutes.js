const express = require ('express');
const { createAndSavePerson, createManyPeople, searchBD, createPerson, searchOnePeson, SearchById, addFood, personName, removeByiD, deletePeople, queryChain } = require('../controllers');
const router = express.Router ();
const Person = require ('../models/personModel');


//checkpoint complet les fonctions sont enregitrés dans le fichier controllers.js"



//router.get('/', createAndSavePerson) ;  
// router.post('/', createManyPeople) ;
router.post ('/', createPerson);
router.get('/', searchBD);
router.put('/',addFood);
// router.get('/',searchOnePeson);
// router.get('/', SearchById);
// router.put('/',personName); 
//router.delete('/', removeByiD);
//router.delete('/',deletePeople)
//router.get('/', queryChain)

module.exports = router 