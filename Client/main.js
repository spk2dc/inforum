Router.configure({
	layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function(){this.render('Main');});
Router.route('/:id', function() {
  this.render('Main');
  var id = this.params.id;
});

if (Meteor.isClient) {

}
