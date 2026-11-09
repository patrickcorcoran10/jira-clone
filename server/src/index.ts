import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
// Route Imports
import projectRoutes from './routes/projectRoutes';
import taskRoutes from './routes/taskRoutes'
import searchRoutes from './routes/searchRoutes'
import userRoutes from './routes/userRoutes';
import teamRoutes from './routes/teamRoutes'
import { te } from 'date-fns/locale'
// Configurations
dotenv.config();
const app = express();

app.use(express.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

// Routes
app.get('/', (req, res) => {
    res.send('this is a home route')
})
// Get All Projects
app.use('/projects', projectRoutes)
// Get All Tasks
app.use('/tasks', taskRoutes)
// Search Projects, Tasks and Users
app.use('/search', searchRoutes)
app.use('/users', userRoutes)
app.use('/teams', teamRoutes)

// Server

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server running on port ${port}`)
})