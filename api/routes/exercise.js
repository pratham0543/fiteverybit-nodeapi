const express=require('express')
const router=express.Router()
const back =require('../../assets/exercisedata/back.json')
const cardio =require('../../assets/exercisedata/cardio.json')
const chest =require('../../assets/exercisedata/chest.json')
const lowerarms =require('../../assets/exercisedata/lowerarms.json')
const lowerlegs =require('../../assets/exercisedata/lowerlegs.json')
const neck =require('../../assets/exercisedata/neck.json')
const shoulder =require('../../assets/exercisedata/shoulder.json')
const upperarms =require('../../assets/exercisedata/upperarms.json')
const upperlegs =require('../../assets/exercisedata/upperlegs.json')
const waist =require('../../assets/exercisedata/waist.json')
const legs=require('../../assets/exercisedata/legs.json')
const arms=require('../../assets/exercisedata/arms.json')

router.get('/back',(req,res)=>{
    res.status(200).send(back)
})
router.get('/cardio',(req,res)=>{
    res.status(200).send(cardio)
})
router.get('/chest',(req,res)=>{
    res.status(200).send(chest)
})
router.get('/forearms',(req,res)=>{
    res.status(200).send(lowerarms)
})
router.get('/calves',(req,res)=>{
    res.status(200).send(lowerlegs)
})
router.get('/neck',(req,res)=>{
    res.status(200).send(neck)
})
router.get('/shoulder',(req,res)=>{
    res.status(200).send(shoulder)
})
router.get('/biceps',(req,res)=>{
    const biceps=upperarms.filter((entry)=>entry.target==='biceps')
    res.status(200).send(biceps)
})
router.get('/triceps',(req,res)=>{
    const triceps=upperarms.filter((entry)=>entry.target==='triceps')
    res.status(200).send(triceps)
})
router.get('/abs',(req,res)=>{
    res.status(200).send(waist)
})
router.get('/traps',(req,res)=>
{
    const traps=back.filter((entry)=>entry.target==='traps')
    res.status(200).send(traps)
}
)
router.get('/quads',(req,res)=>
{
    const quads=upperlegs.filter((entry)=>entry.target==='quads')
    res.status(200).send(quads)
}
)

router.get('/glutes',(req,res)=>
{
    const glutes=upperlegs.filter((entry)=>entry.target==='glutes')
    res.status(200).send(glutes)
}
)
router.get('/hamstrings',(req,res)=>
{
    const hamstrings=upperlegs.filter((entry)=>entry.target==='hamstrings')
    res.status(200).send(hamstrings)
}
)
router.get('/legs',(req,res)=>
{
    res.status(200).send(legs)
}
)
router.get('/arms',(req,res)=>{
    res.status(200).send(arms)
})

router.get('/adductor',(req,res)=>
{
    const adductor=upperlegs.filter((entry)=>entry.target==='adductors')
    res.status(200).send(adductor)
}
)





module.exports=router