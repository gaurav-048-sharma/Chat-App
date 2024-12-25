import User from "../models/user.model.js";
import becrypt from 'bcryptjs';
import generateTokenAndCookie from "../utils/generateToken.js";
export const signup = async(req,res) => {
    try{
        const {fullName, username, password, confirmPassword,gender}= req.body;
        if(password !== confirmPassword) {
            return res.status(400).json({error: "password don't match"})
        }
        const user = await User.findOne({username});
        if(user) {
            return res.status(400).json({error: "username already exist"})
        }
        //hash password here
        const salt = await becrypt.genSalt(10);
        const hashPassword = await becrypt.hash(password, salt);
        //https://avatar-placeholder.iran.liare.run/
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const newUser = new User({
            fullName,
            username,
            password:hashPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })
        if(newUser) {
            ///Genereate JWT token here
            generateTokenAndCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
        });
        } else {
            res.status(400).json({error: "Failed to create new user"})
        }
    }catch (error) {
        console.log("error in signup controller", error.message)
        res.status(500).json({error: "interrust Server Error"})
    }
}
export const login = async (req,res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await becrypt.compare(password, user?.password || "");
       
        if(!user || !isPasswordCorrect) {
            console.log(isPasswordCorrect);
            return res.status(400).json({error : "invalid username or password"});
        }
        
        generateTokenAndCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
        
    } catch(error) {
        console.log("error in login controller", error.message)
        res.status(500).json({error: "interrust Server Error"})
    }
};
export const logout = (req,res) => {
    try {
        res.cookie("jwt", "",{maxAge:0} );
        res.status(200).json({message: "logged out successfully"});
    } catch(error) {
        console.log("error in login controller", error.message)
        res.status(500).json({error: "interrust Server Error"})
    }
}
