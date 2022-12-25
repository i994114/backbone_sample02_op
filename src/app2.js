var Backbone = require('../node_modules/backbone/backbone');
var $ = require('../node_modules/jquery/dist/jquery');
var _ = require('../node_modules/underscore/underscore');

//------
//Model
//------
var MyModel2 = Backbone.Model.extend({
  defaults: {
    player: 'default player',
    profile: 'default profile',
    shot: 0
  },
  initialize: function(attrs, options) {
    console.log("attrs", attrs);
    console.log("options", options);
  },
  validate: function(attrs) {
    if (attrs.text.length === 0) {
      return '入力されていません';
    }
  },
  method: function() {
    //今回は処置なし
  }
});
var myModel2 = new MyModel2({player: 'kaz', profile: '2022年関東大会　第110位', shot: 0});
//------
//View
//------
var MyView2 = Backbone.View.extend({
  events: {
    "click .js-click-shot" : "shotCountUp",
  },
  
  initialize: function() {
    _.bindAll(this, "render");
    this.model.bind("change", this.render);
    this.render();
  },
  
  shotCountUp: function() {
    this.model.set({shot: this.model.get('shot') + 1});
  },

  render: function() {
    console.log('render');
    var compiled2 = _.template($('#template2').html());
    $(this.el).html(compiled2({
      player: this.model.get('player'),
      profile: this.model.get('profile'),
      shot: this.model.get('shot')
    }));
  }
});
new MyView2({el: $("#app2"), model: myModel2});