const sampleBadWords = [
    "hate",
    "war crimes",
    "drugs",
    "murder",
    "ang"
];

const filterBadWords = (urls, wordsList) => {
    return urls.filter(url => !wordsList.some(badWord => url.url.includes(badWord)));
};

const copyUrlsToConsole = (newClip) => {
    navigator.permissions.query({name: "clipboard-write"}).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
            const urlsList = newClip.map(clip => clip.url);
            console.log(urlsList);
        }
    });
}

const validUrls = (tabs) => {
    const filteredUrls = filterBadWords(tabs, sampleBadWords);
    copyUrlsToConsole(filteredUrls);
}

const errs = (error) => {
    console.error(`Error: ${error}`);
}

chrome.tabs.query({ currentWindow: true }).then(validUrls, errs);
