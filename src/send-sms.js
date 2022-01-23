const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: wishlist,
     from: '+16165458865',
     to: recipient
   })
  .then(message => console.log(message.sid));