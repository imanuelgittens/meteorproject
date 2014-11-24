/*****************************************************************************/
/* Register: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Register.events({
  
	'submit form': function(event, template){
		event.preventDefault();
		var userEmail = template.find('#register-email').value;
		var userPassword = template.find('#register-password').value;
		Accounts.createUser({
			email: userEmail,
			password: userPassword,
		});
		Router.go('Home');
	}

});

Template.Register.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Register: Lifecycle Hooks */
/*****************************************************************************/
Template.Register.created = function () {
};

Template.Register.rendered = function () {
};

Template.Register.destroyed = function () {
};