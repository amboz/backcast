var AppView = Backbone.View.extend({

  //this specifies the node here as the DOM element with id = app
    //this is the only time you can hard code el with a DOM selector (when it will not change/is the parent element)
    //cannot do this with the list view, for example, since 5 DOM elements exist with the same class name
  el: '#app',

  initialize: function() {
    //must pass exampleVideoData (on window) to this instantiation of the collection
    this.videos = new Videos(exampleVideoData);
    this.render();
  },

  render: function() {
    //replaces DOM node of this view (this.$el, see above) with the HTML in this.template()
      //before rendering, HTML was the original string provided
    this.$el.html(this.template());
    //render the video list, specify el prop as correct selector from app.html
    new VideoListView({
      //this refers to the app view, rather than searching for all nodes with class list
      el: this.$('.list'),
      //pass data to the VLV by specifying a collection
      collection: this.videos
    }).render();

    //******render function on these views can also be put in init of the views themselves
    new VideoPlayerView({
      el: this.$('.player'),
      //setting model as first video in the collection
      model: this.videos.at(0),
      //must add the collection so the player can listen for events on videos (play the one we clicked)
        //alternative: add the event listener in init of app.js
      collection: this.videos
    }).render();

    new SearchView({
      collection: this.videos,
      el: this.$('.search'),
    }).render();
    //not necessary but convention to return if you want to chain fxns together
    return this;
  },

  template: templateURL('src/templates/app.html')

});
