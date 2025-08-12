const express = require('express')
const router = express.Router()
const { uploadVideo,upload, postNewVideo, getAllVideos,getOneVideo ,handleSearchQuery} = require('../controllers/videoController')


router.get('/upload', uploadVideo)

router.post('/upload', upload.fields([
    { name: 'video', maxCount: 1 },
    { name: 'thumbnail', maxCount: 1 }
]), postNewVideo)

router.get('/', getAllVideos)
router.get('/watch/:id', getOneVideo);
router.get('/search', handleSearchQuery)

module.exports = router