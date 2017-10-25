var VideoListEntryView = Backbone.View.extend({
  //create a click event
    //the events hash and the corresponding handler function are the controlling code in MVC
    //this type of event+method defining is an alternative to an .on event handler
    //***player will be listening for the event***
  events: {
    'click .video-list-entry-title': 'titleClickHandler'
  },

  //when the title is clicked, select the model
  //model is available to use because we passed it when we instantiated this view in app.js
  titleClickHandler: function () {
    console.log('clicked!');
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  // titleClickListener: function() {
  //   var context = this;
  //   var title = this.$('.video-list-entry-title');
  //   console.log(title);
  //   // should call select on the model when the title is clicked
  //   title.on('click', function () {
  //     this.model.select();
  //     //removing selected model from collection
  //     var selected = this.collection.models.remove(this.model);
  //     //adding selected model to top of collection
  //     this.collection.unshift(selected);
  //   }, this);

  template: templateURL('src/templates/videoListEntry.html')

});
