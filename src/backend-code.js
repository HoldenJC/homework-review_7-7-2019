import $ from 'jquery';

export class Example {
  constructor(){
    this.name = "Holden";
    this.favColor = "Green";
  }

  exampleMethod(){
    this.name = "HoldenJC";
  }
}

export let cat = {
  meowLevel: 10,
  setLoudness: function() {
    const loudnessLevel = setInterval(() => {
      this.meowLevel++;
      $("#test").append(`<br>${this.meowLevel}`);
      if (this.didYouGoDeaf() === true) {
        clearInterval(loudnessLevel);
        $("#test").append(`<br>You went deaf from all the meowing!`);
      }

    }, 1000);
  },
  didYouGoDeaf: function() {
    if (this.meowLevel < 20){
      return false;
    } else {
      return true; 
    }
  },
  pet: function(calmCat) {
    let that = this;
    return function(meow) {
      that.meowLevel -= calmCat;
      $("#test").append(`<br>The cat enjoyed the petting. ${meow}! Meowing desire goes down ${calmCat}!`);
      $("#test").append(`<br>${this.meowLevel}`);
    };
  }
};
