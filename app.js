const express = require('express')
const app = express()

app.use(express.json())

const db = [
    {fName:'Mohammad',favFood:'Shawerma'},
    {fName:'Hosam',favFood:"Cheese Sandwich"}
]

app.get('/',(req,res)=>{
    res.json('Server is working')
})
app.get('/all',(req,res)=>{
    res.json(db)
})

app.delete('/lastElement',(req,res)=>{
    db.pop()
    res.json(db)
})

app.put('/favFood/:index',(req,res)=>{
    // db[req.params.index].favFood = req.body.newFood هذي طريقة
    // وهذي طريقة ثانية وهي الأفضل . مرتبة بشكل جيد
    const id = req.params.index
    const newFavFood = req.body.newFood
    db[id].favFood = newFavFood
    // اذا تبغا تغير الستاتس
    // res.status(anyNumber).json(db);
    // for example: res.status(201).json(db);
    res.json(db)
})

app.post('/newElement',(req,res)=>{
    db.push(req.body)
    res.json(db)
})

app.listen(5000,()=>{
    console.log('Server ON PORT 5000 ... ')
})

// هنا خلصنا CRUD Operations for Express والحمد لله
// Coming next ...
// MongoDB