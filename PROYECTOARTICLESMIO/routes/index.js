const publiRoutes = require("./adminRoutes");
const adminRoutes = require("./adminRoutes");


module.exports = (app) => {
   app.use("/blog", publiRoutes);
   app.use("/admin", adminRoutes);
}