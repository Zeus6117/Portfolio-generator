const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
    /* all parts are the same, just refactored to look cleaner
    (part 1)
    for (let i = 0; i < profileDataArr.length; i += 1) {
      console.log(profileDataArr[i]);
    }
}
console.log('================');
------------------------
(part 2)
profileDataArr.forEach((profileItem) => {
console.log(profileItem)
 });
 -------------------------------------------
 (part 3) */
 profileDataArr.forEach(profileItem => comsole.log(profileItem));
};