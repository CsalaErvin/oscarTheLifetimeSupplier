function oscarTheLifetimeSupplier () {
  var age = prompt('How old are you?')
	var lifeTime = prompt('How long would you like to live?')
	var snack = prompt('What\'s your favorite snack?')
	var quantity = prompt('How many packages do you eat from your favorite snack weekly?')
	var need = (lifeTime - age) * 52 * quantity;
  alert('You\'ll need ' + need + ' pack ' + snack + ' until you are ' + lifeTime + ' years old.');
  return;
};

oscarTheLifetimeSupplier();