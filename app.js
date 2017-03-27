function duplicateEmailFinder() {

  // entry function, will process an object of emails and return a tally of e-mails which show up more than once.
  function processData(obj) {
    let emails = obj.emails;
    let emailsTally = {};

    for (let i = 0; i < emails.length; i++) {
      let email = emails[i].email;

      if (!(emailsTally.hasOwnProperty(email))) {
        emailsTally[email] = 1;
      } else {
        emailsTally[email]++;
      }
    }
    return emailsTally;
  }

  return {
    processData
  };

}

// Test Data

const DATA = {
  "emails": [
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay3@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay23@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay343@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony@italio.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@italio.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "marifelo@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay3@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay23@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay343@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony@italio.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@italio.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "marifelo@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay3@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay23@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay343@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony@italio.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@italio.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "marifelo@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay3@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay23@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay343@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony@italio.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@italio.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "marifelo@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay3@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay23@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay343@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony@italio.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@italio.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "marifelo@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay3@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay23@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay343@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony@italio.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@italio.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "marifelo@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay3@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay23@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay343@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony@italio.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@italio.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "marifelo@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay3@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay23@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay343@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony@italio.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@italio.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "marifelo@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay3@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay23@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay343@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay566@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray545@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jon@kelli.org",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony@italio.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@italio.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "ray22@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "jay@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "tony1@mail.net",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "marifelo@mail.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    },
    {
      "email": "easter@egg.com",
      "sent": "Thu, 4 June 2015 23:04:49 GMT"
    }
  ]
}



let emailChecker = duplicateEmailFinder();
let tally = emailChecker.processData(DATA);
console.log(tally);