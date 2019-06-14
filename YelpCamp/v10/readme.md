#YelpCamp

* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each Campground has:
* Name
* Image

#Creating New Campgrounds
* Set up new campground POST route
* Add in body-parser
* Set up route to show form
* Add basic unstyled form

#Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

#Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

#Add Mongoose
* Install and configure Mongoose
* Use campground model inside of our routes!

#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

#RESTful Routing

##Introduction
* Define REST and explain WHY it matters
* List all 7 RESTful routes
* Show example of RESTful routing in practice

================
 RESTFUL ROUTES
================
name    url         verb    description
---------------------------------------------------------------
INDEX   /dogs       GET     Display a list of all dogs
NEW     /dogs/new   GET     Displays a form to make a new dogs
CREATE  /dogs       POST    Add a new dog to DB
SHOW    /dogs/:id   GET     Shows info about one dog


#Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly

#Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

#Add the Comment model!
* Make our errors go away!
* Display comments on a campground page

#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

==========================
 YELPCAMP RESTFUL ROUTES
==========================
name    url                 verb     description
---------------------------------------------------------------
INDEX   /campgrounds         GET     Display a list of all dogs
NEW     /campgrounds/new     GET     Displays a form to make a new dogs
CREATE  /campgrounds         POST    Add a new dog to DB
SHOW    /campgrounds/:id     GET     Shows info about one dog

NEW     /campgrounds/:id/comments/new   GET
CREATE  /campgrounds/:id/comments/      POST


#Style Show Page
* Add sidebar to show page
* Display comments nicely




##Auth Pt. 1 - Add User Model
* Install all packages needed for auth
* Define User model

##Auth Pt. 2 - Register
* Configure Passport
* Add register routes
* Add register template

##Auth Pt. 3 - Login
* Add login routes
* Add login template

##Auth Pt. 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly

##Auth Pt. 5 - Show/Hide Links
* Show/hide auth link in navbar correctly

##Refactor The Routes
* Use Express router to recognize all routes

##Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

##Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground

# Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Pagge
* Add Update Route
* Fix $set problem

#Deleting Campgrounds
* Add Destroy Route
* Add Delete button

#Authorization Part 1: Campgrounds ("permissions")
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons
* Refactor Middleware

#Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

Campground Edit Route: <!--/campgrounds/:id/edit-->
Comment Edit Route:    <!--/campgrounds/:id/comments/:comment_id/edit -->

#Deleting Comments
* Add Destroy route
* Add Delete button

Campground Destroy Route <!-- /campgrounds/:id/ -->
Comment Destroy Route <!-- /campgrounds/:id/comments/:comment_id -->

#Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware

#Refactoring Middleware
* 