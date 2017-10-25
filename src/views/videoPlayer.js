var VideoPlayerView = Backbone.View.extend({
  //add an event listener for select video
  initialize: function() {
    //********listenTo vs. on**********
    //listenTo is preferred syntax; listenTo allows us to call .stopListenTo() later
    // this.listenTo(this.collection, 'select', this.selectVideo());
      //below is simply an event listener, reference to the correct video comes from select fxn in video.js
    this.collection.on('select', this.selectVideo, this);
    //alternative to what is in app.js (passing model: this.collection.at(0) in app.js would be removed)
    //below line would be added
    // this.selectVideo(this.collection.at(0));
  },
  //must create selectVideo function rather than calling this.render directly in this listener
      //need to re-bind the model in this.render to the model with the event on it
  selectVideo: function(video) {
    this.model = video;
    this.render();
  },
  render: function() {
    //Replace hard-coded HTML with the correct template
    //Pass the model's attributes for use in the template (requires setting model as the first video in the collection when rendering)
      // this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
