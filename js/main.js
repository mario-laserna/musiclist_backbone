Sfotipy = {};

Sfotipy.Song = Backbone.Model.extend({});

Sfotipy.Songs = Backbone.Collection.extend({
	model: Sfotipy.Song
});

Sfotipy.SongView = Backbone.View.extend({
	events: {
		'click .action.icon-add': 'add'
	},

	tagName: 'li',

	className: 'item border-bottom',

	template: Handlebars.compile($("#song-template").html()),
	
	initialize: function(){
		this.listenTo(this.model, "change", this.render, this);
	},

	render: function(){
		var song = this.model;
		var name = song.get("name");
		var author = song.get("author");

		var html = this.template(this.model.toJSON());
		this.$el.html(html);
	},

	add: function(e) {
		alert(this.model.get("name"));
	}
});

Sfotipy.Router = Backbone.Router.extend({
	routes:{
		"": "index",
		"album/:name": "album",
		"profile/:username" : "profile"
	},

	index: function(){
		console.log("estoy en el index");
	},

	album: function(name){
		console.log("album: " + name);
	},

	profile: function(username){
		console.log("perfil: " + username);
	}
});

Sfotipy.app = new Sfotipy.Router();
Backbone.history.start();

window.Sfotipy = Sfotipy;