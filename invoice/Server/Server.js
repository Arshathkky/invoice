// server/server.js
const mongoose = require('mongoose')
const express = require('express');
const cors = require('cors');
const app = express();

const userRoutes = require('./Routes/UserRoute')
const itemsRoute = require('./Routes/ItemsRoute')
const billRoute = require('./Routes/BillRoute')
// Middleware
app.use(cors());
app.use(express.json());

app.use('/login', userRoutes);
app.use('/items', itemsRoute);
app.use('/bill', billRoute);


// Route to handle greeting
mongoose.connect('mongodb+srv://arshathhaseen:12345@cluster0.4ahayis.mongodb.net/invoice', )
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));
// Start server
const port = 3000; // Use a port like 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
