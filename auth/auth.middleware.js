import jwt from 'jsonwebtoken'

export default function auth(req, res, next){
    const reqHeader = req.headers.authorization;
    if (reqHeader) {
        const token = reqHeader.split(' ')[1];
        jwt.verify(token, 'OPEN-CTS', (err, user) => {
            if (err) {
              return  res.status(403).json('Token is not valid')
            }
            req.user = user;
            next()
        })
    } else {
        res.status(401).json('You are not authenticated')
    }
}