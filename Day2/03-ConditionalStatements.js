function launchBrowser()
 {
        const browserName = "chrome";
        if (browserName === "chrome")
             {
        console.log("Chrome browser is launched");
    } else {
        console.log("Other browser is launched");
    }
}

function runTests()
 {
    const testType = "regression"
    switch (testType) {
        case "smoke":
            console.log("Running Smoke Tests");
            break;

        case "sanity":
            console.log("Running Sanity Tests");
            break;

        case "regression":
            console.log("Running Regression Tests");
            break;

        default:
            console.log("Running Smoke Tests");
            break;
    }
}

launchBrowser();
runTests();