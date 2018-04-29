function uppercaseFirst(word) {
    if (!word) return word;
    return word[0].toUpperCase() + word.slice(1);
}

function camelize(str) {
    let words = str.split("-");
    for (let i = 1; i < words.length; ++i) {
        words[i] = uppercaseFirst(words[i]);
    }
    return words.join("");
}

let str = "border-left-width";
console.log(camelize(str));
