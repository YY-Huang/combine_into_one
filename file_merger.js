'use strict';

const fs = require('fs');
const path = require('path');
const directoryPath = path.join(__dirname, 'original_test_files');
const readLine = require('readline');
const result = [];

console.log('Using directory of : ' + directoryPath);

const readFiles = fs.readdir(directoryPath, function(err, items) {

	for (let i = 0; i < items.length; i++) {
		let individualFile = items[i];
        
		// Creates an interface to have a readstream for each file
		let rl = readLine.createInterface({
			input: fs.createReadStream('original_test_files/' + individualFile),
			output: process.stdout,
			terminal: false
		});
        
		// For each interface, go line by line
		rl.on('line', (line) => {
			// Rather than using .include, find looks for the first match instead of all matches
			const found = result.find((string) => string === line);
			if (!found) {
				result.push(line);
			}
			// console.log('Individual file: ' + individualFile);
			// console.log('Line is : ' + line);
			// console.log('result is : ' + result);
			//console.log(result);
            
			// Uses merge-sort by default so it would be n log n
			result.sort();
            
			const fileResult = fs.createWriteStream('result.txt');

			fileResult.on('error', function(err) {
				console.log('Error has occurred: ' + err);
			});

			result.forEach(function(text) {
				fileResult.write(text + ' \n');
			});

			fileResult.end();
		});
	}
});

