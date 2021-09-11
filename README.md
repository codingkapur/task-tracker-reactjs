PROJECT TITLE:

TASK TRACKER built with REACT.JS

DESCRIPTION:

The Task Tracker is a basic application which allows the user to add tasks to be done along with a date and time stamp.
It also allows the user to mark tasks as active or completed, which is indicated by a change of the background color.
The user can also delete tasks from the list of task.

PURPOSE OF BUILDING THIS PROJECT:

The purpose behind building this project is to learn ReactJs, by understanding and developing comfort with the syntax.
This is a rebuild of a tutorial/code along I followed on youtube by a channel called Traversy Media.
The rebuild will be done without reference to the video, and unless stuck, the code. The objective is to gauge understanding of concepts and ability to use the ReactJs teachnology to build basic applications.

ADDITIONAL INFORMATION:

This project is also important for the following reasons:
- it is the first time a README file has been written for a project by me.
- this project will be created with the best possible version control practice using Git. 
    - Files will be tracked.
    - Files will be committed after appropriate changes in code to make commit messages effective and concise.
    - Files will be pushed to the remote repository on GitHub.

STEPS/PROCESS:

INITIALIZING THE REACT APP:

1. A React App can be created using the "create-react-app (folder name)" command. for Eg. "create-react-app my-app"
2. Change directory to the newly created "my-app" folder with the "cd my-app" command.
3. Execute "npm start" to host the app on the local server. App is automatically refreshed as changes are made and saved. 
4. Delete unnecessary files and boiler plate code.
5. Display "Hello React".

CREATE A REPOSITORY ON GITHUB:

1. Create a new repositiory on github. Copy the url and execute in the terminal "git remote add origin (url)".
2. Push the local repository on the remote repository with the command "git push -u origin master"
    "Branch 'Master' set up to track remote branch 'master' from 'origin'."
3. Execute "git status" to check status of local repository and remote repositiory.
    "Your branch is up to date with 'origin/master'."
4. Files are now being tracked for modifications locally as well as in comparison to files on the remote repo.

CREATE A COMPONENTS FOLDER:

1. Create a new file called "Header.js"
2. Not using snippets to replicate boiler plate code to maximize familiarity with code and also develop muscle memory.
3. Function declared, exported, and imported into the app.js file.
4. Create a component file called Tasks.js. Describe structure of element. 
5. Create a component file called Task.js. Import it into Tasks.js. 
6. Import Tasks in app.js.
    Chain of components created.
    App(Main component) - > Tasks -> Task
                        - > Header

WHAT HAVE I LEARNED IN THE PROCESS OF MAKING THIS PROJECT:
(To be updated along the way)

1. React is a component based system for designing modern interactive user interfaces. Every element can be made into a component and it is only upto the user to which depth components are to be nested. That implies that the element in the user interface gets its own file where it is described, and then imported into the main app, or parent app, for rendering. This allows for seperation of code, for better organization, reusability and ease of maintainence.
2. Componenets are in the .js format, stored in a folder called components, placed in the src folder. Convention dictates that the file name of the component file should be capitalized. Such a file is composed of a function. It 
3. A js file in the components folder will return one html element. If there are more than one elements, they should be nested wihtin one parent element (like a div, or even empty structure like <> Place Elements here</>). Component file exports the function "export default (functionName)".
4. Components are imported into the file where they are used by saying "import (function name) from ('./components/function name').






This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

