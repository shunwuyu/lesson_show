function Parent () {
  this.name = 'kevin';
}

Parent.prototype.getName = function () {
  console.log(this.name);
}

function Child () {

}

Child.prototype = new Parent();

var child1 = new Child();

child1.getName();