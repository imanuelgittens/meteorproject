/*****************************************************************************/
/* Posts Methods */
/*****************************************************************************/

Meteor.methods({
    /*
     * Example:
     *  '/app/posts/update/email': function (email) {
     *    Users.update({_id: this.userId}, {$set: {'profile.email': email}});
     *  }
     *
     */

    'addPost': function(post) {
        Posts.insert(post);
    },
    'verifyImage': function(image) {
        var lastIndex = image.lastIndexOf("\\");
        if (lastIndex >= 0) {
            image = image.substring(lastIndex + 1);
        }
        if (!image.match(/\.(jpg|jpeg|png|gif)$/)) {
            alert("Please upload an image file.");
            return false;
        } else {
            return true;
        }
    },
    'uploadImage': function(image) {
        var fileObj = new FS.File(image);
        Uploads.insert(fileObj, function(err) {
            if(err){
                return false;
            }
            else{
                return true;   
            }
            //console.log(err);
        });
        //alert("File Uploaded");
    }
});