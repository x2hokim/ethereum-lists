const checkContract = require('./checkContract');
const checkDirectory = require('./checkDirectory');
const checkToken = require('./checkToken');
const createFiles = require('./createFiles');
const recreateFiles = require('./recreateFiles');
const renameToChecksum = require('./renameToChecksum');

function compile() {
  console.log('Start');
  createFiles();
  console.log('Created files!');
  checkDirectory();
  console.log('Directory is clean!');
  recreateFiles();
  console.log('Recreated files!');
  renameToChecksum();
  console.log('Rename files to checksum!');
  checkContract();
  console.log('Contracts are fine!');
  checkToken();
  console.log('Tokens are fine!');
  console.log('Done');
}

compile();
