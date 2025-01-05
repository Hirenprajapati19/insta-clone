const express = require("express")
const app = express()
const mongoose=require("mongoose")
const {mongoUrl}=require("./keys")
const cors=require("cors")


app.use(cors())

require('./models/model')
require('./models/post')

app.use(express.json())
app.use(require("./routes/auth")) 
app.use(require("./routes/createPost")) 

mongoose.connect(mongoUrl)
mongoose.connection.on("connected",()=>{
    console.log("connected to database")
})



app.listen(5339, () => {
    console.log("Server is running on port 5339")
})