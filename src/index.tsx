import * as React from "react";
import { render } from "react-dom";
import { Theme } from "@twilio-paste/core/theme";
import { Box } from "@twilio-paste/core/box";
import { Button } from "@twilio-paste/core/button";
import { LiveEdit } from "./LiveEdit";
import { Input } from "@twilio-paste/core/input";
import { Label } from "@twilio-paste/core/label";
import { HelpText } from "@twilio-paste/core/help-text";
import { Heading } from "@twilio-paste/core/heading";
import { Stack } from "@twilio-paste/core/stack";
import { InformationIcon } from "@twilio-paste/icons/esm/InformationIcon";

function App() {
  return (
    <Theme.Provider theme="default">
      <Box padding="space60" margin="space60">
        <Heading as="h2" variant="heading10">
          GIFTINZ
        </Heading>
        <Heading as="h2" variant="heading50">
          Remind your friends about your special day and what you truly want.
        </Heading>
        <Stack orientation="vertical" spacing="space100">
          <Box>
            <Label htmlFor="message_title" required>
              Your Name:
            </Label>
            <Input
              aria-describedby="display_name_help_text"
              id="user"
              name="user"
              type="text"
              placeholder="Name"
            />
          </Box>
          <Box>
            <Label htmlFor="message_title" required>
              Friend's Name:
            </Label>
            <Input
              aria-describedby="display_name_help_text"
              id="recipient"
              name="recipient"
              type="text"
              placeholder="Name"
            />
          </Box>
          <Box>
            <Label htmlFor="message_title" required>
              Friend's Phone Number
            </Label>
            <Input
              aria-describedby="display_name_help_text"
              id="phonenum"
              name="phonenum"
              type="text"
              placeholder="+11234567890"
            />
          </Box>
          <Box>
            <Label htmlFor="message_title" required>
              Ocassion Date
            </Label>
            <Input
              aria-describedby="display_name_help_text"
              id="date"
              name="date"
              type="date"
            />
          </Box>
          <Box>
            <Label htmlFor="message_title" required>
              Wishlist
            </Label>
            <Input
              aria-describedby="display_name_help_text"
              id="wishlist"
              name="wishlist"
              type="text"
              placeholder="Puppies"
              insertAfter={
                <Button variant="link">
                  <InformationIcon
                    decorative={false}
                    size="sizeIcon20"
                    title="Enter anything!"
                  />
                </Button>
              }
            />
            <HelpText id="display_name_help_text">
              What do you want your friend to gift you?
            </HelpText>
          </Box>
          <Box></Box>
        </Stack>
        <Button onclick="SendSMS()">Submit</Button>
      </Box>
    </Theme.Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

//const accountSid = ""//process.env.TWILIO_ACCOUNT_SID;
//const authToken = ""//process.env.TWILIO_AUTH_TOKEN;
//const client = //require('twilio')(accountSid, authToken);
//function SendSMS() {
//client.messages
//    .create({from: '+16165458865', body: 'Wishlist: ' + wishlist, to: phonenum})
//    .then(message => console.log(message.sid));
//    alert('Submission recieved')
//};
