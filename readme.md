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
