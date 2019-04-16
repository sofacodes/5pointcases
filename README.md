# 5 Point Cases & Kegs - Twitter Clone

A basic twitter clone built to demonstrate the full stack 🥞 (client, server, database) built by following https://github.com/CodingGarden/meower

With the following features:

* Customers can send a suggestion 🍺✉️
* Customers can see all suggestions that have been sent 🍺🗂




## Incomplete
## Objectives

## Deploy

* ✅ Deploy server with now
  * [ ] Setup environment variables
    * [ ] Database connection
      * process.env.MONGO_URI
  * ✅ Show mlab
  * [ ] Deploy with environment variable
    * now -e MONGO_URI=@5pointcases-db
  * [ ] Add alias
* ✅ Deploy client folder with now
  * [ ] Set API_URL based on hostname

## What's next?

* Add comments/replies to a suggestion
* User Accounts
  * Don't just have the user enter their name
  * Sign up/Login
* User Profiles
  - Only show suggestions from a given user
* Search suggestions
* Hashtags
* User @mentions
* Realtime feed of suggestions




## Completed
## Objectives

* [ ]  Diagram the Full Stack
* [ ]  Differentiate between Client and Server
* [ ]  Get user input on the Client
* [ ]  Send user input from the client with fetch to the server
* [ ]  Store data in a database
* [ ]  Retrieve data from a database on the Server
* [ ]  Retrieve data from a server on the client using Fetch
* [ ]  Hide/Show elements on the client
* [ ]  Add elements to the page on the client
* [ ]  Deploy the client with now.sh
* [ ]  Deploy the database with mlab
* [ ]  Deploy the server with now.sh

## Front-end

* [ ] Create client folder
* [ ] Setup index.html
* [ ] Bring in Skeleton CSS
* [ ] Create Header
* [ ] Create form
  * [ ] Name
  * [ ] Content
  * [ ] u-full-width to both inputs
* [ ] Listen for form submit
* [ ] Hide the form
* [ ] Show loading spinner
* [ ] Get data from form and log it
* ✅ Get user input on the Client
* ✅ Hide/Show elements on the client

## Back-end

* [ ] Create server folder
* [ ] npm init -y
* [ ] npm install express morgan
* [ ] Setup index.js
* [ ] Add GET / route
* [ ] Add POST /suggestions route
  * [ ] log out req.body

## Front-end

* [ ] fetch POST /mews with form data
* [x] See the CORS error and revel in this moment
* ✅ Send user input from the client with fetch to the server

## Back-end

* [ ] npm install cors
* [ ] Make sure the server is recieving the data
* [ ] Add JSON body parser middleware
* [ ] Validate name and content
  * [ ] Must be a string
  * [ ] Cannot be empty
* [ ] If not valid
  * [ ] Error code 422
  * [ ] Invalid suggestion, must contain name and content
* [ ] Setup DB Connection
  * [ ] npm install monk
  * [ ] connect to db
  * [ ] create document collection (suggestions)
* [ ] If Valid
  * [ ] Create mew object with
    * [ ] name, content, created_date
  * [ ] Insert into DB
  * [ ] Respond with created mew object
* ✅ Store data in a database

## Front-end

* [ ] Log out created Mew after POST request
* [ ] Show the form
* [ ] Hide loading spinner

## Back-end

* [ ] GET /suggestions
  * [ ] Respond with mews from DB
* ✅ Retrieve data from a database on the Server

## Front-end

* [ ] fetch GET /suggestions
  * [ ] Iterate over array
  * [ ] Append each to page
  * [ ] Reverse before appending
  * [ ] Show the form
  * [ ] Hide loading spinner
* [ ] fetch GET /mews after creating a mew
* ✅ Retrieve data from a server on the client using Fetch
* ✅ Hide/Show elements on the client
* ✅ Add elements to the page on the client

## Back-end

* [ ] npm install bad-words
  * [ ] Use filter before inserting into DB
* [ ] npm install express-rate-limit
  * [ ] Limit to 1 request every 15 seconds

