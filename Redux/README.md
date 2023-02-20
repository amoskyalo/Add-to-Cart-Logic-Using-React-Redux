## Overviw of how React Redux Works

React Redux is a popular open-source library for managing the state of a React application. It is built on top of Redux, which is a predictable state container for JavaScript applications.

React Redux allows developers to easily integrate Redux with their React applications, providing a set of APIs and components to make it easier to manage the state of the application. It helps to keep the state of the application in a centralized location, making it easier to debug and maintain the codebase.

In a React Redux application, the state of the application is stored in a Redux store, which is essentially a JavaScript object. The store is updated by dispatching actions, which are plain JavaScript objects that describe the changes to be made to the state. Components can then subscribe to the store, and automatically update their state when the store changes.

React Redux provides a set of APIs and components, such as Provider and connect, to make it easier to integrate Redux with a React application. The Provider component is used to provide the Redux store to the React component tree, while the connect function is used to connect React components to the Redux store.

Overall, React Redux is a powerful tool for managing the state of a React application, and is widely used in the development of complex web applications.

### How to use React Redux in your application

The standard Redux usage pattern is by using both Redux and Redux toolkit. Redux toolkit makes it easier to write redux code by providing a set of tools and best practices.

#### Installation.

You need to install React redux and the redux toolkit packages to your projects:

`npm install @reduxjs/toolkit react-redux`

After instalation, you need to wrap your entire project within the `Provider` component. This is to ensure that your Redux store is available to all components in your React components.
