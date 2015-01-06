/*****************************************************************************/
/* CommentSubmit: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CommentSubmit.events({
    'submit form': function(event, template) {
        event.preventDefault();
        var form = template.find('form');
        var comment = {
            firstName: $(event.target).find('[name=first_name]').val(),
            lastName: $(event.target).find('[name=last_name]').val(),
            comment: $(event.target).find('[name=comment]').val(),
            submitted: new Date(),
            postId: template.data._id
        };

        var captchaData = {
            captcha_challenge_id: Recaptcha.get_challenge(),
            captcha_solution: Recaptcha.get_response()
        };

        Meteor.call('verifyCaptcha', captchaData, function(error, result) {
            if (error) {
                alert('There was an error: ' + error.reason);
            } else {
                Meteor.call('insertComment', comment);
                $(function() {
                    $(".comment-alert").show();
                    setTimeout(function() {

                        $(".comment-alert").hide();
                    }, 2000);
                });
                form.reset();
            }
        });

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