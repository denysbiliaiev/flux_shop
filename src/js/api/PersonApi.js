"use strict"

var _ = require('lodash');

var PersonApi = {

  data: {
    persons: [
      {age: "2", firstName: "z", gender: "man", lastName: "b", phone: "113"},
      {age: "5", firstName: "c", gender: "man", lastName: "c", phone: "114"},
      {age: "3", firstName: "a", gender: "man", lastName: "b", phone: "113"},
      {age: "7", firstName: "b", gender: "man", lastName: "z", phone: "117"}
    ],
  },

  list: function() {
    return this.data.persons;
  },

  create: function(person) {
    this.data.persons.push(person);
    return this.data.persons;
  },

  update: function(id) {
    var person = _.find(this.data.persons, {id: id});
    var index = _.indexOf(this.data.persons, existingPerson);
    this.data.persons.splice(index, 1, person);
  },

  delete: function(id) {
    var person = _.find(this.data.persons, {id: id});
    var index = _.indexOf(this.data.persons, existingPerson);
    this.data.persons.splice(index, 1);
  }
};

module.exports = PersonApi;