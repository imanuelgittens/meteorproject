/*****************************************************************************/
/* Contacts Methods */
/*****************************************************************************/

Meteor.methods({
    'sendEmail': function(sender, subject, message) {
        Email.send({
            from: sender,
            to: 'gittensimanuel@gmail.com',
            subject: subject,
            text: message
        });
    }
});