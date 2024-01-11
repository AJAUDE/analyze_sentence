const express = require('express');
const router = express.Router();
const Post = require('./models/post')
// get all post route
router.get('/posts', async (req, res) => {
    const posts = await Post.find();// find all posts 
    res.send(posts); //send all posts as response to client 

})
// export the router
module.express = router;