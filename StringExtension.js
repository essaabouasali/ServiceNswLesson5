/// String
let sentence = "The quick dog brown fox jumps over the lazy dog. ";

// String Include 
let hasDOG = sentence.includes("dog"); // Otput is true
 
// String IndexOf

let godindex= sentence.indexOf("dog"); // oTput is the index of the word in the string
//console.log(godindex);

function countOccurences(stringTosearch , searchterm)
{
    let count = 0;
    let startIndex = 0;
    while(true)
    {
        let indexofsearchterm = stringTosearch.indexOf(searchterm , startIndex);
        if(indexofsearchterm == -1)
        {
            break;
        }
        count++;
        startIndex = indexofsearchterm + 1;
    }
    return count ;
}
let countofDog = countOccurences(sentence ,"dog");
console.log(countofDog);

// String Substring

let mysmallersting = sentence.substring(44); // Otput is a string taken from string with first and end index .
console.log(mysmallersting);


/// String Split

let mywords = sentence.split(" "); // breaks the sentence into an array based on the separator indicated ( in thi case " ") .
