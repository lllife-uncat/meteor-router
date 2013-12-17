Router.configure({
  layoutTemplate: 'layout'
});

var contact = {
  path: '/contact',
  template: 'contact'
};

var about = {
  path: '/about',
  template: 'about'
};

var home = {
  path: '/home',
  template: 'home'
};


Router.map(function () {
  this.route("/", home);
  this.route('contact', contact);
  this.route('about', about);
  this.route('home', home);
});
