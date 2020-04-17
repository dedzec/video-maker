const google = require('googleapis').google;
const customSearch = google.customsearch('v1');
const state = require('./state.js');

const googleSearchCredentials = require('../credentials/google-search.json');

async function robot() {
    const content = state.load();

    await fetchImagesOfAllSentences(content);

    state.save(content);

    async function fetchImagesOfAllSentences(content) {
        for (const sentences of content.sentences) {
            const query = `${sentences.searchTerm} ${sentences.keywords[0]}`;
            sentences.images = await fetchGoogleAndReturnImagesLinks(query);

            sentences.googleSearchQuery = query;
        }
    }

    async function fetchGoogleAndReturnImagesLinks(query) {
        const response = await customSearch.cse.list({
          auth: googleSearchCredentials.apiKey,
          cx: googleSearchCredentials.searchEngineId,
          q: query,
          searchType: 'image',
          num: 2
        })

        const imagesUrl = response.data.items.map((item) => {
          return item.link;
        })
    
        return imagesUrl
    }
}

module.exports = robot;
