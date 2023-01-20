const dataCleaner = require('./AppDataCleaner')
const fs = require('fs'); 

test('Application with one version with a duplicate objects and duplicate fields', () => {

  dataCleaner.cleanApplicationData('resources/test/input/mock_App_duplicateObjectAndFIelds.json', 'test1_result')

  let result = fs.readFileSync('test1_result.json', 'utf8')
  let expected = fs.readFileSync('resources/test/expected/test1_expected.json', 'utf8')
  
  expect(result).toMatch(expected)
});

test('Application with 2 versions 1 of them with no duplicate objects nor fields', () => {

  dataCleaner.cleanApplicationData('resources/test/input/mock_App_2_versions.json', '2versions_result')
  let result = fs.readFileSync('2versions_result.json', 'utf8')
  let expected = fs.readFileSync('resources/test/expected/2versions_expected.json', 'utf8')
  
  expect(result).toMatch(expected)
});

test('No versions', () => {
  dataCleaner.cleanApplicationData('resources/test/input/mock_App_noVersion.json', 'noVersion_result')
  let result = fs.readFileSync('noVersion_result.json', 'utf8')
  let expected = fs.readFileSync('resources/test/expected/noVersion_expected.json', 'utf8')
  
  expect(result).toMatch(expected)
});

test('Throws Exception when file does not exist', ()=>{
  
  let exception
  try{
    dataCleaner.cleanApplicationData('resources/test/input/mock_App_duplicateObjectAndFIelds2.json', 'outputFileName')
  } catch (e){
    exception = e
  }

  expect(exception.errno).toEqual(-4058)
})


