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

window.Sfotipy = Sfotipy;