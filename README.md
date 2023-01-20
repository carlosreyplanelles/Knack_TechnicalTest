# Knack_TechnicalTest
## Remove Duplicates From Mock Knack Application Schema

Knack is a no-code platform that includes an online database. Knack users will at times, through unexpected API usage or an unknown bug, corrupt their application schemas. One common issue they may run into is having duplicate fields and/or objects in their application schema. These duplicates cannot be removed by the Knack UI and lead to TypeErrors and other problems.

The purpose of this coding exercise is to create a Node.js application that can programmatically remove all duplicate fields and objects from the given mock application schema and output a new sanitized version.

The "mock_application.json" file in this repository contains data which represents an actual Knack application schema including all currently existing properties. Your code should process the data, remove any duplicates, and output a new JSON file "clean_application.json" which retains all other properties of the Knack application.

Within a standard Knack application there is a `versions` property which has 2 collections:
1. `objects`: an array of Knack "objects" which contains "fields"
2. `scenes`: an array of Knack "scenes" which contains "views"

### Requirements
- The code should be written in JS and utilize the Node.js framework
- We expect tests (unit tests on business logic, etc. - whatever you are comfortable with)
- We expect to see documentation in the form of a README
- We're looking for code that would be easy to maintain
- We're looking for code that would scale

### Time
We understand that you are busy and programming projects can take a long time. We advise spending 2 hours on the exercise and seeing where you get. If there are still open requirements at the end of the 2 hour period, feel free to outline what it would take to complete those in TODO comments inline in the code, or a list of notes on what you'd need to do finish things up. If you want to keep working and take things over the finish line, great.

### Notes
- Leveraging 3rd party libraries/modules is perfectly fine

### How to submit your solution
- Please send us a zip or a tar of the `node-coding-exercise-master` directory which should include your application

___

## NOTES

### CONSIDERATIONS
I'm considering that for the duplicate objects, fields and values will be in the oder and the values will be exacty the same.
For the fields I'm considering that diferent objects can have a field with the same name and the duplicate fields are only consiedere within the same object.

### DIRECTORIES SYSTEM
The json files used for the implemented tests (input and expected outputs) are located inside the resources directory.

### THIRD PARTY LIBRARIES
I installed some third party libraries:
- lodash -> I use this to filter the duplicate fields and objects from the version.
- jest -> I used this library to implement the tests for

### HOW TO USE
1- install all the dependencies by using npm install method.
The nodejs app i created there's a single method to call which triggers the whole process. Method cleanApplicationData recieves the input file name and the name that has to be used to write the clean app data (no duplicates)

### IMPLEMENTED TESTS
I implemented 4 tests:
- Test with duplicate objects and fields and 1 version.
- Test with 2 versions. One of them with no duplicate fields or objects.
- Test with no versions
- Error Thrown due to non existing file

### NEXT STEPS
- Improve the error handling process cappturing the potential exceptions in the different methods.
- Update unit Tests accordingly.
- In case that the assumption of the duplicated objects fiields can be in a different order on a duplicate object a we shoud redefine the method to compare the objects to determine if an object is a duplicate on a similar way than isDuplicateField method.
