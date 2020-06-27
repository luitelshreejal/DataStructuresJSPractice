var Mammal = function(name) {
    this.name = name;
  };
  
  Mammal.prototype.get_name = function() {
    return this.name;
  };
  
  let dag = new Mammal("MYG");
  
  console.log(dag);
  
  Mammal.prototype.says = function() {
    return this.saying || "";
  }
  
  var myMammal = new Mammal("Herb the Mammal");
  
  var myMammal = new Mammal("Cheerio"); //notice that the value of this.name changes with each new instance
  
  
  var name = myMammal.get_name();
  
  console.log(name);
  
  var Cat = function(name) {
    this.name = name;
    this.saying = "meow";
  };
  
  Cat.prototype = new Mammal();
  //that replaces Cat.prototype with an instance of mammal so everything is inherited directly: Consider that Mammal.prototype.says is also inherited along with everything else. 
  
  //Below you will notice that the particular instance of "cat" will be different from Mammal hence the prototype.purr and not prototype. Separate property of cat but not mammal
  
  Cat.prototype.purr = function(n) {
    var i, s = "";
    for (i = 0; i < n; i++) {
      if (s) {
        s += "-";
      }
      s += "r";
      }
      return s;
  
    };
  
  Cat.prototype.get_name = function() {
    return this.says() + " " + this.name + " " + this.says();
  };
  
  var myCat = new Cat("Henrietta");
  var says = myCat.says();
  var purr = myCat.purr(5);
  var name = myCat.get_name();
  console.log(name);
  
  
  
  