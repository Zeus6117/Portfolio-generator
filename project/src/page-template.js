// Notice the lack of parentheses around the `profileDataArr` parameter?
//const printProfileData = profileDataArr => {
    /* all parts are the same, just refactored to look cleaner
    (part 1)*/
    //for (let i = 0; i < profileDataArr.length; i += 1) {
   //   console.log(profileDataArr[i]);
   // }

//console.log('================');
/*
(part 2)
profileDataArr.forEach((profileItem) => {
console.log(profileItem)
 });
 -------------------------------------------
 (part 3) */
 //profileDataArr.forEach(profileItem => console.log(profileItem));
//};

//printProfileData(profileDataArgs);

/*const generatePage = (username, githubname) => `Name: ${username}, Github: ${githubname}`; puts the below code in one line
below is displayed in 2 lines*/
const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
  };

  module.exports = generatePage;