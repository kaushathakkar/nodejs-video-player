exports.getVideos = (req, res) => {
  model.Video.findAll({
    where: { 'status': true },
    order: [['id', 'ASC']],
  }).then(data => {
    res.render("home", { videos: data });
  }).catch(err => {
    console.log(err);
  });
}