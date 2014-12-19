/*****************************************************************************/
/* Contact: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Contact.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
    'submit form': function(event, template){
        var senderEmail = template.find('[id=contactEmail]').value;
        var subject = template.find('[id=contactSubject]').value;
        var message = template.find('[id=contactMsg]').value;
        Meteor.call('sendEmail', senderEmail, subject, message);
    }
});

Template.Contact.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Contact: Lifecycle Hooks */
/*****************************************************************************/
Template.Contact.created = function () {
};

Template.Contact.rendered = function () {
};

Template.Contact.destroyed = function () {
};