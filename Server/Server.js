const mongoose = require('mongoose')
const express = require('express')

const cors = require('cors');
const http = require('http');
const userRoutes = require('./Routes/UserRoute')
const itemsRoute = require('./Routes/ItemsRoute')

const app = express()
app.use(cors({
  origin: 'http://localhost:1420',  // replace with your frontend URL
  methods: ['GET', 'POST'],  // specify allowed methods
  credentials: true          // allow cookies if needed
}));



const server = http.createServer(app);
const port = 3000

app.use(express.json());

app.use('/login', userRoutes);
app.use('/additem', itemsRoute);
mongoose.connect('mongodb+srv://arshathhaseen:12345@cluster0.4ahayis.mongodb.net/invoice', )
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));


  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });