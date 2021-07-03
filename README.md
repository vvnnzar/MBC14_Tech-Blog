# MBC14_Tech-Blog

Monash Bootcamp Project 14 - Tech Blog (MVC)

### About this project

This CMS-style blog site allows developers to publish their blog posts and comment on other developers’ posts as well and has been built to follow the MVC paradigm in its architectural structure. It uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

### Project Heroku Link

https://cryptic-cove-06332.herokuapp.com/

### Screen layout and Design

The following image depicts the web application's appearance and functionality:
(![Home Page Screen Design](https://github.com/vvnnzar/MBC14_Tech-Blog/blob/main/public/assets/Home.png))

### Acknowledgements

This development was completed in part using the following references:

- Monash Bootcamp Collateral

### Installation

### Pre requisites

To view and modify code you will require installation of HTML and Code editor software such as Visual Code Studio and Node.js.

### Getting Started

1. Install GITHib on your PC
2. Create a local project repository
3. Clone project repository using git clone
4. Initialise the project using command: git init
5. Create package JSON file using npm init
6. Install npm dependencies
7. Create sql database

### Acceptence Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

### Code Deployment

To update the project with latest code:

1. Run command git status to ensure no conflict of changes
2. Run command git pull to get latest code
3. Stage files for checkin using command git add .
4. Commit files using command git commit -m "My commit message"
5. Push files to gitlab main branch using command git push

### Technologies Used

    HTML
    CSS
    Javascript
    Node.js
    npm packages:
      "bcrypt": "^5.0.1",
      "connect-session-sequelize": "^7.1.1",
      "dotenv": "^10.0.0",
      "express": "^4.17.1",
      "express-handlebars": "^5.3.2",
      "express-session": "^1.17.2",
      "handlebars": "^4.7.7",
      "mysql": "^2.18.1",
      "mysql2": "^2.2.5",
      "sequelize": "^6.6.2"

### Version Control

v1.0 28/06/2021

### License

MIT

Vivianne Zara @ zara:Code 2020
