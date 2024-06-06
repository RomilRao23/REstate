import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';


export const verifyToken = (req, res, next) => {
  
  try {
    const token = req.cookies.access_token;
    console.log('inside verification !!!', token)


    // if (!token) return next(errorHandler(401, 'Unauthorized'));
    // console.log('inside verification !!!', token)

    // jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    //   console.log(err, user)
    //   if (err) return next(errorHandler(403, 'Forbidden'));

    //   req.user = user;
    //   next();
    // });


    
    if (token==null || token==undefined){
       throw('Token Not verified');
      
    } 

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      console.log(err, user)
      if (err) return next(errorHandler(403, 'Forbidden'));

      req.user = user;
      next();
    });

  }
  catch (err) {
    console.log('token verifcation failed !!')
    
    return res.send(err, 400)
  }




};