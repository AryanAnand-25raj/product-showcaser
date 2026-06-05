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

// react everything is components //Every react component must return something (jsx) 
  //jsx is a syntax extension for javascript that looks like html but is not html, it is used to describe the UI of a react component
  
 /* const ProductsName = "Macbook";
  const ProductPrice = 90000;
  const ProductDescription = "High-performance laptop for professionals,students,college for increase the productivity";
  const IsOnSale = true;

  const ProductImage = "/images/laptop_mac.jpg";
  const ProductId ="laptop-001"
  
  {how we will display all these product by using the map method };*/

 /*
 
 <div className="App">
      <h1>Product Showcaser</h1>
      <div className="product-card">
        <img src="/images/laptop_mac.jpg" alt="Laptop_image"/>
        <h2>Macbook</h2>
        <p>High-performance laptop for professionals,students,college for increase the productivity</p>
        <span className="price">₹90,000</span>
        <button>Add-To-card</button>
        <img src="/images/iphone.jpg" alt="Iphone-img"/>
        <h2>Iphone</h2>
        <p>High-end smartphone with advanced features and sleek design</p>
        <span className="price">₹80,000</span>
        <button>Add-To-card</button>   This is Traditional way of making the product showcaser
      </div>
    </div> */
    // What is we have showcase many products 
    //So we will use the concepts of props 
    //Props are like function parameters we can (function parameters are used  to pass data to a function)
    //pass data to a components using the props and we can use that data to render the Ui of the components 
