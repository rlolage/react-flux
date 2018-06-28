//This file is mocking a web API by hitting hard coded data.
var profiles = require('./profileData').profiles;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(profile) {
	return profile.firstName.toLowerCase() + '-' + profile.lastName.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var ProfilesApi = {
	getAllProfiles: function() {
		return _clone(profiles); 
	},

	getProfileById: function(id) {
		var profile = _.find(profiles, {id: id});
		return _clone(profile);
	},
	
	saveProfile: function(profile) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the profile to the DB via AJAX call...');
		
		if (profile.id) {
			var existingProfileIndex = _.indexOf(profiles, _.find(profiles, {id: profile.id})); 
			profiles.splice(existingProfileIndex, 1, profile);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new profiles in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			profile.id = _generateId(profile);
			profiles.push(profile);
		}

		return _clone(profile);
	},

	deleteProfile: function(id) {
		console.log('Pretend this just deleted the profile from the DB via an AJAX call...');
		_.remove(profiles, { id: id});
	}
};

module.exports = ProfilesApi;