# House Search

#### Team Project for Epicodus, 09/02/2016

#### By Katie Tuttle, Rony Nasr, Stephanie Gurung & Shradha Pulla

## Description

This program serves as a basic real estate app that allows users to favorite, buy, and sell houses. Houses can be viewed by price or by sqft, and detailed maps of nearby amenities are available for each house. Administrators have the ability to create, update, and delete existing houses.

## Setup/Installation Requirements

This program can only be accessed on a computer with Git and Atom software, and Node.js, Ember CLI, PhantomJS, npm, and bower globally installed.

* Clone this repository
* To set up package managers, type the following into the command line:
  * $ npm install
  * $ bower install
* To view the webpage, type the following:
  * $ ember server
  * Open Chrome and type in the following address: http://localhost:4200

## Known Bugs

No known bugs.

## Specifications

The program should... | Example Input | Example Output
----- | ----- | -----
Have CRUD functionality for all houses on admin page | --- | ---
Show all houses for sale & already sold on index | --- | ---
Show locations of all houses on google maps, on index | --- | ---
Show house details modal when a house tile is clicked on | --- | ---
Show amenities (schools, grocery stores, hospitals) within 1000 meters of selected house on google maps, on the house modal | --- | ---
Allow user to favorite a house | --- | ---
Show all favorite houses on favorite houses page | --- | ---
Sort houses by price (ascending or descending) on index | --- | ---
Sort houses by sq. ft. (ascending or descending) on index | --- | ---
Allow user to buy a house | --- | ---
Show all bought houses on houses bought page | --- | ---
Display house with a SOLD sign on index when bought | --- | ---
Display mortgage price on house-tile | --- | ---

## Future Features

HTML | CSS | EmberJS
----- | ----- | -----
--- | --- | Toggle new house/update house forms & map buttons
--- | --- | Create a service/computed property to change color of map house icon when the house tile is hovered on
--- | --- | Connect a real estate API so houses don't have to be hard-coded in

## Support and Contact Details

Contact Epicodus for support in running this program.

## Technologies Used

* HTML
* CSS
* Bootstrap
* Font Awesome
* EmberJS

## Further Reading and Useful Links

* Make use of the many generators for code, try `ember help generate` for more details
* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions:
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Links

Git Hub Repository: https://github.com/RonyNasr/house-search

## License

*This software is licensed under the GPL license.*

Copyright (c) 2016 Katie Tuttle, Rony Nasr, Stephanie Gurung & Shradha Pulla
