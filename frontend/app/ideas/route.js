import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin,{
     model:function() {
        var asdf = this.store.findAll('idea');
        console.log('asdf',asdf);

        return this.store.findAll('idea');
    }
});

