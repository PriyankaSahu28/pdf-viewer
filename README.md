There are a couple of open source React PDF viewer libraries. One of the most popular is the @react-pdf/renderer library, with 170K weekly downloads on npm. It’s used for creating PDF files in the browser, on the server, or on mobile devices. If you want to work with this library, please refer to our blog post on How to Create a PDF with React.js.

Another popular library is react-pdf by Wojciech Maj, with around 400K weekly downloads on npm. It’s used to display existing PDFs. We’ll look at how to use this library for the purpose of creating a PDF viewer.

react-pdf provides a React component API for opening PDF files and rendering them using PDF.js. PDF.js is an open source JavaScript library for rendering PDF files.

Let’s look at some of this library’s features before creating our project:

Ease of use
Support for custom events, text selection, and non-Latin characters
Multiple rendering methods
Cross-browser compatibility
Accessibility
Free and open source
Requirements to Get Started To get started, you’ll need:

**Node.js version 14 or later.**

A package manager compatible with npm. This guide contains usage examples for Yarn and the npm client (installed with Node.js by default). Make sure the npm version is 5.6 or greater.
`npm i install`

Building a React.js PDF Viewer with react-pdf
Start by creating a React.js project with create-react-app:

`npx create-react-app react-pdf-example`
After the project is created, change the directory into the project folder:

`cd react-pdf-example`
Adding react-pdf
Now, you can install the npm package for the react-pdf library from the terminal:

`npm install react-pdf`

Now, start the application by running:

`npm start`

![Screenshot (25)](https://user-images.githubusercontent.com/74130968/209979363-ef9fcfbd-b801-4d5a-9f09-c5286ad730c3.png)


