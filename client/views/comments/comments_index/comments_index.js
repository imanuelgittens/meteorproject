/*****************************************************************************/
/* CommentsIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CommentsIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.CommentsIndex.helpers({
  comments: function(){
        return Comments.find();
      /*Meteor.call('showComments')*/
    }
});

/*****************************************************************************/
/* CommentsIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.CommentsIndex.created = function () {
};

Template.CommentsIndex.rendered = function () {
};

Template.CommentsIndex.destroyed = function () {
};