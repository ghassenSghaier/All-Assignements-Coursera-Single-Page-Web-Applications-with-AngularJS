(function () {
'use strict';
angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController)
.provider('ShoppingList', ShoppingListProvider)
ShoppingListController.$inject = ['$scope','ShoppingList'];
function ShoppingListController($scope,ShoppingList){
  var list = this;
  list.items = ShoppingList.getItems();
  list.boughtItems = [];
  $scope.$watch(function() {
    try
    {
      list.boughtItems = ShoppingList.getBoughtItems();
      list.errorMessage2 = "";
    }
    catch(error)
    {
      list.errorMessage2 = error.message;
    }
 });
   list.removeItem = function(itemIndex){
   try{
     ShoppingList.removeItem(itemIndex);
   }
   catch (error)
   {
     list.errorMessage1 = error.message;
   }
  }
  list.addItem = function(itemIndex){
  var itemName = list.items[itemIndex].name;
  var itemQuantity = list.items[itemIndex].quantity;
  console.log(itemName);
  console.log(itemQuantity);
  ShoppingList.addItem(itemName,itemQuantity);
  }
}
// If not specified, maxItems assumed unlimited
function ShoppingListService() {
  var service = this;
  var items = [{
    name: 'sugar',
    quantity: 12
  },{
    name: 'coffee',
    quantity: 24
  },{
    name: 'milk',
    quantity: 5
  },{
    name: 'beef',
    quantity: 5
  }];
  var boughtItems = [];
  service.addItem = function(itemName, quantity) {
	var item = {
		name: itemName,
		quantity: quantity
	};
  console.log(item);
        boughtItems.push(item);
  }
	service.removeItem = function (itemIndex) {
      items.splice(itemIndex, 1);
      if(items.length == 0){
        throw new Error("everything is bought!");
    }
  }
	service.getItems = function () {
		return items;
	};
	service.getBoughtItems = function () {
	if(boughtItems.length == 0){
      throw new Error("Nothing is bought yet !");
    }
    return boughtItems;
  };
}
function ShoppingListProvider() {
  var provider = this;
  provider.$get = function () {
    var shoppingList = new ShoppingListService();
    return shoppingList;
}
}})();
