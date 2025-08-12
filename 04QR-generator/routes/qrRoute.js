const express = require('express')
const router = express.Router()
const QRCode = require('qrcode');
const QR = require('../models/qr_Model')

router.get('/', async (req, res) => {
  const qrs = await QR.find().sort({ date: -1 });
  res.render('index', { qrs, qrImage: null });
});

router.post('/generate',async (req,res)=>{
    const {text} = req.body    
    if(!text) return res.redirect('/');

    const qrImage = await QRCode.toDataURL(text);    
    const qr = new QR({text});
    await qr.save();

    const qrs = await QR.find().sort({ date: -1 });
    res.render('index', { qrs, qrImage });
})


module.exports = router