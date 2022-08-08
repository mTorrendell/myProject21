//import all necessary modules


const routes = require("./routes");


//llamar middleware

//poner ejs como navegador 

//sync todos los modelos 
await sequelize.sync({ force: true });



//hacer passport 



routes(app);