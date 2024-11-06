function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        // Only replace text if it contains Persian characters
        const persianRegex = /[\u0600-\u06FF]/;
        if (persianRegex.test(node.nodeValue)) {
            // Split text into words and replace each word if necessary
            node.nodeValue = node.nodeValue.split(/\s+/).map(word => convertToOrthography(word)).join(' ');
        }
    } else {
        // Recursive replacement for child nodes
        for (let i = 0; i < node.childNodes.length; i++) {
            replaceText(node.childNodes[i]);
        }
    }
}

// Start replacing text when the content script is loaded
replaceText(document.body);
