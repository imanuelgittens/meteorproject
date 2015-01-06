/*****************************************************************************/
/* Comments Methods */
/*****************************************************************************/

Meteor.methods({
    'insertComment': function(comment, captchaData){
        Comments.insert(comment);     
    },
    'showComments': function(){
        Comments.find();   
    }
});