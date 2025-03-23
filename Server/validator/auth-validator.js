const {z} = require('zod');

// credentials validation with using zod
const signupSchema = z.object({
    name:z
    .string({message:"Name is required!"})
    .trim()
    .min(3,{message:"Name must be at least of 3 character"})
    .max(255,{message:"Name must no more than 255 character"}),

    email:z
    .string({message:"Email is required"})
    .trim()
    .min(3,{message:"Name must be at least of 3 character"})
    .max(255,{message:"Name must no more than 255 character"}),
    
    password:z
    .string({message:"Password is required!"})
    .trim()
    .min(6,{message:"password must be at least 6 character"})
    .max(255,{message:"password must be at more than 255 character"}),
})

// login validation
const loginSchema = z.object({
    email:z
    .string({message:"Email is required!"})
    .trim()
    .min(3,{message:"email must be at least 3 character"})
    .max(255,{message:"email must be more then 255 character"}),

    password:z
    .string({message:"Password is required!"})
    .trim()
    .min(7,{message:"Password must be ate least 7 characters"})
    .max(255,{message:"Password must more than 255 character"})
})


module.exports = {signupSchema,loginSchema};