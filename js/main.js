Sfotipy = {};

Sfotipy.Song = Backbone.Model.extend({});

Sfotipy.SongView = Backbone.View.extend({
	tagName: 'li',
	className: 'item border-bottom',
	template: Handlebars.compile($("#song-template").html()),
	
	render: function(){
		var song = this.model;
		var name = song.get("name");
		var author = song.get("author");

		var html = this.template(this.model.toJSON());
		this.$el.html(html);
	}
});

window.Sfotipy = Sfotipy;