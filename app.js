const words = [
    "travel", "maddening", "famous", "guitar", "business", "room", "boat", "post", "amusing", "descriptive", "even", "hug", "radiate", "equable", "fragile", "water", "irritate", "wonder", "earthquake", "adhesive", "volcano", "needless", "early", "notebook", "substantial", "cloistered", "time", "slow", "actor", "flock", "actually", "literate", "interfere", "hospitable", "debt", "animal", "window", "ablaze", "past", "walk", "drown", "materialistic", "complete", "three", "haunt", "upset", "selective", "fantastic", "acoustics", "popcorn", "rambunctious", "toothbrush", "hysterical", "duck", "collect", "mix", "adorable", "crate", "mailbox", "humor", "desire", "side", "loaf", "sigh", "garrulous", "protect", "little", "blue-eyed", "strip", "sin", "excuse", "moan", "chase", "print", "error", "cup", "deer", "calculate", "drain", "unable", "productive", "pocket", "eight", "license", "bird", "better", "cooperative", "matter", "practice", "possible", "development", "political", "teaching", "harmony", "charge", "horse", "pedal", "waste", "jewel", "island", "amusement", "spy", "big", "gabby", "guide", "cobweb", "gifted", "disapprove", "likeable", "erect", "warlike", "kindly", "supply", "depressed", "tiny", "aromatic", "ground", "belong", "violent", "scary", "girls", "sense", "lake", "excited", "competition", "reason", "grin", "apparatus", "squeak", "grab", "polite", "defeated", "ready", "venomous", "force", "busy", "cakes", "brief", "fade", "wretched", "snakes", "health", "wide", "judicious", "harbor", "rampant", "purpose", "chicken", "motionless", "transport", "ill", "arch", "prefer", "air", "beneficial", "holiday", "advise", "year", "decorate", "infamous", "imminent", "tempt", "roasted", "explain", "offer", "elated", "belief", "shoe", "calm", "town", "icicle", "thirsty", "agreement", "dizzy", "holistic", "war", "fit", "compare", "living", "snow", "bounce", "near", "afraid", "route", "waves", "hammer", "heavy", "gratis", "unnatural", "servant", "flash", "order", "scale", "imported", "swing", "ice", "wrap", "pest", "psychedelic", "appear", "fry", "connection", "invention", "nonchalant", "fasten", "racial", "border", "fancy", "rich", "hallowed", "bouncy", "abaft", "women", "approve", "zinc", "annoy", "homely", "frail", "bashful", "amused", "part", "cover", "bat", "blue", "excellent", "crazy", "childlike", "tall", "farm", "neat", "broken", "improve", "placid", "bubble", "scratch", "sloppy", "changeable", "rush", "pick", "homeless", "frog", "playground", "argument", "explode", "knit", "fang", "church", "direction", "clip", "winter", "sky", "contain", "lighten", "squeeze", "callous", "moaning", "trip", "swanky", "foolish", "smash", "bit", "thank", "rebel", "young", "alluring", "trains", "flashy", "table", "grandiose", "mountain", "noiseless", "safe", "ubiquitous", "society", "high-pitched", "whistle", "burst", "psychotic", "eyes", "barbarous", "stiff", "huge", "houses", "efficacious", "tasty", "heavenly", "library", "cold", "voyage", "birthday", "piquant", "magical", "taste", "prickly", "return", "match", "measly", "quarrelsome", "discreet", "boorish", "pies", "touch", "cars", "cake", "obtainable", "type", "shame", "alcoholic", "obese", "boiling", "stain", "horn", "religion", "achiever", "squalid", "creature", "shirt", "unkempt", "announce", "divergent", "enjoy", "bolt", "brash", "misty", "sock", "drum", "pathetic", "loving", "agree", "appliance", "ceaseless", "chemical", "paste", "plausible", "knowledge", "plan", "boil", "acrid", "help", "decay", "sulky", "false", "overwrought", "righteous", "kiss", "fabulous", "wine", "lowly", "rot", "blink", "thoughtful", "utter", "vivacious", "steer", "kneel", "abandoned", "box", "communicate", "flame", "run", "abortive", "tranquil", "subdued", "zesty", "learn", "spill", "elegant", "draconian", "cream", "furtive", "statement", "board", "hobbies", "shave", "husky", "unusual", "standing", "thundering", "drab", "collar", "donkey", "trite", "stem", "large", "colour", "toes", "rhetorical", "beef", "plantation", "brush", "jellyfish", "system", "greet", "fence", "paper", "uneven", "kitty", "skinny", "rhyme", "science", "melodic", "nifty", "introduce", "record", "possessive", "periodic", "exciting", "calculator", "tent", "wet", "volatile", "butter", "beautiful", "overt", "page", "shake", "onerous", "numberless", "star", "wrestle", "shiver", "unsuitable", "addicted", "beg", "move", "curious", "argue", "snore", "bless", "jittery", "nostalgic", "healthy", "guttural", "obnoxious", "stereotyped", "canvas", "geese", "pinch", "grumpy", "great", "film", "boot", "cheat", "foamy", "ahead", "pop", "wonderful", "size", "tight", "nervous", "normal", "knotty", "lip", "bee", "hot", "mere", "hard-to-find", "assorted", "fear", "drip", "dependent", "payment", "sophisticated", "ritzy", "tail", "filthy", "imperfect", "peaceful", "attraction", "vein", "babies", "distance", "house", "moon", "tour", "committee", "art", "talk", "feigned", "overconfident", "fearful", "bike", "lyrical", "lamp", "rapid", "try", "stupendous", "extra-large", "woman", "stale", "closed", "medical", "deep", "merciful", "alert", "airplane", "quicksand", "monkey", "fumbling", "button", "gaudy", "flagrant", "veil", "preserve", "special", "vacuous", "vanish", "subtract", "cave", "share", "mourn", "crook", "sofa", "inform", "imaginary", "lazy", "scissors", "chunky", "combative", "avoid", "reject", "colossal", "private", "poison", "kill", "panoramic", "cynical", "face", "settle", "sleet", "circle", "charming", "grandmother", "diligent", "lame", "push", "faithful", "wrench", "expensive", "check", "lewd", "tangible", "enter", "trot", "tremble", "enormous", "witty", "close", "ball", "protest", "old", "abusive", "legal", "spark", "frame", "correct", "trace", "hose", "count", "cross", "hurried", "truthful", "unequal", "spade", "marvelous", "file", "ruthless", "whispering", "fearless", "books", "habitual", "earn", "fast", "obsequious", "drink", "treatment", "nice", "milky", "womanly", "lacking", "superb", "guess", "support", "steam", "receptive", "bruise", "educate", "itch", "guarded", "groovy", "rustic", "pass", "bedroom", "deceive", "oval", "hair", "teeny", "escape", "nappy", "grateful", "forgetful", "internal", "second-hand", "bump", "harm", "desk", "good", "eye", "perfect", "tray", "report", "continue", "question", "bore", "female", "appreciate", "complex", "sassy", "bomb", "vegetable", "damaging", "creator", "true", "damp", "chop", "phobic", "dirt", "average", "mundane", "quickest", "machine", "carpenter", "visitor", "glorious", "juggle", "bawdy", "leather", "rain", "abrasive", "list", "glossy", "entertain", "limit", "wren", "exotic", "crowded", "rat", "dirty", "muddle", "scrawny", "guard", "flower", "grip", "dazzling", "petite", "sleep", "labored", "abhorrent", "airport", "bloody", "dead", "fine", "vengeful", "finicky", "street", "ragged", "one", "disagree", "scream", "plot", "regret", "toothsome", "sincere", "relation", "glib", "dreary", "courageous", "gullible", "mushy", "boundless", "ultra", "stamp", "discover", "grate", "efficient", "coat", "deafening", "tidy", "representative", "tender", "puzzling", "group", "coach", "jobless", "loud", "badge", "recess", "nimble", "last", "land", "angle", "attack", "instinctive", "summer", "plucky", "thing", "plants", "flippant", "tired", "nonstop", "thrill", "wacky", "soap", "cycle", "smooth", "current", "fog", "dog", "shock", "whimsical", "tacky", "rhythm", "whine", "wiggly", "waggish", "abnormal", "naughty", "spiffy", "ethereal", "plate", "inquisitive", "absurd", "ear", "floor", "caring", "far", "bizarre", "unruly", "lackadaisical", "wiry", "troubled", "free", "robin", "dangerous", "wrong", "graceful", "trucks", "mean", "linen", "flowery", "obsolete", "capable", "nose", "wealthy", "toad", "hunt", "provide", "premium", "tendency", "distribution", "egg", "puncture", "power", "uppity", "devilish", "credit", "slippery", "mark", "thought", "sprout", "confuse", "noise", "driving", "furry", "mature", "tip", "nest", "sticks", "unwieldy", "trick", "handle", "berserk", "tick", "lunchroom", "zipper", "pretend", "capricious", "dream", "ashamed", "home", "harsh", "flesh", "toy", "tramp", "identify", "stove", "coordinated", "cruel", "self", "cherries", "noxious", "festive", "grain", "gather", "truck", "trap",
];

const inputField = document.getElementById("inputField")
const currentWord = document.getElementById("currentWord")
const nextWord = document.getElementById("nextWord")
const previousWord = document.getElementById("previousWord")
const button = document.getElementById("button")
const totalWords = document.getElementById("wordsCount")
const totalChar = document.getElementById("charCount")
let wordsCount = 0
let charCount = 0 
times = []
totalTime = 0

inputField.value  = ""

function getRandomWord(){
    return words[Math.floor(Math.random()*words.length)]
}

function main(key){
    if (inputField.value.split(' ').join('') === currentWord.innerHTML.slice(0, inputField.value.split(' ').join('').length)){
        paintGreenWord()
    }

    else{
        paintRedWord()
    }

    if (key === ' ' && currentWord.innerHTML === inputField.value.split(' ').join('')) {
        confirmWord()
    }
}

function confirmWord(){
    times[1] = new Date().getTime()
    totalTime = totalTime + (times[1] - times[0])
    document.getElementById("charPerSec").innerHTML = "Chars per second: " + ((charCount * 60000) / totalTime).toFixed(2)
    times[0] = times[1]
    times[1] = 0

    wordsCount++
    charCount = charCount + currentWord.innerHTML.length
    totalWords.innerHTML = "Total words: " + wordsCount
    totalChar.innerHTML = "Total char: " + charCount

    inputField.value  = ""
    previousWord.innerHTML = currentWord.innerHTML
    currentWord.innerHTML = nextWord.innerHTML
    nextWord.innerHTML = getRandomWord()
    currentWord.style.color = "black"
    
}

function paintGreenWord(){
    currentWord.style.color = "green"
}

function paintRedWord(){
    currentWord.style.color = "red"
}

function timeCount(i){
    const counter = setInterval(() => {
        if (i < 0){
            clearInterval(counter)
        }
        else if (i < 10){
            document.getElementById("timeCounter").innerHTML = "0:0" + i
            i--
        }
        else if(i < 60){
            document.getElementById("timeCounter").innerHTML = "0:" + i
            i--
        }
        else if(i - Math.floor(i / 60)  > 0 && i - 60 * Math.floor(i / 60) < 10){
            document.getElementById("timeCounter").innerHTML = Math.floor(i / 60) + ":0" + (i - 60 * Math.floor(i / 60))
            i--
        }
        else if(i - Math.floor(i / 60)  > 0 && i - 60 * Math.floor(i / 60) >= 10){
            document.getElementById("timeCounter").innerHTML = Math.floor(i / 60) + ":" + (i - 60 * Math.floor(i / 60))
            i--
        }
        
    }, 1000) 
}

function start(){
    times[0] = new Date().getTime()
    currentWord.innerHTML = getRandomWord()
    nextWord.innerHTML = getRandomWord()
    previousWord.innerHTML = ""
    button.value = "Restart"
    wordsCount = 0
    charCount = 0
    totalWords.innerHTML = "Total words: "
    totalChar.innerHTML = "Total char: "
    document.getElementById("charPerSec").innerHTML = "Chars per second: "
    inputField.value  = ""
    currentWord.style.color = "black"

}




