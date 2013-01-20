var BackboneRouter = Backbone.Router.extend({
  routes: {
    "":                 "main", //this will be http://your_domain/
    "profile":           "profile"  // http://your_domain/help
  },

  main: function() {
    // Your homepage code
    // for example: Session.set('currentPage', 'homePage');
    Session.set("currentPage", "main");
  },

  profile: function() {
    // Profile page
    Session.set("currentPage", "profile")
  }
});

Router = new BackboneRouter;
Meteor.startup(function () {
  Backbone.history.start({pushState: true});
});