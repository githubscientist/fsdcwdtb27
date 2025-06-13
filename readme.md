# Module 1 JavaScript

## Day - 1 Introduction

### Topics

[x] What is Full stack Web development  
[x] What is Frontend, Backend & Databases  
[x] Introduction to web Browser JavaScript V8  
[x] Evolution of HTTP,HTTP Methods  
[x] How the Server looks at the URL  
[x] Request & Response cycle  
[x] Browser js vs Node js

#### What is Full stack Web development

- Full stack web development refers to the list of technologies required to develop a web application from end to end.

##### Types of Applications:

1. Web Applications: Applications that run on web browsers and are accessed via the internet.
2. Mobile Applications: Applications that run on mobile devices and are accessed via app stores.
3. Desktop Applications: Applications that run on desktop computers and are installed via software packages.
4. Embedded Applications: Applications that run on embedded systesms and are used to control hardware devices.
5. Enterprise Applications: Applications that are used by organizations to manage their operations and processes. Usually, these applications are large and complex, and they require a lot of resources to develop and maintain.
6. Cloud Applications: Applications that run on cloud platforms(AWS, GCP, Azure, etc.) and are accessed via the internet. These applications are usually scalable and can handle a large number of users.
7. IOT Applications: Applications that run on IoT devices and are used to collect and analyze data from sensors and other devices. These applications are usually connected to the internet and can be accessed remotely.

##### Components of a Web Application:

1. Frontend:

- The part of the application that the user interacts with. It is responsible for displaying the data and handling user input. (It will have the Webpages => User Interface)
- Technologies used: HTML, CSS, JavaScript,
- Frameworks: CSS: Bootstrap, Tailwind CSS, Material UI; JS: React, Angular, Vue.js, ...

2. Backend:

- The part of the application that runs on the server. It is responsible for processing the data and sending it to the frontend. (It will have the APIs => Business Logic)
- Technologies used: Node.js, Python, Java, Ruby, PHP,...
- Frameworks: Node.js: Express.js; Python: Django, Flask, FastAPI; Java: Spring Boot; Ruby: Ruby on Rails; PHP: Laravel, Symfony, CodeIgniter, CakePHP, ...

3. Database:

- Collection of Data
- Data is stored in either a structured or unstructured format.
- Structured: Data is stored in a tabular format and can be easily queried using SQL.
- Unstructured: Data is stored in a non-tabular format and can be queried using NoSQL.
- Technologies used: Structured: MySQL, PostgreSQL, Oracle, SQL Server; Unstructured: MongoDB, Cassandra, Couchbase, Redis, DynamoDB, Firebase, ElasticSearch, etc.

#### Introduction to Web Browser JavaScript V8

- Web Browser: A software application that allows users to access and view web pages on the internet.

#### Request & Response cycle

- Request: A request is made by the client to the server to access a resource.
- Response: A response is sent by the server to the client with the requested resource.

#### Evolution of HTTP, HTTP Methods

- HTTP: Hypertext Transfer Protocol
- HTTP is a protocol(set of rules) that defines how messages are formatted and transmitted over the internet.

Evolution of HTTP:

- HTTP/0.9: The first version of HTTP, which was a simple protocol that allowed clients to request HTML documents from servers.
- HTTP/1.0: The first version of HTTP that supported multiple request methods, such as GET, POST, and HEAD.
- HTTP/1.1: The most widely used version of HTTP, which introduced several new features, such as persistent connections, chunked transfer encoding, and virtual hosting.
- HTTP/2: The second major version of HTTP, which introduced several new features, such as multiplexing, header compression, and server push.
- HTTP/3: The latest version of HTTP, which is based on QUIC (Quick UDP Internet Connections) and provides improved performance and security over HTTP/2.

API: Application Programming Interface

- An API is a set of rules and protocols that allows different software applications to communicate with each other.

- APIs are used to access the functionality of a web application or service.

REST: Representational State Transfer

- REST is an architectural style for designing networked applications.
- If the communication between the client and server is done using HTTP and HTTP methods, then it is called REST API.
- REST APIs are stateless, meaning that each request from the client to the server must contain all the information needed to understand and process the request.
- Restful APIs are based on the principles of REST and use HTTP methods to perform CRUD operations on resources.
- CRUD: Create(POST), Read(GET), Update(PUT/PATCH), Delete(DELETE)

## Day - 2 JavaScript Basics

### Topics

[ ] Alerts & Prompts  
[x] Variables & Data Types -- Number, String, Boolean
[x] Operators - Arithmetic & Logical & Relational & Assignment

#### Variables and Data Types

console.log("Hello World");

console.log()

- A function that prints the output to the console.
- Any value passed to the console.log() function will be printed to the console.

Data Types:

- Data types are used to define the type of data that can be stored in a variable.
- Number: A numeric value that can be an integer or a floating-point number.
- String: A sequence of characters enclosed in single or double quotes.

Variables:

- A label that points to memory location.
- Variables are used to store data that can be used later in the program.
- Variables are declared using the var, let, or const keywords.

Operators:

- Operators are symbols that perform operations on variables and values.

## Day - 3 JavaScript Basics

### Topics

[x] Functions
[x] if else ,
[x] while do while ,
[x] for loop

##### Functions

- A function is a block of code that performs a specific task and gets executed when it is called.

Function Types:

- Named Function: A function that has a name and can be called using that name.
- Anonymous Function: A function that does not have a name and is usually used as a callback function.
- Arrow Function: A shorthand syntax for writing anonymous functions using the arrow (=>) operator.
- IIFE: Immediately Invoked Function Expression. A function that is executed immediately after it is defined.

##### Looping Statements

- To execute a block of code repeatedly until a certain condition is met.

## Day - 4

### Topics

[x] Hoisting & scope
[x] Arrays & Array Methods
[x] Object and JSON iteration

#### Scope

- The scope of a variable is the part of the program where the variable is accessible.

- There are different types of scopes in JavaScript:
  - Global Scope: A variable that is declared outside of any function or block and is accessible from anywhere in the program.
  - Local Scope: A variable that is declared inside a function or block and is only accessible from within that function or block.
  - Block Scope: A variable that is declared inside a block (using let or const) and is only accessible from within that block.
  - Function Scope: A variable that is declared inside a function and is only accessible from within that function.

# Module 2 HTML

## Day - 5 HTML

### Topics

[x] What is HTML & Why to use?
[x] Basic Tags - p, h1-h6, a, img, ul, ol, li, hr
[x] div Vs span
[x] Semantic Tags
[x] Forms
[x] Tables

#### HTML

- HTML: Hypertext Markup Language
- HTML is a markup language used to create the structure and content of web pages.

#### Semantic Tags

- Semantic tags are HTML tags which is used for the special software to understand and read the content of the web page for the people with visual impairment issues.

- Examples: <header>, <footer>, <nav>, <article>, <section>, <aside>, <figure>, <figcaption>, <main>, <mark>, <time>, <address>, <details>, <summary>

## Day - 6 CSS

### Topics

[x] What is CSS?
[x] Types of CSS: Inline, Internal, External
[x] css selectors ( class vs id ) - other selectors: tag, descendant, child, sibling
[x] Precedence of CSS selectors
[x] display property: inline, block -- (inline-block, flex, grid)
[x] Intro to pseudo-classes(link,visited,hover,active)

#### What is CSS?

- CSS: Cascading Style Sheets
- CSS is a stylesheet language used to describe the presentation of a document written in HTML or XML.
- CSS is used to control the layout, colors, fonts, and other visual aspects of a web page.

#### Types of CSS

- Inline CSS: CSS that is applied directly to an HTML element using the style attribute.
- Internal CSS: CSS that is defined within the <style> tag in the head section of an HTML document.
- External CSS: CSS that is defined in a separate file and linked to the HTML document using the <link> tag.

#### CSS Selectors

- CSS selectors are used to select the HTML elements that you want to style.
- Types of CSS Selectors:
  a. Tag Selector: Selects all elements of a specific tag. For example: p, h1, div, etc.
  b. Class Selector: Selects all elements with a specific class. For example: .class-name
  i. One element can have multiple classes.
  ii. Multiple elements can have the same class.
  c. ID Selector: Selects a single element with a specific ID. For example: #id-name
  i. One element can have only one ID. ID should be unique for the whole document.
  d. Multiple Selectors: You can combine multiple selectors to select specific elements. For example: p.class-name, div#id-name, etc.
  e. Descendant Selector: Selects all elements that are descendants of a specific element. For example: div p selects all <p> elements inside a <div> element.
  f. Child Selector: Selects all elements that are direct children of a specific element. For example: div > p selects all <p> elements that are direct children of a <div> element.
  g. Sibling Selector: Selects all elements that are siblings of a specific element. For example: div + p selects the first <p> element that is a sibling of a <div> element.
  h. Attribute Selector: Selects all elements with a specific attribute. For example: [type="text"] selects all <input> elements with type="text".
  i. Universal Selector: Selects all elements in the document. For example: \*

#### Precedence of CSS Selectors

- !important
- Inline CSS
- ID Selector
- Class Selector
- Tag Selector
- Combinator Selectors(descendant, child, sibling)
- Attribute Selector
- Universal Selector
- Internal CSS
- External CSS

#### Display Property

- Inline Elements: Elements that do not start on a new line and only take up as much width as necessary. Examples: <span>, <a>, <img>, etc.
- Block Elements: Elements that start on a new line and take up the full width available. Examples: <div>, <p>, <h1>, <ul>, etc.

- Using the display property, you can change the display type of an element from inline to block or vice versa.

#### Pseudo-classes

- Pseudo-classes are used to style elements based on their state or position in the document.

1. :link - Styles links that have not been visited.
2. :visited - Styles links that have been visited.
3. :hover - Styles elements when the mouse is hovered over them.
4. :active - Styles elements when they are being clicked or activated.

## Day - 7 CSS

### Topics

[x] What is box model?
[x] Padding,margin
[x] Vizualize boxmodel in realtime using chrome tools.
[x] Measurements
[x] CSS Position Properties.
[x] Colors - solid & linear gradients

#### Box Model

- The box model is a way of representing the layout of an HTML element in terms of its content, padding, border, and margin.
- The box model consists of the following components:
  1. Content: The actual content of the element, such as text or images.
  2. Padding: The space between the content and the border of the element.
  3. Border: The line that surrounds the padding and content of the element.
  4. Margin: The space outside the border of the element that separates it from other elements.

#### CSS Position Properties

- The position property is used to specify the position of an element in the document.
- Types:

1. static: The default position of an element. The element is positioned according to the normal flow of the document.
2. fixed: The element is positioned relative to the viewport and does not move when the page is scrolled.
3. sticky: The element is positioned based on the user's scroll position. It toggles between relative and fixed positioning depending on the scroll position.
4. relative: The element is positioned relative to its normal position in the document flow.
5. absolute: The element is positioned relative to its nearest positioned ancestor (an ancestor with a position other than static). If there is no such ancestor, it is positioned relative to the initial containing block (usually the viewport).

Relative and Absolute Positioning:

- once set, we can position the element using the top, right, bottom, and left properties.
- For relative positioning, the element is positioned using the top, right, bottom, and left properties relative to its normal position. i.e., w.r.t the normal flow of the document.
- For absolute positioning, the element will be taken out of the normal flow of the document and positioned relative to its nearest positioned ancestor. i.e., w.r.t the nearest ancestor which has a position other than static and if there is no such ancestor, it is positioned relative to the initial containing block (usually the viewport).

#### Flexbox

- Flexbox is a layout model that allows you to create flexible and responsive layouts using CSS.

#### Day - 8

##### Topics

[ ] text shadow , rgba() func,repeating bg pateern, indentation of list items
[x] z-index
[x] transform, transition
[ ] element hiding, shadow effect, rounded border, fixed width container

#### Day - 11 Tailwind CSS

##### Topics

[x] Setup
[x] Colors
[x] Typography
[x] Spaces & Sizes
[x] Borders
[x] Images
[x] Customization

#### Library Vs Framework

Library:

- Collection of pre-written code
- Collection of classes, functions, and methods that can be used to perform specific tasks.

Framework:

- A framework is a collection of libraries and tools with a specific structure and set of rules.

#### Tailwind CSS

- Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined classes to style HTML elements.

#### utility-first css

- utility-first means that you can use pre-defined classes to style HTML elements without writing custom CSS.
- utility means that one class does one thing and one thing only.

media queries

<480px max-width: 480px

481px to 768px min-width: 481px and max-width: 768px

769px to 1024px min-width: 769px and max-width: 1024px

## Day - 15

### Topics

[ ] What is DOM?

DOM:

- Document Object Model
- DOM is a structure that represents the HTML document as a tree of objects.
- Each element in the HTML document is represented as an object in the DOM.
- It provides an interface and API (set of methods and properties) to manipulate the HTML document using JavaScript.

API: Application Programming Interface.

Web Application:

- It follows the client-server architecture.
- The client is the web browser that sends requests to the server.
- The server is the web server that processes the requests and sends back the response.
- Request is a HTTP request.
- Request is made to the server using HTTP methods like GET, POST, PUT, DELETE, etc.

REST API:

- REST API is an architectural style for designing networked applications.
- REST API is based on the principles of REST and uses HTTP methods to perform CRUD operations on resources.

RESTful API:

- If the communication between the client and server is done using HTTP and HTTP methods, then it is called RESTful API.

HTTP Methods:

- GET: Used to retrieve data from the server.
- POST: Used to send data to the server.
- PUT: Used to update data on the server.
- DELETE: Used to delete data from the server.
