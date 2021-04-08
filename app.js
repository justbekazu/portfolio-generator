const profileDateArgs = process.argv.slice(2, process.argv.length);
console.log(profileDateArgs);


// notice the lack of parantheses around the "profileDataArr" parameter?

const printProfileData = profileDataArr => {
    for (let i =0; i < profileDataArr.length; i++) {

    
    
    console.log(profileDataArr[i]);
}
};

printProfileData(profileDateArgs);