/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {name: 'Home'});
Router.route('/blog', {name: 'posts.index'});
Router.route('/blog/:_id', {name: 'post.detail'});

Router.route('/login', {name: 'Login'});
Router.route('/register', {name: 'Register'});
