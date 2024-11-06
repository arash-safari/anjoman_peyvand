let wordMap = {};

// Function to clean and normalize words
function cleanWord(word) {
    return word.replace(/[\u200B-\u200D\uFEFF]/g, ''); // Removes zero-width and non-printable characters
}

function normalizeWord(word) {
    return word.normalize('NFC'); // Normalizes to a common Unicode form
}

const orthographyMap = {
    // Existing character mappings...
    'چ': 'c', 'خ': 'ḣ', 'آ': 'ä', 'ش': 'š', 'ژ': 'ž', 'ق': 'q', 'ع': "'",
    'ا': 'a', 'ب': 'b', 'پ': 'p', 'ت': 't', 'ث': 's', 'ج': 'j', 'ح': 'h',
    'د': 'd', 'ذ': 'z', 'ر': 'r', 'ز': 'z', 'س': 's', 'ص': 's', 'ض': 'z',
    'ط': 't', 'ظ': 'z', 'غ': 'ğ', 'ف': 'f', 'ک': 'k', 'گ': 'g', 'ل': 'l',
    'م': 'm', 'ن': 'n', 'و': 'o', 'ه': 'h', 'ی': 'y', 'ي': 'y', 'ك': 'k',
    // Vowel and diacritic mappings...
    'ُ': 'o', 'َ': 'a', 'ِ': 'e', 'ً': 'an', 'ٌ': 'on', 'ٍ': 'en', 'ْ': '',
    'ّ': '', 'ء': "'", 'ٔ': '', '‌': ''
};

function convertToOrthography(word) {
    word = normalizeWord(cleanWord(word).trim());
    if (wordMap[word]) {
        // Optionally log found words
        // console.log("Found in wordMap:", word);
        return wordMap[word];
    }
    return word.split('').map(char => orthographyMap[char] || char).join('');
}

function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        // Only process if the node contains Persian characters or numerals
        const persianRegex = /[\u0600-\u06FF\u0660-\u0669\u06F0-\u06F9]/;
        if (persianRegex.test(node.nodeValue)) {
            node.nodeValue = node.nodeValue.replace(/[\u0600-\u06FF\u0660-\u0669\u06F0-\u06F9]+/g, function(match) {
                return convertToOrthography(match);
            });
        }
    } else {
        // Recursive replacement for child nodes
        for (let i = 0; i < node.childNodes.length; i++) {
            replaceText(node.childNodes[i]);
        }
    }
}

// Load the mappings.json file and then start replacing text
fetch(chrome.runtime.getURL('mappings.json'))
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Read response as JSON
    })
    .then(data => {
        // Normalize the keys of wordMap
        wordMap = {};
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                const normalizedKey = normalizeWord(cleanWord(key).trim());
                wordMap[normalizedKey] = data[key];
            }
        }
        console.log("Loaded and normalized wordMap:", wordMap);
        console.log("WordMap keys:", Object.keys(wordMap));

        // Now that wordMap is loaded, start replacing text
        replaceText(document.body);
    })
    .catch(error => console.error("Error fetching mappings.json:", error));

