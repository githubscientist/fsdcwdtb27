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
