const express = require('express')
const router = express.Router()
const Video = require('../../models/video')


router.get('/videos', (req, res) => {
    Video.find({})
        .exec((err, videos) => {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json(videos)
        })
    
})

router.get('/videos/:id', (req, res) => {
    Video.findById(req.params.id)
        .exec((err, video) => {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json(video)
        })
    
})

router.post('/video', (req, res) => {
    var newVideo = new Video({
        title: req.body.title,
        url: req.body.url,
        description: req.body.description
    })

    newVideo.save((err, newvideo) => {
        if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json(newvideo)
    })
})

router.put('/video/:id', (req, res) => {
    Video.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            url: req.body.url,
            description: req.body.description
        }
    }, {
        new: true
    }, 
    function (err, updatedVideo) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).json(updatedVideo)
    })
})

router.delete('/video/:id', (req, res) => {
    Video.findByIdAndRemove(req.params.id, (err, deletedVideo) => {
        if (err) {
            return resizeBy.status(500).json({
                title: 'An error occurred',
                error: err
            })
        }
        res.status(200).json(deletedVideo)
    })
})



module.exports = router