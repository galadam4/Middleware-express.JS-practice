// Import necessary modules
import express from "express"; // Import Express framework
import { dirname } from "path"; // Import dirname function from path module
import { fileURLToPath } from "url"; // Import fileURLToPath function from url module
import bodyParser from "body-parser"; // Import bodyParser middleware for parsing request bodies

// Define __dirname using dirname and fileURLToPath functions
const __dirname = dirname(fileURLToPath(import.meta.url));

// Create an Express application instance
const app = express();

// Define the port number
const port = 3000;

// Use bodyParser middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({extended: true}));

// Define route for serving the index.html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Define route for handling form submission
app.post("/submit",(req,res) => {
  // Log the parsed request body to the console
  console.log(req.body);

  // Send a response displaying the submitted band name
  res.send("<h1> Your Band Name Is:</h1>" +
  "<p>" + req.body.street + req.body.pet + "</p>");
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
