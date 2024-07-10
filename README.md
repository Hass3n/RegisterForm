Overview
**********************************************************
The User Account Management System is a web application that allows users to create and manage accounts using local storage for data persistence. It ensures secure user authentication by checking for existing emails during registration and verifying credentials during login. The website provides a smooth user experience by guiding users through account creation, login, and access to a personalized welcome page.


Key Features
**************************************************************
1- Account Creation: Users can create an account by providing an email and password. The system checks if the email is already in use and prompts the user to enter a different email if it is.
2- Login Authentication: Users can log in using their email and password. The system verifies the credentials against the data stored in local storage.
3-Error Handling: During login, if the email is not found or the password is incorrect, the user is notified with an appropriate message.
4- Welcome Page: Upon successful login, users are redirected to a personalized welcome page.
5- Data Persistence: User data is stored in the browser's local storage, ensuring that the data persists across sessions.

Technical Implementation
**************************************************************
1. HTML Structure
The website consists of three main pages: the registration page, the login page, and the welcome page.

2. JavaScript for Data Management and Validation
The script handles account creation, login authentication, and error messages.

4. CSS for Styling
The CSS provides a simple, clean layout for the forms and messages.
