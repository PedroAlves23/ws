const app =require('express')();
const PORT = 3000;

app.listen(PORT, ()=>console.log(`running on http://localhost:${PORT}`));

//const cur_image= "";

//app.get('/', (req,res)=>{
//    res.status(200).send({
//        data: 'I am root'
//    })
//}
//);

//app.get('/car', (req,res)=>{
//    res.status(200).send({
//        data: '${cur_image}'
//    })
//}
//);

//app.post('/car/:id', (req,res)=>{
//    const { id } = req.params;
//    const { image } = req.body;   //🚗🎃
//    if (!image){
//        res.status(418).send({ message: `we need an image!!`})
//    }
//
//    res.send({car: `🚗 has the image of ${image} and the id of ${id}`})
//})
