const express = require("express");
const router = express.Router();

/* 1 - Criação de um servidor Express */ 
/* 2 - Como configurar as rotas do app */
/* 3 - Métodos http e operações CRUD */ 
/* 4 - Separação de operaçôes por meio de Controllers */ 
/* 5 - Criação de middlewares para executar lógicas */

/* Controllers */
const PatientController = require('./controllers/PatientController')

/* Middlewares */
const checkCorona = require('./middlewares/corona')
const validateBody = require('./middlewares/validate')

router.get("/", (_, res) => res.json({message: "Hello World"}));

router.use(validateBody)

// Creating patient - POST 
router.post('/patients', checkCorona, PatientController.store)

// Read - Listing patients - GET (INDEX)
router.get('/patients', PatientController.index)

// Read - Showing a patient - GET (SHOW)
router.get('/patients/:id', PatientController.show)

// Update - Updating a patient - PUT 
router.put('/patients/:id', PatientController.update)

// Delete - Deleting a patient - DELETE 
router.delete('/patients/:id', PatientController.delete)

module.exports = router;
