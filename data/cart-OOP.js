function Cart(localStorageKey) {
  const cart = {
    cartItems: undefined,
  
    loadFromStorage(){
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey))
  
      if(!this.cartItems){
        this.cartItems =[{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 2,
          deliveryOptionId: '1'
        },{
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity: 1,
          deliveryOptionId: '2'
        }];
      }
  
    },
  
    saveToStorage(){
      localStorage.setItem(localStorageKey,JSON.stringify(this.cartItems));
    },
    
    addToCart(productId){
      let matchingItem;
      this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId === productId){
          matchingItem = cartItem;
        }
      });
    
      if(matchingItem){
        matchingItem.quantity +=1;
      }
    
      else{
        this.cartItems.push({
          productId: productId,
          quantity: 1,
          deliveryOptionsId: '1'
        });
      }
    
      this.saveToStorage();
    },
  
    removeFromCart(productId){
      this.cartItems.forEach((cartItem, index)=>{
        if(cartItem.productId === productId){
          this.cartItems.splice(index, 1);
        }
      });
    
      this.saveToStorage();
    },
  
    updateDeliveryOPtion(productId, deliveryOptionId){
      let matchingItem;
      this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId === productId){
          matchingItem = cartItem;
        }
      });
      matchingItem.deliveryOptionId = deliveryOptionId;
      this.saveToStorage();
    }
    
  };
  
  return cart;
}

const cart =Cart('cartItems');
const businessCart = Cart('businessCartItems');


cart.loadFromStorage();
businessCart.loadFromStorage();


console.log(cart);
console.log(businessCart);











