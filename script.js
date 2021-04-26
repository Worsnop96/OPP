"use strict";

const movie = {
  name: "harry popoter",
  id: 1,
  play() {
    return `${this.name} is playing`;
  },
};

console.log(movie.play());

class Movie {
  constructor(name, id) {
    this.id = id;
    this.name = name;
  }

  presentation() {
    return `it's ${this.name} and the id is ${this.id} `;
  }
}

class Serie extends Movie {
  constructor(name, id, chap) {
    super(name, id);
    this.chap = chap;
  }

  playChapter() {
    return `this is ${this.name} and you're playing the chapter ${this.chap}`;
  }
}

const movie1 = new Movie("batman", 1);
console.log(movie1);

const serie1 = new Serie("custer", 4, 6);
console.log(serie1.playChapter());
