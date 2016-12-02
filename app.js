(function(){
'use strict';

var shoppingList = [
  {
    itemQuantity:"100",
    itemName:"Cookies"
  },
  {
    itemQuantity:"100",
    itemName:"CHips"
  },
  {
    itemQuantity:"10",
    itemName:"Banana"
  },
  {
    itemQuantity:"2",
    itemName:"Coke"
  },
  {
    itemQuantity:"3",
    itemName:"Noodles"
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
//shoppingShowList.itemName = "";
//shoppingShowList.itemQuantity ="";
//shoppingShowList.itemIndex = "";

shoppingShowList.items=shoppingListService.getToBuyItems();
//console.log("all items:",shoppingShowList.items);
shoppingShowList.buyToBoughtItems=function(quantity,name,itemIndex){
  //console.log("first Item:",shoppingShowList.items[itemIndex]);
  //try{
  shoppingListService.buyToBoughtItems(quantity,name,itemIndex);
  //console.log("length:",shoppingShowList.items.length);
  if (shoppingShowList.items.length == 0){

    shoppingShowList.message = shoppingListService.getMessage();


  };


};

}

boughtListController.$inject=['shoppingListService'];
function boughtListController(shoppingListService){
var shoppingShowList1 = this;
shoppingShowList1.items=shoppingListService.getBoughtItems();
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

service.getMessage=function () {
     return "Every thing is bought!!";

};

}

})();
