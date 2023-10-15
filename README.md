# Team Member Management application

This React project is a Team Member Management application. It allows users to manage a list of team members, assign them to different teams, and view team-specific details. Here's what the project does:

1. **Routing:** The project uses the react-router-dom library to create routing for different sections of the application. It has three main routes:
    * **Home:** Displays a list of team members.
    * **Teams:** Displays team-specific information, including the ability to switch between teams.
    * **Add Employee:** Allows users to add new team members to the application.

2. **LocalStorage Data Persistence**: The project utilizes the localStorage to persist data. Employee data is stored in the browser's localStorage, which means that the data remains available even if the user closes and reopens the application.

3. **Display Team Members:** The "Home" route (/) displays a list of team members. Users can click on team members to toggle their team assignment.

4. **Grouped Members:** The "Teams" route (/allteams) displays team-specific information. Users can view the members of different teams, and team counts are updated dynamically.

5. **Add New Employee:** The "Add Employee" route (/add_employee) allows users to add new team members to the application. Users can specify details such as first name, last name, designation, gender, and team assignment.

6. **Team Filtering:** Users can filter team members by selecting a team from a dropdown on the "Home" page.

7. **UI Interaction:** The project includes interactive features such as team member cards with a toggle effect when clicking to change the team assignment.

## Technologies used

The project uses the following technologies and libraries:

* **React:** The JavaScript library for building user interfaces.
* **React Router:** A library for handling routing in React applications.
* **LocalStorage:** A web API for storing data in the browser.
* **HTML & CSS:** For structuring and styling the application.

## Live Site

See the live demo of this project [here.](https://google.com)

## Issue(known so far)

In grouped members component we have to click the team 2 times to show the members and on first click only header changes.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
