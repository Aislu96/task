var countSeniors = function(details) {
    let count = 0;
    for( let i = 0; i < details.length; i++) {
        if(+details[i].substr(-4, 2) > 60)  {
            count++;
        }
    }
    return count;
};

countSeniors(["7868190130M7522","5303914400F9211","9273338290F4010"]);