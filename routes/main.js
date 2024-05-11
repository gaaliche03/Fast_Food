const express=require('express')
const router=express.Router();


const Service=require('../services/services')


router.post('/api/food',Service.food);
router.post('/api/table',Service.table);








module.exports = router;