import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Example, cat } from './backend-code';

let example = new Example();

$(document).ready(function() {

  example.introduction = function() {
    $("#test").append(`<br>My name is ${this.name}`);
  }

  example.introduction2 = function() {
    $("#test").append(`<br>My name is ${this.name}`);
    function doThis() {
      try {$("#test").append(`<br>My name is ${this.name}`);}
      catch(error) {$("#test").append(`<br>error: ${error.message}`);}
    }
    doThis();
  }

  example.introduction3 = function() {
    $("#test").append(`<br>My name is ${this.name}`);
    let that = this;
    function doThis() {
      try {$("#test").append(`<br>My name is ${that.name}`);}
      catch(error) {$("#test").append(`<br>error: ${error.message}`);}
    }
    doThis();
  }

  example.introduction4 = function() {
    $("#test").append(`<br>My name is ${this.name}`);
    let doThis = () => { 
      try {$("#test").append(`<br>My name is ${this.name}`);}
      catch(error) {$("#test").append(`<br>error: ${error.message}`);}
    }
    doThis();
  }

  function welcome(name) {
    return function(color) {
      $("#test").append(`<br>${name}'s favorite color is: ${color}`);
    }
  }

  example.introduction();
  example.exampleMethod();
  example.introduction();
  example.introduction2();
  example.introduction3();
  example.introduction4();
  let holdenDude = welcome(`${example.name} the dude's`);
  console.log(holdenDude);
  holdenDude();
  holdenDude("green, followed by purple then pink");

  let olive = cat;
  $("#test").append(`<br>${olive.meowLevel}`);
  olive.setLoudness();
  cat.petSmall = cat.pet(5);
  cat.petMedium = cat.pet(7);
  cat.petLarge = cat.pet(10);

  //testing pet 'function factory' 
  setTimeout(function(){
    olive.petSmall('Pur!');
    setTimeout(function(){
      olive.petMedium('Purr!');
      setTimeout(function(){
        olive.petLarge('Purrr!');
      }, 5000);
    }, 5000);
  }, 5000);
  
});
