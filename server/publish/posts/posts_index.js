/*****************************************************************************/
/* PostsIndex Publish Functions
/*****************************************************************************/

Meteor.publish('posts_index', function () {
  return Posts.find();
});