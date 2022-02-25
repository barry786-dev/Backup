### 1. [The Challenge: Display Data using JSX](https://www.robinwieruch.de/react-pass-props-to-component)

In this challenge, we will give you  `user`  data and you have to display it using JSX. The main tasks are:

-   Show data
-   Bind data to an HTML attribute  `<img src=`
-   Create a link to the user's Twitter profile:  `https://twitter.com/chrisoncode`
```js
const user = {
  name: 'Chris on Code',
  location: 'Las Vegas',
  foodType: 'Everything',
  age: 28,
  likes: 'Coding into the wee hours of the morning',
  twitterUsername: 'chrisoncode',
  avatar:
    'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
};
```
![](https://scotch-res.cloudinary.com/image/upload/dpr_1,w_700,q_auto:good,f_auto/v1557347114/ngnf9bhkbvrh4hmfydse.png)


Bonus challenges you can complete are:

-   Create a reusable component for the user details. Pass data to it using props.

### 2.  [Showing a list of items is crucial in every single application we'll build. Using JSX we can show lists using JavaScript's built-in Array.map() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

The .map() is often used to take one piece of data and convert it to another. In our scenarios, we are taking data and converting it to a piece of our view.

- a. Let's say we have a list of `users` that we want to show in a list:
```js
 const people = [
    { id: 1, name: 'chris' },
    { id: 2, name: 'nick' }
  ];
  ```
- b. For nested lists, we have the ability to create a map within a map. Make sure to name your variables with good detail so you know which data you are using.
``` js
const people = [
    { 
      name: 'chris',
      pets: [
        { name: 'bella', type: 'dog' },
        { name: 'cocoa', type: 'dog' }
      ]
    },
    { 
      name: 'nick',
      pets: [
        { name: 'hilo', type: 'cat' },
        { name: 'polly', type: 'cat' }
      ]
    }
  ];
  ```


### 3. [The Challenge: Update Data from Form Input](https://dev.to/cesareferrari/handling-input-field-updates-in-react-47oe)

In this React challenge, we'll update data using an  `<input>`  field.

The main tasks are:

-   Use an  `<input>`  field to accept text
-   Update your UI based on that input field
-   Use React state to automatically update your UI
-   Update data using a for

![](https://scotch-res.cloudinary.com/image/upload/w_700,q_auto:good,f_auto/v1557423751/zd6cohir9tf0oefmv7ct.mp4)

### 4. [The Challenge: Move a Box Up](https://malcoded.com/posts/react-component-style/)

This challenge requires you to move the position of a provided box upwards whenever a button is clicked.

The tasks in this challenge are:

-   Create a state variable to hold the value of the transformation points.
-   Handle an event which increments or decrements the transformation points.
-   Bind the transformation using inline CSS to the created box.
 `Here's what the final application looks like:`
 ![](https://scotch-res.cloudinary.com/image/upload/w_700,q_auto:good,f_auto/v1558377731/fzccrymnuqbkl748dwgm.mp4)



### 5. [Create a React state variable to hold API data](https://dev.to/olenadrugalya/ways-of-getting-data-from-api-in-react-2kpf)

We need to have a way to store data that we get from the API. We'll use  [React's useState](https://reactjs.org/docs/hooks-state.html):

A number of web applications and sites rely on third-party APIs and services for data.

Let's look at how to make an API request to a third party API service. This is an open API. Hence, it requires no authentication.

We will utilize the  [Game of Thrones API](https://anapioficeandfire.com/)  (aptly named the API of Fire and Ice) to fetch and display all the 12 Game of Thrones books alongside individual details of each book.

We will use JavaScript's built-in  [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)  to go grab data from the API. You can use any HTTP library for your project like  [axios](https://github.com/axios/axios). We're using the Fetch built-in one because we don't need to install a package.

We grab and display data in 3 steps:

-   Create a React state variable to hold data
-   Make the API request and store the data
-   Render the returned data

### 6. [The Challenge: Use React Context](https://kentcdodds.com/blog/how-to-use-react-context-effectively)

You are required to create user data containing name and location in context, pass this data to two individual components, and update the data from a separate component.

The requirements for this challenge are:

-   Create a React context with name and location data
-   Wrap parent component with context.
-   Retrieve data in differ components.
-   Update data in a different component. 