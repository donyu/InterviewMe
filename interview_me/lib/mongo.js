// Topics = new Meteor.Collection("topics");

// var names = ["Recursion",
// 			"Linked Lists",
// 			"Stacks & Queues",
// 			"Trees & Graphs",
// 			"Dynamic Programming",
// 			"Databases",
// 			"Brain Teasers"];
// var scores = ["1/3",
// 			  "2/2",
// 			  "1/1",
// 			  "0/0",
// 			  "0/1",
// 			  "2/3",
// 			  "3/3"];
// for (var i = 0; i < names.length; i++) {
// 	Topics.insert({name: names[i], score: scores[i]});
// }

// Template.topics.topics = function() {
// 	return Topics.find({}, {sort: {score: -1, name: 1}});
// };

// Template.topics.selected = function() {
// 	return Session.equals("selected_topic", this._id) ? "selected" : '';
// };