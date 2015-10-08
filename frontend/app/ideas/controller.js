import Ember from 'ember';

export default Ember.Controller.extend({
	ideaData: function(){
        console.log('--------ideaData');
        var self = this;
        var ideas = self.get('model');
        console.log('ideas',ideas.content);
        return self.get('model').sortBy('count').reverse();
    }.property('model.@each.count'),
});
