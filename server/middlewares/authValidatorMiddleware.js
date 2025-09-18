
const validate = (schema)=>async(req,res,next )=>{
    try{
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    }catch(error){
        const message = "Fill the input properly";
        const extraDetails = error.errors[0].message;
        const status  = 422;
        const errors = {
            message,
            extraDetails,
            status,
        }
        // console.log(errors);
        next(errors);
    }
}

module.exports = validate;