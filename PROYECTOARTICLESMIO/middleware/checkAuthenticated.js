module.exports = (req, res, next) => {
   if (!req.isAuthenticated()) {
      console.loh("entro al error del middleware")
      return res.redirect("/blog")
   }
   next();
}