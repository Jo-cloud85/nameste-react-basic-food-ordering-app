# Nameste React

...

# Parcel

-   Dev Build
-   Local Server
-   HMR: Hot Module Replacement
-   Does caching for you that leads to faster builds
-   Image Optimization
-   Minification
-   Bundling
-   Compress
-   Consistent hashing
-   Code splitting
-   Differential bundling - helps in supporting older browsers
-   Diagnostics
-   Error Handling
-   HTTPs
-   Tree Shaking - remove unused code
-   Creates different dev and production bundles

# Cors

-   If using the CORS Chrome extension does not work. Go to corsproxy.io. The downside is that
    it has limited API calls, about 40 calls per minute. So it is only good for small application.

# Types of Export/Import

-   Default Export/Import
    export default Component;
    import Component from "path";

-   Named Export/Import
    export const Component;
    import {Component} from "path";

# React Hooks

(Normal JS utility functions)

-   useState() - super powerful state variables in react
-   useEffect()
-   useRouteError()
-   useParams()

# Router DOM

-   createBrowserRouter
-   RouterProvider - provides routing configuration to our app
-   Outlet
-   Link

# 2 Types of Routing in Web-Apps

-   Client side routing - All the components are loaded to our app from the start, e.g. <Body />, <About />,
    and when we need to see a particular content, we simply just load the related component. No network calls.
    We are not fetching a new page.
-   Server side routing - You make a network call and then the about page for example, is coming from the server.

# React Lifecycle

-   ----- MOUNTING -----
-   Constructor (dummy)
-   Render (dummy)
-   <HTML Dummy>
-   Component Did Mount
-   <API Call>
-   <this.setState> -> State variable is updated

-   ----- UPDATE -----
-   render (API data)
-   <HTML Data>
-   component Did Update

# Higher Order Components

-   Mainly used to enhanced the existing component - it can add on but does not change the original functionality of the original component
    ```
    export const withPromotedLabel = (RestaurantCard) => {
        return (props) => {
            return (
                <div>
                    <label className="absolute bg-black text-white px-2 py-1 mx-2 rounded-lg">Promotion
                    </label>
                    <RestaurantCard {...props} />
                </div>
            );
        };
    };
    ```

# Another React Hook

-   useContext() - A great way to minimize prop drilling
-   If you are using class-based components instead of functional components, there is no such thing as hooks.
    So you have to use:
    ```
    <UserContext.Consumer>
        {({loggedInUser}) => (
            <h1 className="text-xl">{loggedInUser}</h1>
        )}
    </UserContext.Consumer>
    ```
    When you create a context js file in class-based components, React gives you the .Consumer function

# Context.Provider

-   Providing global space to a variable. This variable can be a piece of data from an API.

# Redux Toolkit

-   Install @redux/toolkit and react-redux
-   Build our store
-   Connect our store to our app
-   Create a slice (cart slice)
-   Dispatch an action
-   Use reducer logic (through a function) inside your slice
-   Read the data using Selector
    -   a Selector is actually just a hook

# Types of testing (developer)

1.  Unit Testing
    -   Test your React components in isolation
2.  Integration Testing
    -   Testing the integration of multiple components
3.  End to End Testing - e2e testing
    -   Testing the whole process where user enters the website till the moment the user leaves the website

# Setting up Testing in our app

1. Install React Testing Library

    - npm i -D @testing-library/react

2. Install Jest

    - npm i -D jest

3. Install Babel dependencies -- required when using with Jest

    - npm install --save-dev babel-jest @babel/core @babel/preset-env

4. Create and configure babel.config.cjs

    - .js extension may have issues so change the extension to .cjs instead.

5. Configure Parcel config file to disable default babel transpilation

    - This Babel under Jest conflicts with the Parcel that we installed and build this app at the start
      as Parcel has its own Babel configuration.
    - We have to change Parcel's behaviour to accomodate Babel under Jest
    - Create .parcelrc config file to disable default Babel transpilation by Parcel.

6. Jest configuration

    - npx jest --init

7. Install jsdom library

    - If using Jest 28 or later, jest-environment-jsdom package must be installed separately.
    - npm i --save-dev jest-environment-jsdom

8. Create a folder called "--test--"

    - This type of '--' symbol is called dunker.
    - Create test files that you want to test with .test.js extension.

9. Install @babel/preset-react to make JSX work in test cases

    - npm i --D @babel/preset-react

10. Include @babel/preset-react inside babel.config.cjs file
    ```
    module.exports = {
        presets: [
            ["@babel/preset-env", { targets: { node: "current" } }],
            ["@babel/preset-react", { runtime: "automatic" }],
        ],
    };
    ```
11. Install @testing-library/jest-dom

    - npm i --D @testing-library/jest-dom

12. Add jest watch test into package.json file

    - "watch-test": "jest --watch"

13. Type npm run watch-test instead of nom run start

    - Automatically re-run test, similar to the auto reload page
