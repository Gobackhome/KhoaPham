module.exports = (req,res,next)=>{
  console.log(`${Date.now()}: truy cap vao ${req.path}`);
  next();
};
