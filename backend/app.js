const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');


const app = express();

//import routes
const searchRoutes = require('./routes/index');

//App middlewear
app.use(cors());
app.use(morgan());
app.use(helmet());

//Search routes
app.use('/api', searchRoutes)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));