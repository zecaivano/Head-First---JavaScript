function Robot (name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.maker = "ObjectsRUs"

Robot.prototype.speak = function () {
   console.log ("Warning warning!!");
}

Robot.prototype.makeCoffee = function (){
    console.log (this.name + " is making coffee.");
}

Robot.prototype.blinkLigths = function () {
    console.log("Blink blink!");
}

function SpaceRobot (name, year, owner, homePlanet) {
    this.name = name;
    this.year = year;
    this.owner = owner;
    this.homePlanet = homePlanet;
}

SpaceRobot.prototype = new Robot();

SpaceRobot.prototype.speak = function () {
    console.log (this.name + " says Sir, If I may venture an opinion...");
};

SpaceRobot.prototype.pilot = function () {
    console.log (this.name + " says Thrusters? Are they important?");
}

var robby = new Robot ("Robby", 1956, "Dr Morbius");
var rosie = new Robot ("Rosie", 1962, "George Jetson");
var c3po = new SpaceRobot ("C3PO", 1977, "Luke Skywalker", "Tattoine");
var simon = new SpaceRobot ("Simon", 2009, "Carla Diana", "Earth");

robby.onOffSwitch = true;
robby.makeCoffee = function () {
    console.log (this.name + "is fetching a coffee from Starbucks");
}

rosie.cleanHouse = function () {
    console.log ("Cleaning! Spic and Span soon...");
}

console.log (robby.name + " was made by " + robby.maker + " in " + robby.year + " and is owned by " + robby.owner);

robby.makeCoffee ();
robby.blinkLigths ();

console.log (rosie.name + " was made by " + rosie.maker + " in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse ();

c3po.speak();
c3po.pilot();
console.log (c3po.name + " was made by " + c3po.maker);

simon.makeCoffee();
simon.blinkLigths();
simon.speak();