const express = require("express");
const app = express();
const mongoose = require("mongoose");
const articleRouter = require('./route/articleRouter')
const commentRouter = require('./route/commentRouter')
const userRouter = require('./route/userRouter')
const hateoasRouter = require("./route/hateoas")
// ------------------------------------------------------------------
app.use(express.json())
app.use('/',hateoasRouter)
app.use('/articles',articleRouter)
app.use('/comments',commentRouter)
app.use('/users',userRouter)
// ------------------------------------------------------------------
mongoose
  .connect("mongodb://localhost:27017/blog", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("Mongodb Connection is Successful !!");
    console.log(con.connection.name);
  });

// ------------------------------------------------------------------
app.listen(3000, () => {
    console.log("Server is running .... ");
  });
  