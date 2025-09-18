
const errorMiddleware = (error,req,res,next)=>{
    const status = error.status || 500;
    const message = error.message || "Backend Error!";
    const extraDetails = error.extraDetails || "Error from Backend";
    const err = {
        message,
        extraDetails,
        status,
    }
    return res.status(status).json(err);
};
module.exports = errorMiddleware;