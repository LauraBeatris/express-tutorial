module.exports = (req, res, next) => { 
    const dataKeys = Object.keys(req.body)
    dataKeys.forEach(key => { 
        if (!req.body[key]) return res.json({error: `The field ${key} has an invalid value`})
    })

    return next()
}