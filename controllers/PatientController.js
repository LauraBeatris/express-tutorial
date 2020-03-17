const data = require('../data.json')
const fs = require('fs')

class PatientController { 
    store (req, res) { 
        const { name, age, weight, height, symptoms } = req.body; 
        const id = data.patients.length + 1; 

        data.patients.push({id, name, age, weight, height, symptoms })

        // Registering the patient 
        fs.writeFile("data.json", JSON.stringify(data, null, 2), (error) => { 
            if (error) return res.status(error.status).json({
                error: { 
                    message: "Something when wrong while registering the patient",
                    name: error.name
                }
            })

            return res.json({id, name, age, weight, height, symptoms })
        })
    }

    update (req, res) { 
        const patientFound = data.patients.find(patient => patient.id == req.params.id)
        if (!patientFound) return res.status(404).json({error: { message: "Patient not found"}})
    
        const patient = { 
            ...patientFound,
            ...req.body 
        }
    
        data.patients[patient.id - 1] = patient 
        
        return res.json(patient)
    }

    index (req, res) { 
        return res.json(data.patients)
    }

    show (req, res) { 
        const patientFound = data.patients.find(patient => patient.id == req.params.id)
        if (!patientFound) return res.status(404).json({error: { message: "Patient not found"}})
        return res.json(patientFound)
    }

    delete (req, res) { 
        const filteredPatients = data.patients.filter(patient => patient.id != req.params.id)
        data.patients = filteredPatients
    
        return res.json(data.patients)
    }
}

module.exports = new PatientController()