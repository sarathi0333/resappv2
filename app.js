const express = require("express");
const app = express();
const port = process.env.PORT | 3000;
const bodyParser = require('body-parser');
const dialogflow = require('dialogflow');
const config = require('./config.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Instantiate a DialogFlow client.
const sessionClient = new dialogflow.SessionsClient();

// Define session path
const sessionPath = sessionClient.sessionPath(config.projectId, config.sessionId);

// The text query request.
const requestData = {
    session: sessionPath,
    queryInput: {
        text: {
            text: '',
            languageCode: config.languageCode,
        },
    },
};

app.use(express.static(__dirname + "/dist"));

app.post('/message', (req, res) => {
    requestData.queryInput.text.text = req.body;
    sessionClient.detectIntent(requestData)
        .then(response => {
            console.log('Detected intent');
            const result = responses[0].queryResult;
            console.log(`  Query: ${result.queryText}`);
            console.log(`  Response: ${result.fulfillmentText}`);
            if (result.intent) {
                console.log(`  Intent: ${result.intent.displayName}`);
            } else {
                console.log(`  No intent matched.`);
            }
        })
        .catch(err => {
            console.error('ERROR:', err);
        })
    res.json({ msg: "got the response" });
});

app.listen(port, function() {
    console.log("server running in port" + port + " ...")
})
