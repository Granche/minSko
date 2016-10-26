var mongoose = require("mongoose");
var Sko = require("../mongoose-models/sko.js");

module.exports = {

  modelArr: ["Adidas Superstar", "Bagheera Avenue Blac", "Adidas Originals Zx Flux", "Reebok", "Reebook Classic", "Converse", "Polecat","Björn Borg","Fila","Adidas Fitness","Pocs","Nike","Merelli","Viking","Mustang","Puma","Ecco","Duffy","Wesc","SuperFit","Vans","Sketchers","Vagabond","Espirit","Asics","Pox","Keen","Sportis","Kavat","Shepherd","Timberland","Emma","Stone","Johnnys","Eskimo","Duffy","Clark", "Access", "Louis Vuitton", "Wildflower", "Rieker", "Tommy Hillfiger", "SixtyNine"], 
  sizeArr: [33,34,35,36,37,38,39,40,41,42,43,44,45,46],
  colorArr: ["White","Black","Brown","Beige","Blue","Green","Orange","Turqoise","Yellow"],
  typeArr: ["Sneakers","Boots","Stövlar","Inomhus","Finskor","Sandaler"],
  priceArr: [149,299,249,349,399,449,499,549,599,649,699,749,799,849,899,949,999,1099,1049,1149,1199,1249,1299,1349,1399,1499,1549,1699,1799,1899,1999,1549,1649,1749,1849,1949],
  priceOffArr: [10,20,30,40,50,60,70,80,90], 
  boolArr: [true,false],

  smasher: function(){
    var randomSize = this.sizeArr[Math.floor(Math.random()*this.sizeArr.length)];
    var randomBool = this.boolArr[Math.floor(Math.random()*this.boolArr.length)];
    
    var enSko = new Sko({
      model: this.modelArr[Math.floor(Math.random()*this.modelArr.length)],
      sizes: [randomSize-2, randomSize-1, randomSize, randomSize+1,randomSize+2],
      color: [this.colorArr[Math.floor(Math.random()*this.colorArr.length)],this.colorArr[Math.floor(Math.random()*this.colorArr.length)],this.colorArr[Math.floor(Math.random()*this.colorArr.length)]],
      type: this.typeArr[Math.floor(Math.random()*this.typeArr.length)],
      price: this.priceArr[Math.floor(Math.random()*this.priceArr.length)],
      campaign: randomBool
    });

    return enSko;
  }
}

