/*****************************************************************************/
/* Comments Methods */
/*****************************************************************************/

Meteor.methods({
    'insertComment': function(comment){
        Comments.insert(comment);   
    }
});