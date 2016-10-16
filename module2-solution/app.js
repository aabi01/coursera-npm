angular.module('ShoppingList', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckoffService', ShoppingListCheckoffService);

// ToBuy Controller
ToBuyController.$inject = ['ShoppingListCheckoffService'];
function ToBuyController(ShoppingListCheckoffService){
    tobuy = this;
    
    tobuy.toBuyList = ShoppingListCheckoffService.getToBuyList();
    
    //Remove Item
    tobuy.removeItem = function(itemIndex){
        ShoppingListCheckoffService.removeItem(itemIndex);
    }
}


//Already Bought Controller
AlreadyBoughtController.$inject= ['ShoppingListCheckoffService'];
function AlreadyBoughtController(ShoppingListCheckoffService){
    alreadybought = this;
    
    alreadybought.alreadyBoughtList = ShoppingListCheckoffService.getBoughtList();
}

function ShoppingListCheckoffService(){
    service = this;
    
    //To Buy List
    toBuyList = [
        {
            itemName: 'Pepsi',
            itemQuantity: '5 bottles'
        },
        {
            itemName: 'Coke',
            itemQuantity: '2 bottles'
        },
        {
            itemName: 'Chips',
            itemQuantity: '10 packs'
        },
        {
            itemName: 'Snack',
            itemQuantity: '5 packs'
        },
        {
            itemName: 'Cookies',
            itemQuantity: '10 packs'
        }
    ];
    
    //AlreadyBought List
    boughtList = [];
    
    service.getToBuyList = function(){
        return toBuyList;
    }
    
    service.getBoughtList = function(){
        return boughtList;
    }
    
    //Remove Item from ToBuy List
    service.removeItem = function(itemIndex){
        item = toBuyList[itemIndex];
        boughtList.push(item);
        
        toBuyList.splice(itemIndex, 1);
    }
}