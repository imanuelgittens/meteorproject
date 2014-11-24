/*****************************************************************************/
/* CommentsIndex Publish Functions
/*****************************************************************************/

Meteor.publish('comments', function (id) {
  return Comments.find({'postId': id});
});