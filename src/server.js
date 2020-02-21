
import app from './app';
const swaggerGerator = require('express-swagger-generator')(app)
import documentation from '../src/config/documentation'

swaggerGerator(documentation)

app.listen(3333);
