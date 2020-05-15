let sentence = "The quick brown fox jumps over the lazy dog.";

// Q1 

function searchword(sentences , word)
{
    return sentences.includes(word);
}
let find = searchword(sentence,"dog");
//console.log(find);


// Q2

function findword(sentences, word)
{
    return sentences.indexOf(word);
}

let index = findword(sentence,"dog");
if(index == -1)
{
    //console.log(`the word is found in ${index} `);
}
else{
    //console.log("the word is not existe");
}


// Q3

function firstthreecharater(sentences)
{
    return sentences.substring(0,3);
}

//console.log(firstthreecharater(sentence));


/// Q4
function lasttowcharacter(sentences)
{
    return sentences.substring(sentence.length - 2);
}

//console.log(lasttowcharacter(sentence));

// Q5
function ConvertToArray(sentences)
{
    return sentences.split(" ");
}

//console.log(ConvertToArray(sentence));

// Q6

function numberoftime(sentences , word)
{
    let cont = 0;
    let currentindex =0;
    while(true)
    {
        let current = sentences.indexOf(word,currentindex);
        if(current == -1)
        {
            break;
        }
        cont++;
        currentindex = current + 1 ;
    }
    return cont ;
}
console.log(numberoftime(sentence,"e"));

