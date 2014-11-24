PostsIndexController = RouteController.extend({
  waitOn: function () {
      return [Meteor.subscribe('posts_index'), Meteor.subscribe('comments')];
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});