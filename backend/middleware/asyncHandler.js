const asyncHandler = fn => (req,res,next)=>{
    Promise.resolve(fn(req, res)).catch(next);
}

export default asyncHandler;