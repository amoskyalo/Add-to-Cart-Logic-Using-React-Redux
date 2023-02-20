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

```

    import React from 'react';
    import { Provider } from 'react-redux';
    import App from './App';

    const App = () => (
      <Provider>
        <App />
      </Provider>
    );

    export default App;

```

Provider component accept store as a prop. So we need to create a store

#### Redux Store

    In Redux, the store is a plain JavaScript object that holds the entire state of a Redux application. It is the central place where the state of the application is stored, and all changes to the state are made through actions.
    To create a store, we need to import `configureStore` from redux toolkit. This is a function which is used to create a store object. The reducer function is responsible for specifying how the state of the application changes in response to actions.

    ```import { createStore } from 'redux';
    const store = createStore({
        reducer: {}
    });

    export default store;
    ```
    

#### Creating redux slices

This is a pre-defined bundle of a Redux reducer logic that handles a specific section of the application state. It contains the reducer function, as well as the action types and action creators for updating that section of the state. Slices are created using the `createSlice()` function from the Redux Toolkit. createSlice function takes in initialState, name and reducers as its arguments. `name` is ussualy a string name for the slice, `initialState` is the initial value of the slice while reducers is an object that defines the reducer functions for handling actions that updat the slice's state.
Here is an example.

``` import { createSlice } from '@reduxjs/toolkit';
    const initialState = []
    const cartSlice = createSlice({
        name: 'cart',
        initialState,
        reducers: {},
    })
```

#### Updating our state with actions

In redux, we use actions to update our state, once we dispatch them. Actions contains payload, which is the necessary data required to perfom an action. Here is an updates Slice with action to add products to cart.
``` import { createSlice } from '@reduxjs/toolkit';
    const initialState = []
    const cartSlice = createSlice({
        name: 'cart',
        initialState,
        reducers: {
            addToCart: (state, action) =>{
                state.push(action.payload) //here, we have updated the state of our slice by pushing the action payload to our state.
            }
        },
    })
```
