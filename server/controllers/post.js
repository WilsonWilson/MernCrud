const Post = require("../models/post");
const slugify = require("slugify");

exports.create = (req, res) => {
  const {
    name,
    type,
    abv,
    brewery,
    brewCity,
    brewState,
    brewSize1,
    brewSize1Price,
    brewSize2,
    brewSize2Price,
    brewSize3,
    brewSize3Price,
    brewSize4,
    brewSize4Price,
    brewSize5,
    brewSize5Price,
    description,
    user,
  } = req.body;
  const slug = slugify(name);

  // validate
  switch (true) {
    case !name:
      return res.status(400).json({ error: "Please enter the name of this beer" });
      break;
    case !type:
      return res.status(400).json({ error: "Please enter what type of beer this is (e.g. IPA, Lager, Stout, etc)" });
      break;
    case !brewSize1:
      return res.status(400).json({ error: "Please enter what size this beer is served as (e.g. pint, 12oz., etc)" });
      break;
    case !brewSize1Price:
      return res.status(400).json({ error: "Please enter the price of this beer." });
      break;
    default:
      break;
  }

  // Create new post
  Post.create(
    {
      name,
      type,
      abv,
      brewery,
      brewCity,
      brewState,
      brewSize1,
      brewSize1Price,
      brewSize2,
      brewSize2Price,
      brewSize3,
      brewSize3Price,
      brewSize4,
      brewSize4Price,
      brewSize5,
      brewSize5Price,
      description,
      slug,
      user,
    },
    (err, post) => {
      if (err) {
        console.log(err);
        res.status(400).json({ error: "Duplicate post. Try another name" });
      }
      res.json(post);
    }
  );
};

exports.list = (req, res) => {
  // get all posts from DB
  Post.find({})
    .limit(10)
    .sort({ createdAt: -1 })
    .exec((err, posts) => {
      if (err) console.log(err);
      res.json(posts);
    });
};

exports.read = (req, res) => {
  const { slug } = req.params;
  Post.findOne({ slug }).exec((err, post) => {
    if (err) console.log(err);
    res.json(post);
  });
};

exports.update = (req, res) => {
  const { slug } = req.params;
  const {
    name,
    type,
    abv,
    brewery,
    brewCity,
    brewState,
    brewSize1,
    brewSize1Price,
    brewSize2,
    brewSize2Price,
    brewSize3,
    brewSize3Price,
    brewSize4,
    brewSize4Price,
    brewSize5,
    brewSize5Price,
    description,
    user,
  } = req.body;
  Post.findOneAndUpdate(
    { slug },
    {
      name,
      type,
      abv,
      brewery,
      brewCity,
      brewState,
      brewSize1,
      brewSize1Price,
      brewSize2,
      brewSize2Price,
      brewSize3,
      brewSize3Price,
      brewSize4,
      brewSize4Price,
      brewSize5,
      brewSize5Price,
      description,
      slug,
      user,
    },
    { new: true }
  ).exec((err, post) => {
    if (err) console.log(err);
    res.json(post);
  });
};

exports.remove = (req, res) => {
  const { slug } = req.params;
  Post.findOneAndRemove({ slug }).exec((err, post) => {
    if (err) console.log(err);
    res.json({
      message: "Post Deleted",
    });
  });
};
