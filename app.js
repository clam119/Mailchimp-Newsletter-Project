const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const request = require("request");
const { send } = require("process");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

//Scopes out GET Requests from client's browser and if successful sends the signup form.
app.get('/', function (req, res) { 
    console.log("success");
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function (req, res) {
    //When a post request is made internally from the sign-up page, it will parse in the data from the signup form and store them in the below constants.
    const firstNameInput = req.body.userFirstName;
    const lastNameInput = req.body.userLastName;
    const emailInput = req.body.userEmail;

    //To send information back to external Mailchimp API server, I create an object containing the first/last name & e-mails that the user input, and match them to mailchimps object names.
    const data = {
        members: [{
            email_address: emailInput,
            status: "subscribed",
            merge_fields: {
                FNAME: firstNameInput,
                LNAME: lastNameInput
            }
        }]
    };

    const jsonData = JSON.stringify(data); //Once the data has been collated, in order to parse the data into a JSON string.

    const url = "https://us14.api.mailchimp.com/3.0/lists/fbbdc4c631" //The endpoint with the unique ID of the list that subscribers will be added to.

    const options = { //This second parameter in the constant below is to specify the method that will be called, and will authenticate the post request to mailchimps external server.
        method: "POST",
        auth: "clam119:ae6d9e7c6298bcb0a0afcd70ad21507c-us14"
    }

    const request = https.request(url, options, function (response) { //A request to post data to the external mailchimp server is made by first looking at the url endpoint, the authentication and method of the request, and lastly the response.
       
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        }   else {
            res.sendFile(__dirname + "/failure.html");
        }
        response.on("data", function (data) { //When the chunk of data input by the user is received, then this will be then parsed as a JSON. (Note that the information was already converted into a JSON string so further formatting not needed.)
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();

});

app.post("/failure", function(req, res) {
    res.redirect("/");
})

app.listen(process.env.PORT || port, function () { //As this is hosted on Heroku, process.env.PORT will just adapt to the port assigned by Heroku, and also listens to localhost port 3000.
    console.log("Successfully connected to port: 3000.");
})
