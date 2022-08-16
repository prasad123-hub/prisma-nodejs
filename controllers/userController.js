// import prisma from '../prisma/index'
const prisma = require('../prisma/index')


// import cookieToken from utils/cookieToken
const cookieToken = require('../utils/cookieToken');

/*
-----------------------------------------------------------
----------------------- User SignUp -----------------------
-----------------------------------------------------------
*/

exports.signup = async(req,res,next) => {
    try {
        const {name,email,password} = req.body;

        if(!name || !email || !password){
            throw new Error('Please provide all the details')
        }

        const user = await prisma.user.create({
            data:{
                name,
                email,
                password
            }
        })

        cookieToken(user,res)
    } catch (error) {
        throw new Error(error)
    }
}

/*
-----------------------------------------------------------
----------------------- User Login ------------------------
-----------------------------------------------------------
*/

exports.login = async(req,res,next) => {
    try {
        const {email,password} = req.body;

        if(!email || !password){
            throw new Error('Please provide all the details')
        }

        const user = await prisma.user.findUnique({
            where:{
                email
            }
        })

        if(!user){
            throw new Error('User not found')
        }

        if(user.password !== password){
            throw new Error('Password is incorrect')
        }

        cookieToken(user,res)
    } catch (error) {
        throw new Error(error)
    }
}

/*
-----------------------------------------------------------
----------------------- User Logout ------------------------
-----------------------------------------------------------
*/

exports.logout = async(req,res,next) => {
    try {
        res.clearCookie('token')
        res.json({
            success:true
        })
    } catch (error) {
        throw new Error(error)
    }
}