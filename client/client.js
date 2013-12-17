Messages = new Meteor.Collection("Messages");


Template.home.messages = function(){
    var rs = Messages.find({});
    console.log(rs);
    return rs;
  };