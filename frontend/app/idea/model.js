import DS from 'ember-data';

var Idea = DS.Model.extend({
	name:  DS.attr('string'),
	description:  DS.attr('string'),
	picture:  DS.attr('string'),
	count:  DS.attr('number', { defaultValue: 0 })
});

export default Idea;
