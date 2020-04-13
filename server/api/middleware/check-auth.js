const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
            if(!req.headers.authorization) {
                return res.status(401).send('Unauthorized token')
            }
            const token = req.headers.authorization.split(" ")[1];
            if(token === 'null') {
                return res.status(401).send('Unauthorized token')
            }
            const payload = jwt.verify(token, process.env.JWT_KEY);
            if(!payload) {
                return res.status(401).send('Unauthorized token')
            }
            req.email = payload.subject;
            next();
        } catch (error) {
            return res.status(401).json({
                message: 'Auth failed'
        });
    }
};