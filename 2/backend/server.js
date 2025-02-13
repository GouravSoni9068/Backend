import express from "express"
// const cors=require(cors)
const app=express()
let port=process.env.PORT || 3000

app.get('/api/jokes',(req,res)=>{
    let jokes=[
        {
            id:1,
            title:"A joke",
            content:"This is a joke"
        },
        {
            id:2,
            title:"A joke",
            content:"This is a joke"
        },
        {
            id:3,
            title:"A joke",
            content:"This is a joke"
        },
        {
            id:4,
            title:"A joke",
            content:"This is a joke"
        },
        {
            id:5,
            title:"A joke",
            content:"This is a joke"
        },
    ]
    res.send(jokes)
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})