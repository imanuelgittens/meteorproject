/*****************************************************************************/
/* PostsIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.PostsIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.PostsIndex.helpers({
    posts: function(){
        return Posts.find(); 
    }
});

/*****************************************************************************/
/* PostsIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.PostsIndex.created = function () {
};

Template.PostsIndex.rendered = function () {
};

Template.PostsIndex.destroyed = function () {
};