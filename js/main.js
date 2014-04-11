Sfotipy = {};

Sfotipy.Song = Backbone.Model.extend({});

Sfotipy.SongView = Backbone.View.extend({
	tagName: "li",
	className: "item border-bottom",

	render: function(){
		var song = this.model;
		var name = song.get("name");
		var author = song.get("author");

		this.$el.html("<span>" + author + "</span> - <span>" + name + "</span");
	}
});

window.Sfotipy = Sfotipy;