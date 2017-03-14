/*var nombres = [];//arreglo vacío para almacenar nombres y apellidos
function Stack(){//función constructora para crear la pila de nombres y la pila de apellidos
 var almacen = [];

 this.push = function (element){
   almacen.push(element);
 };
 this.pop = function(){
   return almacen.pop();
 };
 this.peek = function(){
   return almacen [almacen.length-1];
 };
 this.isEmpty = function(){
   return almacen.length == 0;
 };
 this.size = function(){
   return almacen.length;
 };
 this.clear = function(){
   almacen = [];
 };
 this.print = function(){
   console.log(almacen.toString());
 };
}
var nombre = new Stack();
nombre.push("Adriana ");
nombre.push("Pilar ");
nombre.push("Gabriela ");
nombre.push("Pitt ");
nombre.push("Dafne ");

nombre.print();

var apellido = new Stack();
apellido.push("Hernández ");
apellido.push("Juárez ");
apellido.push("Flores ");
apellido.push("Gutiérrez ");
apellido.push("Fernández ");

apellido.print();
*/
var nombres = [];

function Stack(){

  var items = [];

  this.push = function(element){
    items.push(element);
  };
  this.pop = function(){
    return items.pop();
  };
  this.peek = function(){
    return items[items.length-1];
  };
  this.isEmpty = function(){
    return items.length == 0;
  };
  this.size = function(){
  return items.length;
  };
  this.clear = function(){
    items = [];
  };
  this.print = function(){
    console.log(items.toString());
  };
}

var nombre = new Stack();
nombre.push("Pitt");
nombre.push("Adriana");
nombre.push("Nash");
nombre.print();

var apellido = new Stack();
apellido.push("Valentine");
apellido.push("Hernandez");
apellido.push("House");
apellido.print();
