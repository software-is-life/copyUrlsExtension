const {filterBadWords, sampleBadWords } = require("./copyUrls");

const allValidList = [
    "https://nodejs.org/api/fs.html",
    "https://nodejs.org/api/util.html",
    "https://jestjs.io/docs/getting-started"
];

const someInvalidList = [
    "https://angular.io/",
    "https://jestjs.io/docs/getting-started",
    "https://developer.mozilla.org/en-US/docs"
];

// TODO: remember that this function's inputs are a List of URL objects.
test('filtering words from wordslist works', () => {
    expect(filterBadWords(allValidList, sampleBadWords)).toBe(allValidList);

    expectedFilteredList = [
        "https://jestjs.io/docs/getting-started",
        "https://developer.mozilla.org/en-US/docs"
    ];
    expect(filterBadWords(someInvalidList, sampleBadWords)).toBe(expectedFilteredList);
})