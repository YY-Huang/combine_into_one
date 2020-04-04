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