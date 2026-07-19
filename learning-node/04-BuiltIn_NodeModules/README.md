# Built-in Node.js Modules

Built-in modules (also called **core modules**) are libraries that ship with Node.js and are part of the Node.js runtime itself.  
Unlike external packages, they do **not** require installation.

## Common Core Modules

1. **fs** (File System) – Interact with the file system  
2. **path** – Work safely with file and directory paths  
3. **http** – Create HTTP servers and clients  
4. **os** – Retrieve operating system information  
5. **events** – Implement the Observer (Publish-Subscribe) pattern  
6. **process** – Interact with the current Node.js process  
7. **crypto** – Provides cryptographic functionality  

---

## 1. fs (File System)

**Capabilities:**
- Read files
- Write files
- Create directories
- Delete files
- Rename files

---

## 2. path

**Real backend usage:**
- File uploads
- Static file serving
- Configuration files
- Template locations

---

## 3. http

**Real backend usage:**
- Express is built on top of this module
- Every incoming API request eventually reaches the HTTP server

---

## 4. os

**Useful information:**
- Platform
- CPU count
- Architecture
- Free memory
- Hostname

**Real backend usage:**
- Monitoring
- Diagnostics
- Logging system information
- Performance tuning

---

## 5. events

**Real backend usage:**
- Notifications
- Logging
- Internal application events
- Streams
- Many Node.js APIs are built on top of `EventEmitter`

---

## 6. process

**Useful properties:**
- Environment variables
- Command-line arguments
- Process ID
- Current working directory
- Exit events

**Real backend usage:**
- Reading configuration
- Graceful shutdown
- Logging
- CLI tools

---

## 7. crypto

**Real backend usage:**
- Password hashing (indirectly via libraries like bcrypt)
- Token generation
- Secure IDs
- API keys
- Cryptographically secure random numbers


## Frameworks and Libraries Built on Core Modules

Frameworks are built on top of these modules.

**Examples:**
- **Express** wraps `http`
- File upload libraries use `fs`
- Static file middleware relies on `path`
- Configuration libraries read from `process.env`
- Event-driven libraries build on `EventEmitter`