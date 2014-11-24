PostDetailController = RouteController.extend({
  waitOn: function () {
      var id = this.params._id;
      return [Meteor.subscribe('post_detail', id), Meteor.subscribe('comments', id)];
  },

  data: function () {
      var id = this.params._id;
      return Posts.findOne({'_id': id});
  },

  action: function () {
    this.render();
  }
});