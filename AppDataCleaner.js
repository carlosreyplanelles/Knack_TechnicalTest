const fs = require('fs');
const _ = require('lodash');




function getDirtyAppData(filename){
    let dirtyAppData = fs.readFileSync(filename);
    let appData = JSON.parse(dirtyAppData);
    return appData

}
function getDirtyVersion(version){
    let objects = version.objects
    return objects
}

function cleanData(appData){
    if(appData.versions.length > 0){
        appData.versions.forEach(cleanDuplicates)
    }
    return appData  

    
}

function cleanDuplicates(version, index, versionList){
    let objects = getDirtyVersion(version)
        let filteredObjects = _.uniqWith(objects, isDuplicate)
        filteredObjects.forEach(obj => {
            obj.fields =_.uniqWith(obj.fields, isDuplicateField)
        })
        assignCleanObjects(filteredObjects, version, versionList, index)

}

function assignCleanObjects(noDuplicatesObjects, version, versionList, index){
    let v = version
    v.objects = noDuplicatesObjects
    versionList[index] = version
}

function isDuplicateField(field1, field2){
    if(field1.length != field2.length){
        return false;
    }
    return field1.key == field2.key && field1.name == field2.name && field1.type == field2.type && field1.required == field2.required && field1.conditional == field2.conditional

}

function isDuplicate(obj1, obj2){
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}

function writeCleanJson(cleanJson, fileName){
    let file= fileName+'.json'
    fs.writeFileSync(file, JSON.stringify(cleanJson, null, 4), err => {
        if (err) {
          throw err
        }
      });
}

function cleanApplicationData(ApplicationDataFile, outputFileName){
    let dirtyAppData = getDirtyAppData(ApplicationDataFile)
    let cleanJson = cleanData(dirtyAppData)
    writeCleanJson(cleanJson, outputFileName )
}

module.exports = {
    cleanApplicationData
}