const express = require('express')
const app = express()

app.use(require('cors')())

app.use(express.json())

const mongoose=require('mongoose')

mongoose.connect('mongodb://192.168.43.10:27017/book',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
});

const Book=mongoose.model('Book',new mongoose.Schema({
    name:{type:String, required:true},
    author:{type:String, required:true},
    desc:{type:String, required:true},
    category:{type:String, required:true}
}))
 
//首页数据
app.get("/api/books",async(req,res)=>{
  const book=await Book.find()
  res.send(book)
})

//新增图书
app.post("/api/books",async(req,res)=>{
  const book=await Book.create(req.body)
  res.send(book)
})


  //查找图书
  app.post("/api/findbook",async(req,res)=>{
    const book=await Book.find({ 
    $or:[{name:req.body.name},
      {author:req.body.name},
      {category:req.body.name},
      {desc:req.body.name}]
  })
  res.send(book)
})


  //删除图书
app.delete('/api/books/:id',async(req,res)=>{
  await Book.findByIdAndDelete(req.params.id)
  res.send({
    status:true
  })
})


//编辑详情
app.get("/api/books/:id",async(req,res)=>{
  const book=await Book.findById(req.params.id)
  res.send(book)
})




 
//保存修改
  app.put("/api/books/:id",async(req,res)=>{
    const book=await Book.findByIdAndUpdate(req.params.id,req.body)
    res.send(book)
  })

app.listen(3000,()=>{
    console.log("39.106.129.167:3000")
})