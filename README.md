quickSend-twilio
================

Send a multi-line text message from the command line using Twilio and Node.js.
Quicksend send will prompt you for a number and message to send via sms. Quicksend allows you to send multi-line messages until you issue a command 'a' to abort or 's' to send. Their may be a slight pause between entries becuase of the readlin-sync module.

Install
-------

    sudo npm install 

Usage
-----

    node quickSend.js

Configuration
-------------

   Quicksend uses environment variables to send data using you twilio account.
   To specify account information use the followiing variables.

    export TWILIO_PHONE_NUMBER=+155500000
    export TWILIO_ACCOUNT_SID=XXXXXXXXX
    export TWILIO_AUTH_TOKEN=XXXXXXXX

   Once you execute the program, you will be prompted to enter a phone number. Next you will get a prompt to enter the body of the text message.

