# Dog Pictures - A Coding Challenge

## The Challenge
This site was built as a response to the following challenge:

Create a single page React application to show random dog pictures to users using the [Dog
API](https://dog.ceo/dog-api/).

Your application should:
● Have a homepage that shows a list of all breeds available on the Dog API.
● Allow users to click into each breed, and open a separate page showing four random
pictures of dogs from that breed.
○ This page should include a link to go back to the list page.
○ When you reopen a breed that you’ve previously visited without reloading the
app, it should show the same pictures from your previous visit.
○ Each breed page should include an element with a link to go to the next breed
from the list. The element should include a preview with one picture of the next
breed. When the next breed is opened via the link, it should include the picture
from the preview.

Things we’re looking for:
● Good, clean code. Don’t sweat every detail of the presentation. Focus on a well
designed solution.
● Best practices. This is your opportunity to show how you think an app should be built
● Documentation. You should tell us what we need to know about your code, as well as
explain any design decisions you made.
● Testability. Your app should be easily testable, and you should include at least one working example.

## Design Choices

### Setup: 
I made this site using create-react-app to speed up the initial setup. I then gutted out the unnecessary parts of the boiler plate.

### State Management:
I elected to not use Redux, or any other state management library beyond react, as the data here was simple, and even in the forseeable future I did not see it expanding much.
However, I wanted to lay some groundwork, and allow for easy access to the list of breeds and the pictures by multiple components and pages, so I stored those two items inside a React context and created a custom hook to access them.

### File Structure: 
Keeping App.js and index.js at the root to allow for ease of finding the entry point of the app, I then placed the files in the following structure.
#### components
Custom react components that were not full pages. The goal here is to create a common pool of reusable components.
#### data
This is where all the global state and data handling is kept. Specifically this is where the context is defined, the custom hooks created, and the API calls defined. I have separated the files by data concerns. One handles the currently saved pictures, the other fetches the breeds list.
#### pages
This is where the different pages defined by the routing (found in App.js) are.
#### tests
Where all the testing goes.

### Styling
I decided to use Material UI as my styling/css-in-js solution. It is very quick to use and has great documentation while giving a clean interface with minimal effort. 

### Testing
I am using Jest, as it comes built in to create-react-app.
