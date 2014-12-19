//quickSend.js

var readline = require('readline-sync');
var smsMsg = {};
smsMsg.number = "";
smsMsg.body = "";
var notComplete = true;
var line = "";

while(notComplete) {
      if(smsMsg.number.match(/[0-9]{10}/)) {
         line = readline.question('msg (a)bort (s)send> ');
         if(line == 's') {
            console.log("Sending message:\n"+smsMsg.body);
            notComplete = false;
            break;
          }
          if(line == 'a') {
               console.log("Aborting message!");
               break;
          }
           smsMsg.body += line + '\n';
       } else {
            smsMsg.number = readline.question('Enter phone number with area code\n');
            if(smsMsg.number.match(/[0-9]{10}/)) {
               console.log('Prepare msg to send to: '+smsMsg.number);
            }
       }

}

if(notComplete == false) {
    //Initialize a REST client in a single line:
    //twilio Module automatically uses environment variables
    //Put TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN in here if you choose not to use them
    var client = require('twilio')();

    // Use this convenient shorthand to send an SMS:
    client.sendSms({
          to:smsMsg.number,
          from:process.env.TWILIO_PHONE_NUMBER,
          body:smsMsg.body
         }, function(error, message) {
             if (!error) {
                 console.log('Success! The SID for this SMS message is:');
                 console.log(message.sid);
                 console.log('Message sent on:');
                 console.log(message.dateCreated);
            } else {
                 console.log('Oops! There was an error.');
           }
     });
}
