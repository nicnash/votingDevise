import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),

  actions: {
    authenticate: function() {
      var data = this.getProperties('identification', 'password');
      return this.get('session').authenticate('authenticator:devise', data).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    }
  }
});