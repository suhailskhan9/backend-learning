# Authentication

Authentication is the process of letting users sign up / sign in to websites via username/password or using SSO (Single Sign-On).

## Sign-up / Sign-in Methods

- Sign up with email/password
- Sign up with magic links
- Sign up with OTPs
- Login with Google

## Approaches

### 1. Sessions

```
Login → Server creates session → Session stored on server → Browser receives session cookie → Future requests send cookie → Server looks up session
```

**Characteristics:** Stateful, server stores session data, widely used in traditional apps, works well with server-rendered apps.

**Pros:**
- Easy logout
- Easy session invalidation

**Cons:**
- Requires server-side session storage
- Horizontal scaling requires shared session storage (e.g. Redis)
- Slightly more infrastructure

### 2. JWT (JSON Web Tokens)

```
Login → Server creates JWT → Client stores JWT → Future requests send JWT → Server verifies signature → User identified
```

**Characteristics:** Stateless, no session storage required, very common for REST APIs.

**Pros:**
- Easy scaling
- Self-contained
- No session database

**Cons:**
- Logout is more complex
- Token revocation is harder
- Requires careful expiration strategy

### 3. OAuth

**Examples:** Google Login, GitHub Login, Microsoft Login

Instead of verifying passwords yourself, another provider authenticates the user.