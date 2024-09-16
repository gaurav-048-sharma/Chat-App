import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if(!token ) {
            return res.status(401).json({error : "Unauthorized - No token provided"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded) {
            return res.status(401).json({error: "Unauthorized - Invalid Token"})
        }

        const user = await User.findById(decoded.userId).select("-password");
        if(!user) {
            return res.status(401).json({error: "Unauthorized - User not found"})
        }
        req.user = user;
        next();
    } catch(error) {
        console.log("error is sendMessage: " ,error.message);
        res.status(400).json({error: "Internal server error"})
    }


}

export default protectRoute;