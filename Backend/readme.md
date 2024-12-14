# User Registration API Documentation

## Register User
Register a new user in the system.

### Endpoint
```http
POST /users/register
```

### Request Body
```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string"
}
```

### Validation Rules
- **Email**: Must be a valid email address
- **Password**: Minimum 6 characters long
- **First Name**: Minimum 3 characters long

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Success Response
**Status Code**: `201 Created`

```json
{
  "token": "JWT_TOKEN_STRING",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Error Responses

#### Validation Error
**Status Code**: `400 Bad Request`
```json
{
  "errors": [
    {
      "msg": "Invalid email address",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Missing Required Fields
**Status Code**: `400 Bad Request`
```json
{
  "error": "All fields are required"
}
```

### Required Fields
- `fullname.firstname` (String, min length: 3)
- `fullname.lastname` (String, optional)
- `email` (String, valid email format)
- `password` (String, min length: 6)

### Notes
- The password is hashed before storing in the database
- A JWT token is generated and returned upon successful registration
- All responses are in JSON format

## Login User
Authenticate an existing user and receive an access token.

### Endpoint
```http
POST /users/login
```

### Request Body
```json
{
  "email": "string",
  "password": "string"
}
```

### Validation Rules
- **Email**: Must be a valid email address
- **Password**: Minimum 6 characters long

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Success Response
**Status Code**: `200 OK`

```json
{
  "token": "JWT_TOKEN_STRING",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Error Responses

#### Validation Error
**Status Code**: `400 Bad Request`
```json
{
  "errors": [
    {
      "msg": "Invalid email address",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Invalid Credentials
**Status Code**: `401 Unauthorized`
```json
{
  "message": "Invalid email or password"
}
```

### Required Fields
- `email` (String, valid email format)
- `password` (String, min length: 6)

### Notes
- The password is compared with the hashed password stored in the database
- A JWT token is generated and returned upon successful authentication
- All responses are in JSON format

## Get User Profile
Get the authenticated user's profile information.

### Endpoint
```http
GET /users/profile
```

### Headers
```
Authorization: Bearer <JWT_TOKEN>
```

### Success Response
**Status Code**: `200 OK`

```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Error Response

#### Unauthorized
**Status Code**: `401 Unauthorized`
```json
{
  "message": "Unauthorized"
}
```

### Notes
- Requires a valid JWT token in the Authorization header
- Token must not be blacklisted

## Logout User
Logout the currently authenticated user.

### Endpoint
```http
GET /users/logout
```

### Headers
```
Authorization: Bearer <JWT_TOKEN>
```

### Success Response
**Status Code**: `200 OK`
```json
{
  "message": "Logged out successfully"
}
```

### Error Response

#### Unauthorized
**Status Code**: `401 Unauthorized`
```json
{
  "message": "Unauthorized"
}
```

### Notes
- Requires a valid JWT token in the Authorization header
- The token will be blacklisted after logout
- Clears the authentication cookie if present
- Future requests with the same token will be rejected
```

</rewritten_file>