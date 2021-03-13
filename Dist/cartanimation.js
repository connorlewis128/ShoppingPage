$(document).ready(function(){
  $('#add-to-cart').on('click',function(){
    
    let button = $(this);
    let cart = $('.Cart');
    let cartTotal = cart.attr('data-totalitems');
    let newCartTotal = parseInt(cartTotal) + 1;
    
    button.addClass('sendtocart');
    setTimeout(function(){
      button.removeClass('sendtocart');
      cart.addClass('shake').attr('data-totalitems', newCartTotal);
      setTimeout(function(){
        cart.removeClass('shake');
      },500)
    },1000)
  })
})