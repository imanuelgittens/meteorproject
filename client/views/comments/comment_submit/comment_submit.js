/*****************************************************************************/
/* CommentSubmit: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CommentSubmit.events({
    'submit form': function(event, template) {
        event.preventDefault();
        var comment = {
            firstName: $(event.target).find('[name=first_name]').val(),
            lastName: $(event.target).find('[name=last_name]').val(),
            comment: $(event.target).find('[name=comment]').val(),
            submitted: new Date(),
            postId: template.data._id
        };  
        
        Meteor.call('insertComment', comment);

    }
});

Template.CommentSubmit.helpers({
    /*
     * Example:
     *  items: function () {
     *    return Items.find();
     *  }
     */
});

/*****************************************************************************/
/* CommentSubmit: Lifecycle Hooks */
/*****************************************************************************/
Template.CommentSubmit.created = function() {};

Template.CommentSubmit.rendered = function() {};

Template.CommentSubmit.destroyed = function() {};