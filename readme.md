## MySQL

### Introduction to database

- A database is a collection of data.
- It is organized in a way that allows for easy access, management, and updating.

### Database Management System (DBMS)

- A DBMS is software that interacts with the database, allowing users to create, read, update, and delete data.
- Types of DBMS:
  - Relational DBMS (RDBMS): Uses tables to store data, e.g., MySQL, PostgreSQL, SQLite, Oracle SQL,...
  - NoSQL DBMS: Uses various data models (e.g., key-value, document, graph), e.g., MongoDB, Cassandra, Redis, Elasticsearch, Neo4j,...

### MySQL

- MySQL is an open-source relational database management system (RDBMS).
- It uses Structured Query Language (SQL) for database operations.

### SQL Queries

To get the installed version of MySQL:

```sql
SELECT VERSION();
```

To get the current date and time:

```sql
SELECT NOW();
```

To get the list of databases:

```sql
SHOW DATABASES;
```

To create a new database:

```sql
CREATE DATABASE my_database;
```

To check the current database:

```sql
SELECT DATABASE();
```

To use a specific database:

```sql
USE my_database;
```

To get the list of tables in the current database:

```sql
SHOW TABLES;
```

Example Table:

Products:

| id  | name      | price | quantity | branch     |
| --- | --------- | ----- | -------- | ---------- |
| 1   | Apple     | 0.50  | 100      | Coimbatore |
| 2   | Banana    | 0.30  | 150      | Chennai    |
| 3   | Cherry    | 0.75  | 200      | Coimbatore |
| 4   | Orange    | 0.60  | 120      | Madurai    |
| 5   | Mango     | 0.80  | 180      | Chennai    |
| 6   | Grapes    | 0.90  | 160      | Coimbatore |
| 7   | Pineapple | 1.00  | 90       | Madurai    |

To create a new table:

```sql
CREATE TABLE Products (
    id INT,
    name VARCHAR(20),
    price float,
    quantity INT,
    branch VARCHAR(20)
);
```

To describe the structure of a table:

```sql
DESCRIBE Products;
```

To insert a single row into a table:

```sql
insert into products values (1, "Apple", 0.50, 100, "Coimbatore");
```

To insert multiple rows into a table:

```sql
INSERT INTO products (id, name, price, quantity, branch) VALUES
(2, "Banana", 0.30, 150, "Chennai"),
(3, "Cherry", 0.75, 200, "Coimbatore"),
(4, "Orange", 0.60, 120, "Madurai"),
(5, "Mango", 0.80, 180, "Chennai"),
(6, "Grapes", 0.90, 160, "Coimbatore"),
(7, "Pineapple", 1.00, 90, "Madurai");
```

To modify a column name in a table:

```sql
alter table products change column quanity quantity int;
```

To delete all the rows from a table:

```sql
DELETE FROM products;
```

To delete a database:

```sql
DROP DATABASE my_database;
```

To drop a table:

```sql
DROP TABLE Products;
```

To select all columns from a table:

```sql
SELECT * FROM Products;
```

To select specific columns from a table:

```sql
SELECT id, name, price FROM Products;
```

### SQL: Structured Query Language

- DDL: Data Definition Language (e.g., CREATE, ALTER, DROP)
- DML: Data Manipulation Language (e.g., INSERT, UPDATE, DELETE)
- DQL: Data Query Language (e.g., SELECT)
- DCL: Data Control Language (e.g., GRANT, REVOKE)
- DTL: Data Transaction Language (e.g., COMMIT, ROLLBACK)

To Rename a column:

```sql
ALTER TABLE Products RENAME COLUMN branch TO location;
```

To add a new column:

```sql
ALTER TABLE Products ADD COLUMN description VARCHAR(100);
```

To Update an entire column:

```sql
UPDATE Products SET price = price * 1.1; -- Increase all prices by 10
```

To modify a column data type:

```sql
ALTER TABLE Products MODIFY COLUMN price DECIMAL(5,2);
```

To Drop a column:

```sql
ALTER TABLE Products DROP COLUMN description;
```

Operators:

Relational operators:

< less than

> greater than
> <= less than or equal to
> = greater than or equal to
> = equal to
> != or <> not equal to>

logical operators:

AND: both conditions must be true
OR: at least one condition must be true
NOT: negates a condition

IN: checks if a value is in a list of values
NOT IN: checks if a value is not in a list of values
BETWEEN: checks if a value is within a range

Constraints:

Constraints are rules applied to columns in a table to enforce data integrity.

Types of constraints:

- NOT NULL: Ensures a column cannot have a NULL value.
- UNIQUE: Ensures all values in a column are unique.
- PRIMARY KEY: Uniquely identifies each row in a table; cannot be NULL.
- FOREIGN KEY: Establishes a relationship between two tables; ensures referential integrity.

Let's say we have another table called Sales:

| id  | product_id | quantity | sale_date  |
| --- | ---------- | -------- | ---------- |
| 1   | 1          | 10       | 2023-10-01 |
| 2   | 2          | 5        | 2023-10-02 |
| 3   | 1          | 8        | 2023-10-03 |

To create the Sales table with a foreign key constraint:

```sql
CREATE TABLE Sales (
    id INT,
    product_id INT,
    quantity INT,
    sale_date DATE,
    FOREIGN KEY (product_id) REFERENCES Products(id)
);
```

To insert data into the Sales table:

```sql
INSERT INTO Sales (id, product_id, quantity, sale_date) VALUES
(1, 1, 10, '2023-10-01'),
(2, 2, 5, '2023-10-02'),
(3, 1, 8, '2023-10-03');
```

Normalization:

Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing a database into smaller tables and defining relationships between them.

Question: Find the product name that has been sold on 2023-10-02.

Joins:

- Joins are used to combine rows from two or more tables based on a related column between them.

Types:

- INNER JOIN: Returns rows when there is a match in both tables.

- OUTER JOIN:
  - LEFT JOIN: Returns all rows from the left table and matched rows from the right table.
  - RIGHT JOIN: Returns all rows from the right table and matched rows from the left table.
  - FULL OUTER JOIN: Returns all rows when there is a match in one of the tables.

Example for Multiple Joins:

```sql
SELECT Products.name, Sales.quantity, Sales.sale_date
FROM Products
INNER JOIN Sales ON Products.id = Sales.product_id
INNER JOIN Branches ON Products.branch = Branches.name
WHERE Sales.sale_date = '2023-10-02';
```

Inner Join Example:

```sql
select P.name, P.price, P.quantity, S.quantity as sold_quantity, S.sale_date from Products as P INNER JOIN Sales as S ON P.id = S.product_id;
```

LEFT JOIN Example:

```sql
SELECT P.name, P.price, S.quantity as sold_quantity, S.sale_date
FROM Products AS P
LEFT JOIN Sales AS S ON P.id = S.product_id;
```

RIGHT JOIN Example:

```sql
SELECT P.name, P.price, S.quantity as sold_quantity, S.sale_date
FROM Products AS P
RIGHT JOIN Sales AS S ON P.id = S.product_id;
```

FULL OUTER JOIN Example:

```sql
SELECT P.name, P.price, S.quantity as sold_quantity, S.sale_date
FROM Products AS P
LEFT JOIN Sales AS S ON P.id = S.product_id
UNION
SELECT P.name, P.price, S.quantity as sold_quantity, S.sale_date
FROM Products AS P
RIGHT JOIN Sales AS S ON P.id = S.product_id;
```

Question: From Products table, find the total quanity of products available in each branch.

[ ] add syntax / example for remaining queries.

### MongoDB

- MongoDB is a NoSQL database that uses a document-oriented data model.
- It stores data in JSON-like documents, which allows for flexible and dynamic schemas.

<!-- collection (mysql: table) -->

[

  <!-- document -->

{
name: 'Apple',
quantity: 10,
sale_date: "2023-10-01"
},
{
name: 'Banana',
quantity: 5,
sale_date: '2023-10-02',
specialFruit: true
}
]

### Collection

- A collection is a group of documents.

### Document

- A JSON like object

### MongoDB Queries

To list all the databases

```js
show databases;
```

or

```js
show dbs;
```

JSON data for Products table:

```json
[
  {
    "id": 1,
    "name": "Apple",
    "price": 0.5,
    "quantity": 100,
    "branch": "Coimbatore"
  },
  {
    "id": 2,
    "name": "Banana",
    "price": 0.3,
    "quantity": 150,
    "branch": "Chennai"
  },
  {
    "id": 3,
    "name": "Cherry",
    "price": 0.75,
    "quantity": 200,
    "branch": "Coimbatore"
  },
  {
    "id": 4,
    "name": "Orange",
    "price": 0.6,
    "quantity": 120,
    "branch": "Madurai"
  },
  {
    "id": 5,
    "name": "Mango",
    "price": 0.8,
    "quantity": 180,
    "branch": "Chennai"
  },
  {
    "id": 6,
    "name": "Grapes",
    "price": 0.9,
    "quantity": 160,
    "branch": "Coimbatore"
  },
  {
    "id": 7,
    "name": "Pineapple",
    "price": 1.0,
    "quantity": 90,
    "branch": "Madurai"
  }
]
```

To view all the databases:

```js
show dbs;
```

or

```js
show databases;
```

To create a new database:

```js
use my_database;
```

To view the current database:

```js
db;
```

To switch to a specific database:

```js
use my_database;
```

To create a new collection (similar to a table in MySQL):

```js
db.createCollection("Products");
```

To drop a collection:

```js
db.Products.drop();
```

To drop a database:

```js
db.dropDatabase();
```

To insert a single document into a collection:

```js
db.Sales.insertOne({
  product_id: "687a4530eb328d7b0ab86201",
  sold_quantity: 10,
  sale_date: "2023-10-01",
});
```

To insert more documents into a collection:

```js
db.Sales.insertMany([
  {
    product_id: "687a45c1eb328d7b0ab86204",
    sold_quantity: 5,
    sale_date: "2023-10-02",
  },
  {
    product_id: "687a4530eb328d7b0ab86201",
    sold_quantity: 8,
    sale_date: "2023-10-03",
  },
]);
```

To find all documents in a collection:

```js
db.Products.find();
```

To find specific documents in a collection:

```js
db.Products.find({ branch: "Coimbatore" });
```

To find documents with specific fields:

```js
db.Products.find({ branch: "Coimbatore" }, { name: 1, price: 1 });
```

To update a document in a collection:

```js
db.Products.updateOne(
  {
    name: "Apple",
    price: 0.5,
  },
  {
    $set: { price: 0.55, quantity: 120 },
  }
);
```

To update multiple documents in a collection:

```js
db.Products.updateMany(
  { branch: "Chennai" },
  {
    $set: { branch: "Chennai Branch" },
  }
);
```

To delete a document from a collection:

```js
db.Products.deleteOne({ name: "Banana" });
```

To delete multiple documents from a collection:

```js
db.Products.deleteMany({ branch: "Chennai Branch" });
```

Operators:

$eq: Equal to
$ne: Not equal to
$gt: Greater than
$gte: Greater than or equal to
$lt: Less than
$lte: Less than or equal to
$in: In an array
$nin: Not in an array
$and: Logical AND
$or: Logical OR
$not: Logical NOT
$nor: Logical NOR

```js
db.Products.find({
  branch: {
    $eq: "Coimbatore",
  },
});
```

```js
db.Products.find({
  quantity: {
    $gt: 90,
  },
});
```

```js
db.Products.find({
  $and: [
    {
      branch: {
        $eq: "Coimbatore",
      },
    },
    {
      quantity: {
        $gt: 150,
      },
    },
  ],
});
```

```js
db.Products.find({
  branch: {
    $in: ["Coimbatore", "Chennai"],
  },
});
```

Pipelines:

- Pipelines are used to process data in stages, allowing for complex data transformations and aggregations.
- They are similar to SQL joins and aggregations but are more flexible and powerful.

```js
db.Products.aggregate([
  {
    $group: {
      _id: "$branch",
      totalQuantity: { $sum: "$quantity" },
    },
  },
]);
```

```js
db.Products.aggregate([
  {
    $group: {
      _id: "$branch",
      totalQuantity: { $sum: "$quantity" },
    },
  },
  {
    $sort: {
      totalQuantity: -1,
    },
  },
  {
    $skip: 1,
  },
  {
    $limit: 1,
  },
]);
```

```js
db.Sales.aggregate([
  {
    $lookup: {
      from: "Products",
      localField: "product_id",
      foreignField: "_id",
      as: "salesData",
    },
  },
]);
```

```js
db.Products.aggregate([
  {
    $group: {
      _id: "$branch",
      totalQuantity: {
        $sum: "$quantity",
      },
    },
  },
  {
    $sort: {
      totalQuantity: 1,
    },
  },
  {
    $limit: 1,
  },
]);
```
