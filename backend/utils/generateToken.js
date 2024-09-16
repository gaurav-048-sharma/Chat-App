import jwt from 'jsonwebtoken';

const generateTokenAndCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })
    res.cookie("jwt", token,{
        maxAge: 15*24*60*660*1000,
        httpOnly:true, //prevet xss attract cross site scripting attacts
        sameSite:"strict", //csrf attacts  cross site request forgery attacts
        secure: process.env.NODE_ENV !== "development"
    });
}

export default generateTokenAndCookie;