const { Router } = require("express");
const router = new Router();

const Poi = require("./../models/POI");

const Post = require("./../models/post");

const routeGuard = require("./../middleware/route-guard");

const uploader = require("./../middleware/cloudinary-config");

//list of the user's posts

router.get("/userPostList/:id", routeGuard, (req, res, next) => {
  console.log(req.user.id);
  console.log(req.params.id);

  Post.find({ author: req.params.id })
    .sort({ creationDate: -1 })
    .populate("author")
    .then(posts => {
      res.render("Post/listPosts", { posts });
    })
    .catch(error => {
      next(error);
    });
});

//list of all the posts

router.get("/reviews", (req, res, next) => {
  Post.find()
    .sort({ creationDate: -1 })
    .populate("author")
    .then(posts => {
      res.render("Post/listPosts", { posts });
    })
    .catch(error => {
      next(error);
    });
});

//create a post
router.get("/createPost", routeGuard, (req, res, next) => {
  res.render("Post/createPost");
});

router.post(
  "/createPost",
  routeGuard,
  uploader.array("file", 3),
  (req, res, next) => {
    const text = req.body.text;
    const author = req.session.user;
    const imageObjectArray = (req.files || []).map(file => {
      return file.url;
    });

    //const images = req.file.url;
    console.log(imageObjectArray);

    Post.create({ text, author, images: imageObjectArray })
      .then(post => {
        console.log("post has been created", post),
          res.redirect("/post/userPostList");
      })
      .catch(error => {
        next(error);
      });
  }
);

//single post

router.get("/:postId", (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .populate("author images")
    .then(post => {
      console.log(post);
      res.render("Post/singlePost", { post });
    })
    .catch(error => {
      next(error);
    });
});

//edit a post

router.get("/:postId/edit", routeGuard, (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then(post => {
      if (post.author === req.session.user) {
        res.render("Post/editPost", { post });
      } else {
        next(new Error("User has no permission to edit post."));
      }
    })
    .catch(error => {
      next(error);
    });
});

router.post("/:postId/edit", routeGuard, (req, res, next) => {
  const postId = req.params.postId;

  Post.findOneAndUpdate(
    {
      _id: postId,
      author: req.session.user
    },
    {
      text: req.body.text
    }
  )
    .then(data => {
      res.redirect(`/post/${postId}`);
    })
    .catch(error => {
      next(error);
    });
});

router.post("/:postId/delete", routeGuard, (req, res, next) => {
  const postId = req.params.postId;
  Post.findOneAndDelete({
    _id: postId,
    author: req.session.user
  })
    .then(data => {
      res.redirect(`/post/list`);
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
