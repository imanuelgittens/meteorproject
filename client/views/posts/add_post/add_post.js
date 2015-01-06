/*****************************************************************************/
/* AddPost: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.AddPost.events({
    /*
     * Example:
     *  'click .selector': function (e, tmpl) {
     *
     *  }
     */
    
    
    
    'submit form': function(event, template){
        event.preventDefault();
        var title = template.find('[id=postTitle]').value;
        var snippet = template.find('[id=postSnippet]').value;
        var body = template.find('[id=postBody]').value;
        var image = template.find('[id=fImage]').value;
        
        Meteor.call('verifyImage', image, function(error, result){
            if (error) {
                alert('There was an error please ensure you have uploaded an image file.');
            } else {
                Meteor.call('uploadImage', image, function(error, result){
                    if(error){
                        alert('There was an error: '+error.reason);   
                    }
                    else{
                        alert('Image Uploaded!');   
                    }
                });
            }
        })
        
        /*alert(title + body + snippet);*/
    }
    
    /*'change #fImage': function(event, template) {

        var image = template.find('[id=fImage]').value;
        var lastIndex = image.lastIndexOf("\\");
        if (lastIndex >= 0) {
            image = image.substring(lastIndex + 1);
        }
        if (!image.match(/\.(jpg|jpeg|png|gif)$/)) {
            alert("not an image");
        } else {
            FS.Utility.eachFile(event, function(file) {
                var fileObj = new FS.File(file);
                Uploads.insert(fileObj, function(err) {
                    console.log(err);
                });
                console.log("File Uploaded")
            });
        }
    }*/

    /*,

    'uploadFeaturedImage': function(fileObj){
        Uploads.insert(fileObj, function(err){
            console.log(err);
        });   
    }*/

    /*'submit form': function(event, template) {
        event.preventDefault();

        var user = Meteor.userId();
        var title = template.find('[id=postTitle]').value;
        var snippet = template.find('[id=postSnippet]').value;
        var body = template.find('[id=postBody]').value;

        var imageToUpload = template.find('[id=fImage]');
        var fileObj = new FS.File(imageToUpload);
        var image = template.find('[id=fImage]').value;
        var lastIndex = image.lastIndexOf("\\");
        if (lastIndex >= 0) {
            image = image.substring(lastIndex + 1);
        }
        if (!image.match(/\.(jpg|jpeg|png|gif)$/)) {
            alert("not an image");
        } else {
            var post = {
                title: title,
                snippet: snippet,
                body: body,
                featured_image: '/blog/featured_image/' + image,
                date: new Date(),
                author: user
            }

            // Meteor.call('uploadFeaturedImage', fileObj);
            Meteor.call('addPost', post);
            console.log('Post added!');
        }
    }*/
});

Template.AddPost.helpers({
    /*
     * Example:
     *  items: function () {
     *    return Items.find();
     *  }
     */
});

/*****************************************************************************/
/* AddPost: Lifecycle Hooks */
/*****************************************************************************/
Template.AddPost.created = function() {};

Template.AddPost.rendered = function() {};

Template.AddPost.destroyed = function() {};