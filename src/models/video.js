var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    //add the rest of the properties passed to props on model?
    this.set('kind', video.kind);
    this.set('etag', video.etag);
    this.set('snippet', video.snippet);
    this.set('channelTitle', video.channelTitle);
    this.set('liveBroadcastContent', video.liveBroadcastContent);
  },

  select: function() {
    this.trigger('select', this);
  }

});
