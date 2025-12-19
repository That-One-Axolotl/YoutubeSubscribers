require("dotenv").config();
const fs = require("fs");
const APIURL = process.env.YOUTUBEAPISTRING

fetch(APIURL)
.then(res => res.json())
.then((data) => {
    let subs = data.items[0].statistics.subscriberCount;
    subs = parseInt(subs);
    console.log(subs, "subs");
    const lastUpdated = (Date.now());

    const output = {
        subs,
        lastUpdated
    }

    fs.writeFileSync("./subCount.json", JSON.stringify(output, null, 4));
})
