# Combine multiple files into one

## Testing files
Will be in the original_test_files folder

## Steps
1. Assumes each file has organized lines in each file
2. Read each input of the first line of each file and make comparisons on how to organize the input A-Z comparisons for each file
(By using a read stream its faster in large file sizes instead of using readFile)
3. Uses JavaScript .sort() method which uses merge-sort naturally by default to sort. You can implement your own sort function but for timing sake, I am going to use it by default as its O(n log n) time complexity
4. After the array has been sorted, create a write stream and write each new array item into the file - time complexity O(n)
5. Time complexity overrall is O(n log n) as it uses the same data result.
6. Memory - O(n) 

## How to run the script
``` node file_merger.js ```

## Pre-requisites
Having node installed

### Personal Notes
If each file was not organized, each file would have to organize it's contents
I would have to create a readStream on each file and re-write it's contents and sort them.

Create temporary holders (i.e. empty strings) to hold x amount of data to match x files (to represent each file's first line)

(i.e. str1 - to represent file1, str2 to represent file2, str3 to represent fil3, etc)

Make comparisons with each different data holders 

Whichever one is on the less side of organization, you will push that string to a list/array to hold - []

Reset that current string to read the next line of that file it holds

So this can be in a while loop before the createStream reaches the end of the file
