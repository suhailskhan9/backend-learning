# JWT (JSON Web Tokens)

- A JWT (JSON Web Token) is a **signed token** used to identify a user across multiple HTTP requests.
- HTTP is **stateless**, meaning each request is independent.
- The server does not automatically remember who sent previous requests.
- Therefore, every request must include some way to identify the user (such as a JWT).

## Authentication Flow

### After successful login

```text
Server
    ↓
Creates JWT
    ↓
Returns JWT to the client
```

### Future requests

```text
Client
    ↓
Sends JWT with each request
    ↓
Server verifies the JWT
    ↓
If valid, identifies the user
```

If the JWT is valid, the server can create:

```js
req.user
```

---

# JWT Structure

A JWT is a single string divided into **three parts**:

```text
Header.Payload.Signature
```

## Header

Contains metadata about the token, such as:

- Signing algorithm (e.g., `HS256`)
- Token type (`JWT`)

Example:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

---

## Payload

Contains **claims** (user information), such as:

- User ID
- Email
- Role

Example:

```json
{
  "id": 7,
  "email": "alice@example.com",
  "role": "user"
}
```

### Important Notes

- The **Header** and **Payload** are **Base64URL encoded**, **not encrypted**.
- Anyone who has the JWT can decode and read them.
- **Never store sensitive information** in the payload, such as:
  - Passwords
  - Password hashes
  - API keys
  - Credit card information

---

## Signature

The signature is generated using:

- Header
- Payload
- Secret Key (known only to the server)

The signature:

- Proves that the JWT was issued by the server.
- Protects the token from being modified without detection.
- Becomes invalid if the Header or Payload is changed.

---

# Decode vs Verify

## Decode

- Reads the Header and Payload.
- No secret key is required.
- Anyone can do it.
- Does **not** prove the JWT is authentic.

## Verify

- Checks whether the JWT is authentic and has not been modified.
- Requires the server's secret key.
- Can only be performed by the server (or another trusted service with the same secret).

---

# Secret Key

- Known only to the server.
- Used to **sign** JWTs during login.
- Used again to **verify** JWTs on future requests.
- Must never be exposed to clients.
- If the secret key is compromised, attackers can create valid JWTs that your server will trust.

---

# JWT vs Sessions

## Sessions

- Server stores authentication state (session).
- Client sends a session ID with each request.
- Server looks up the session to identify the user.
- **Stateful authentication**.

## JWT

- Client stores the JWT.
- Client sends the JWT with each request.
- Server verifies the JWT to identify the user.
- **Stateless authentication**.

---

# Why JWT?

- Eliminates the need for server-side session storage.
- Fits well with REST APIs.
- Scales well because the server does not maintain authentication state.
- Allows the server to identify and authenticate users by verifying the JWT instead of looking up session state.
