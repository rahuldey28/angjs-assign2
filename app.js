(function(){
'use strict';

var shoppingList = [
  {
    itemQuantity:"100",
    itemName:"Cookies"
  },
  {
    itemQuantity:"100",
    itemName:"Chips"
  },
  {
    itemQuantity:"10",
    itemName:"Bananas"
  },
  {
    itemQuantity:"2",
    itemName:"Coke Bottle"
  },
  {
    itemQuantity:"3",
    itemName:"Noodle Packs"
  }

];

var toBuyitems = shoppingList;
var boughtItems = [];

angular.module('CheckOffApp',[])
.controller('toBuyListController',toBuyListController)
.controller('boughtListController',boughtListController)
.service('shoppingListService',shoppingListService);

toBuyListController.$inject=['shoppingListService'];
function toBuyListController(shoppingListService){
var shoppingShowList = this;

shoppingShowList.items=shoppingListService.getToBuyItems();

shoppingShowList.buyToBoughtItems=function(quantity,name,itemIndex){
shoppingListService.buyToBoughtItems(quantity,name,itemIndex);
//console.log("list1Length:",shoppingListService.getMessage());

};

}

boughtListController.$inject=['shoppingListService'];
function boughtListController(shoppingListService){
var shoppingShowList = this;
shoppingShowList.items=shoppingListService.getBoughtItems();
//console.log("list2Length:",shoppingListService.getMessage());

}


function shoppingListService() {
  var service = this;

service.buyToBoughtItems=function(quantity,itemName,itemIndex){
  var item = {
        itemName: itemName,
        itemQuantity: quantity
      };


   toBuyitems.splice(itemIndex, 1);
   boughtItems.push(item);
};

service.getToBuyItems = function () {
    return toBuyitems;
  };

service.getBoughtItems = function () {
      return boughtItems;
    };



}

})();
