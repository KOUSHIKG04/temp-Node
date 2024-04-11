 
const logger = (req, res, next) =>
{
  const m = req.method;
  const u = req.url;
  const d = new Date().getFullYear();
  console.log(m, u, d); 
  next()
}

export default logger;
// this can be used un anay files by importing


 

