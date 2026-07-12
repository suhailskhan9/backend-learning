# PostgreSQL Basics

## What is PostgreSQL?

- PostgreSQL is a **database server software**.
- It runs as a **background process**.
- It stores databases.
- It waits for client applications to connect, execute queries, and return the results.
- A single PostgreSQL server can host **multiple databases**.

---

## Server vs Database

A **server** is the software that manages databases.

A **database** is a collection of related data stored inside the server.

Example:

```text
PostgreSQL Server
├── postgres
├── buildboard
├── school
└── ecommerce
```

---

## PostgreSQL Clients

### psql

- Primary tool for learning PostgreSQL.
- Command-line client used to interact with the PostgreSQL server.

Why learn `psql`?

- Works on any machine.
- Faster for development.
- Commonly used on remote servers where a GUI may not be available.
- Helps understand PostgreSQL better.

### pgAdmin

- A graphical client for PostgreSQL.
- Used for visualizing databases, inspecting tables, and exploring data.
- It is **not** the database itself.
- It simply helps you work with PostgreSQL.

Analogy:

- VS Code helps you work with Node.js.
- Similarly, pgAdmin helps you work with PostgreSQL.

---

## Express and PostgreSQL

The Express application acts as a **PostgreSQL client**.

It is called a client because it connects to the PostgreSQL server, sends SQL queries, and receives the results.

The **pg** driver establishes and manages this communication.

Flow:

```text
Express App
      │
      │ pg driver
      ▼
PostgreSQL Server
```

---

## Default Databases

When PostgreSQL is installed, it creates a few default databases.

### postgres

- Default database provided for administration and general use.

### template0

- A pristine template used internally by PostgreSQL.
- Generally should not be modified.

### template1

- Default template used when creating new databases.
- Whenever a new database is created, PostgreSQL copies it from `template1`.

---

## Connecting to PostgreSQL

Default port:

```bash
psql -U postgres
```

Custom port:

```bash
psql -U postgres -p 5433
```

---

## psql Meta Commands

psql meta-commands start with `\`.

They are interpreted by **psql itself**, not by the PostgreSQL server, so they are **not SQL commands**.

```text
\l
```

- Lists all databases.

```text
\c database_name
```

- Switches to another database.

```text
\d
```

- Describes a database object (table, view, etc.).

```text
\dt
```

- Lists all tables in the current database.



# Database Connections & pg

## What is a database connection?

A database connection is a communication channel between the Node.js application and the PostgreSQL server.

When a connection is opened (created) between the Node app and the PostgreSQL server:

1. PostgreSQL authenticates the client by asking for credentials (username, password, etc.).
2. If the credentials are valid, the connection is established.
3. The Node application can now send SQL queries and receive results.
4. The connection remains open until it is explicitly closed.

---

## What is a driver?

A **driver** is a program that helps establish communication between the Node.js application and the PostgreSQL server.

Node.js understands JavaScript, while PostgreSQL understands its own **wire protocol** (the language used to communicate over the network). Since Node cannot directly speak PostgreSQL's protocol, it needs a translator.

The driver acts as that translator.

### Responsibilities of a driver

- Open and close database connections
- Authenticate with the database
- Send SQL queries
- Receive query results
- Parse returned data
- Handle network errors

The official PostgreSQL driver for Node.js is **pg**.

---

## Client vs Pool

### Client

- Represents a **single database connection**.
- You manually connect and disconnect.
- Suitable for:
  - Small scripts
  - Database migrations
  - One-time tasks

Flow:

Connect → Query → Disconnect

---

### Pool

- Manages a collection of reusable database connections.
- Instead of creating a new connection every time, it reuses existing ones.
- Suitable for web servers where many requests can arrive simultaneously.
- This is why most Express applications use `Pool`.

---

## Why is opening a connection for every request inefficient?

Opening a new connection for every request is expensive because every connection requires:

- Authentication
- Network setup
- RAM
- CPU
- Database resources
- Time

Real-world analogy:

❌ Bad approach

Customer enters → Build an entire kitchen → Cook → Destroy kitchen → Repeat

✅ Better approach

Kitchen already exists → Customers come → Kitchen serves everyone

---

## Why does connection pooling exist?

Instead of creating new connections repeatedly, we create a small collection of reusable connections.

This collection is called a **connection pool**.

Instead of:

Open → Authenticate → Use → Close

we simply:

Borrow → Use → Return

The connection is returned to the pool after the query so it can be reused by another request.

Benefits:
- Faster
- Less resource usage
- Fewer connection creations
- Better scalability