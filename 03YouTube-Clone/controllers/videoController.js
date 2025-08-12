const multer = require('multer')
const path = require('path')
const Video = require('../models/videos')



const fetchapi = async ()=>{
        const url = " https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json"
        const response = await fetch(url)
        const data = await response.json()
        return data
}



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(file);
        
        if (file.fieldname === 'video') {
            cb(null, './uploads/videos')
        } else if (file.fieldname === 'thumbnail') {
            cb(null, './uploads/thumbnails')
        }

    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage });


const uploadVideo = (req, res) => {
    res.render('upload')
}

const postNewVideo = async (req, res) => {
    const { title, description } = req.body;
    
    try {
        const video = new Video({
            title,
            description,
            videoPath: req.files.video[0].path,
            thumbnailPath: req.files.thumbnail[0].path
        });        
        await video.save();
        res.redirect('/')
    } catch (error) {
        console.error(error);

    }
}


const getAllVideos = async (req, res) => {
    try {
        const data = await fetchapi()
        res.render('index', { videos: data })
    
    } catch (error) {
        console.error(error);
        
    } 
}

const getOneVideo = async (req, res) => {
    const id = req.params.id;
    try {
     const data = await fetchapi()
     const video = data.find(video => video.id === id)
     res.render('watch', { video })
             
    } catch (error) {
        console.error(error);
        
    }
    // const video = await Video.findById(req.params.id);
    // res.render('watch', { video });
}

const handleSearchQuery = async (req,res)=>{
    const query = req.query.q;
    const data = await fetchapi()
    const search = data.filter(video => video.title.toLowerCase().includes(query.toLowerCase()))
    res.render('search', { search, searchQuery:query })
    
}

module.exports ={uploadVideo,upload, postNewVideo, getAllVideos , getOneVideo , handleSearchQuery}