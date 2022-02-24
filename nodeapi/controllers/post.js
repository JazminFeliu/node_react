const Post = require("../models/post")
exports.getPosts = (req, res) => {
    res.json({
        posts: [
            {title : "First post"},{title: "Second post"}
        ]
    });
};

exports.createPost = (req, res) => {
    const post = new Post(req.body)
    // console.log("CREATING POST: ", req.body);
    // post.save((err, result) => {
    //     res.status(200).json({
    //         post: result
    //     });
    // } );
    post.save()
    .then(result => {
        res.status(200).json({
            post:result
        });
    });
};

