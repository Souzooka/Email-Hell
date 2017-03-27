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

const DATA = require('./email.json');
let emailChecker = duplicateEmailFinder();
let tally = emailChecker.processData(DATA);
console.log(tally);