module.exports = (req, res, next) => { 
    const { symptoms } = req.body 

    if (
        symptoms.includes("fever") && 
        symptoms.includes("cough") && 
        symptoms.includes("muscle pain")
    ) { 
        return res.status(401).json({message: `The patient ${req.body.name} has corona virus`})
    } else { 
        return next()
    }
}