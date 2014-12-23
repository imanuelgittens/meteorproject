/*****************************************************************************/
/* Comments Methods */
/*****************************************************************************/

Meteor.methods({
    'insertComment': function(comment){
        Comments.insert(comment);   
    },
    'showComments': function(){
        Comments.find();   
    }
});