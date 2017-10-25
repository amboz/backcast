// Your first goal is to build the VideoListView and its partner component, 
//   VideoListEntryView, that together render whatever list of videos is supplied to them. 

// Get the VideoListView to render
// Pass the data from exampleVideoData into the VideoListView
// Refactor the VideoListView to dynamically render one VideoListEntryView for each video object in exampleVideoData,
  //  passing in the video data to VideoListEntryView
// Refactor the VideoListEntryView to dynamically render based on the video object it receives
// Make sure the tests for VideoListView and VideoListEntryView are passing.

//TEMPLATE:
// This process results a template function that you can invoke within your Backbone View,
// passing in a context object with the appropriate values to substitue into the template HTML.

var VideoListView = Backbone.View.extend({
  render: function() {
    //detach empties out the event listeners on the selected elements, not the DOM itself
    this.$el.children().detach();
    this.$el.html(this.template());
    //iterate over each video in the collection, invoking cb renderVideo (see below)
    this.collection.each(this.renderVideo, this);
    return this;
  },
  //will create new entry views for each video in the collection *remember we passed collection video data*
    //set their model to video, render them, grab their el element
      //append these el's to the DOM
  renderVideo: function(video) {
    this.$('.video-list').append(
      new VideoListEntryView({
        model: video
      }).render().el
    );
  },

  template: templateURL('src/templates/videoList.html')

});
