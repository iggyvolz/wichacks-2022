all: animalfacts.js
%.js: %.csv
	php csvtojs.php < $< > $@