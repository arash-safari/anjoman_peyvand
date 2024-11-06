let wordMap = {};

// Load the mappings.json file
fetch(chrome.runtime.getURL('mappings.json'))
    .then(response => response.json())
    .then(data => {
        wordMap = data;
    });

// Fallback mapping for characters not in the JSON
const orthographyMap = {
    'چ': 'c', 'خ': 'ḣ', 'آ': 'ä', 'ش': 'š', 'ژ': 'ž', 'ق': 'q', 'ع': "'",
    'ا': 'a', 'ب': 'b', 'پ': 'p', 'ت': 't', 'ث': 's', 'ج': 'j', 'ح': 'h',
    'د': 'd', 'ذ': 'z', 'ر': 'r', 'ز': 'z', 'س': 's', 'ص': 's', 'ض': 'z',
    'ط': 't', 'ظ': 'z', 'غ': 'ğ', 'ف': 'f', 'ک': 'k', 'گ': 'g', 'ل': 'l',
    'م': 'm', 'ن': 'n', 'و': 'o', 'ه': 'h', 'ی': 'y'
};

function convertToOrthography(word) {
    // Check if the word is in the JSON mapping
    if (wordMap[word]) {
        return wordMap[word];
    }

    // If not in JSON, use orthographyMap for a character-by-character conversion
    return word.split('').map(char => orthographyMap[char] || char).join('');
}
