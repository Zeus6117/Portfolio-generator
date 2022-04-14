const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));

//const fs = require('fs');

//const generatePage = require('./src/page-template.js');

//const pageHTML = generatePage(name, github)
/*we're using inquirer to capture date so we no longer need this to capture the date
const profileDataArgs = process.argv.slice(2, process.argv.length);

const name = profileDataArgs[0];
const github = profileDataArgs[1]; (assignment destructing below)
const [name, github] = profileDataArgs;*/



 // fs.writeFile('./index.html', pageHTML, err => {
    //  if (err) throw err;

   //   console.log('Portfolio complete! Check out index.html to see the output!');
 // });