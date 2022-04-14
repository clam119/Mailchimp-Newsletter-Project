# Hi, Thank You For Checking Out This Mini Project - Mailchimp Powered Newsletter Signup 

Heroku Deployment Link: https://mailchimp-newsletter-clam119.herokuapp.com/

## About This Project:

What the application does: This basic web application deployed on Heroku allows the user to input their: first/last name & e-mail address and add them directly to the Mailchimp Newsletter.

Motivation Behind Creation: The previous weather application project was designed to make external GET Requests and to display that data to the client's browser. However, this time
the focus was on being able to both make external GET Requests for the user's input (first/last name & e-mail address), and more importantly learning about making external POST Requests to
an external API's backend server and logging that information into their database.

How It Works:
1) Firstly, feel free to fork this repository and visit the Mailchimp website ("https://us14.admin.mailchimp.com/account/api/") and request your own API key.
Make sure that you've created a Mailchimp List so that you can add users to. Then navigate to the "Audience Dashboard" -> Manage Audience -> Settings & Scroll down to find the
"unique list id", copy this and place this ID in the "const url" and replace it with the "LISTIDHERE"
2) Secondly, go to app.js and navigate to "const options" and replace the "auth" value with any username & your api key. (E.g. Example1:apikey012345) 
3) Thirdly, use Node.JS from the Terminal to run nodemon and execute the server by typing this in the Terminal: nodemon app.js 
4) Lastly, go onto your browser and type in "localhost:3000" to navigate to the localhost at the port 3000, and then try out the application!

Key Learning Points Included:
- Solidify understanding of making external GET Requests for data;
- Turning the data from the external GET Request into JSON format to be sent back as a POST Request by: firstly, creating an object out of the user input and returning a string
with JSON.stringify(example) and then parsing this as JSON data with JSON.parse(example)
- Understanding the dynamics of redirectories and how the GET Request from the back-end & POST Request from the html components interact.
- The introduction of "Public" folder that's used for css/img files. And then enabling this with app.use(express.static("public"));
- The introduction of using "Heroku" to launch my application. 

Technologies Used: 
- HTML
- CSS (BootStrap)
- Node.js
- Express.js 
- Nodemon (Node Package) - Monitors changes in your sourcecode and automatically restarts server for faster local development.
- Body Parser (Node Package) - Used to parse incoming request bodies to allow for POST Requests to be made to the backend server.
- Heroku - to deploy the application on the internet. 

