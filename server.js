import express from 'express';
import connectDatabase from './config/db';
import { check, validationResult } from 'express-validator';

//initalize express application
const app = express();

//connect database
connectDatabase();

//configure middleware
app.use(express.json({ extended: false}));

//API endpoints
/*@route get
@desc test endpoint
*/ 
app.get('/', (req,res) =>
    res.send('http get request sent to root api endpoint')
);

//post
/*@route post
@desc register car
*/ 
app.post('/api/car', 
    [
        check('brand', 'Please enter the brand of car').not().isEmpty(),
        check('model', 'Please enter the model of car').not().isEmpty(),
        check('color', 'Please enter the color you like').not().isEmpty()
    ],
    (req,res) => {
    console.log(req.body);
    res.send(req.body);
})

//connection listener
app.listen(3000, () => console.log(`Express server running on port 3000`));