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



# Captain API Documentation

## Register Captain
Register a new captain in the system.

### Endpoint
```http
POST /captains/register
```

### Request Body
```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string",
  "vehicle": {
    "color": "string",
    "plate": "string",
    "capacity": "number",
    "vehicleType": "string"
  }
}
```

### Validation Rules
- **Fullname**: Required
- **Email**: Required
- **Password**: Required
- **Vehicle Color**: Required
- **Vehicle Plate**: Required
- **Vehicle Capacity**: Required
- **Vehicle Type**: Required

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.driver@example.com",
  "password": "password123",
  "vehicle": {
    "color": "black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "sedan"
  }
}
```

### Success Response
**Status Code**: `201 Created`

```json
{
  "token": "JWT_TOKEN_STRING",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.driver@example.com",
    "vehicle": {
      "color": "black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "sedan"
    }
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
      "msg": "Full name is required",
      "param": "fullname",
      "location": "body"
    }
  ]
}
```

#### Captain Already Exists
**Status Code**: `400 Bad Request`
```json
{
  "message": "Captain already exists"
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
- `fullname` (Object)
  - `firstname` (String, required)
  - `lastname` (String)
- `email` (String, required)
- `password` (String, required)
- `vehicle` (Object)
  - `color` (String, required)
  - `plate` (String, required)
  - `capacity` (Number, required)
  - `vehicleType` (String, required)

### Notes
- The password is hashed before storing in the database
- A JWT token is generated and returned upon successful registration
- All responses are in JSON format
- Email must be unique in the system
- All vehicle information is required

## Login Captain
Authenticate an existing captain and receive an access token.

### Endpoint
```http
POST /captains/login
```

### Request Body
```json
{
  "email": "string",
  "password": "string"
}
```

### Example Request
```json
{
  "email": "john.driver@example.com",
  "password": "password123"
}
```

### Success Response
**Status Code**: `200 OK`
```json
{
  "token": "JWT_TOKEN_STRING",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.driver@example.com",
    "vehicle": {
      "color": "black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "sedan"
    },
    "status": "inactive",
    "socketId": null
  }
}
```

### Error Responses

#### Invalid Credentials
**Status Code**: `400 Bad Request`
```json
{
  "message": "Invalid username or password"
}
```

#### Captain Not Found
**Status Code**: `400 Bad Request`
```json
{
  "message": "Captain not found"
}
```

## Get Captain Profile
Get the authenticated captain's profile information.

### Endpoint
```http
GET /captains/profile
```

### Headers
```
Authorization: Bearer <JWT_TOKEN>
```

### Success Response
**Status Code**: `200 OK`
```json
{
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.driver@example.com",
    "vehicle": {
      "color": "black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "sedan"
    },
    "status": "inactive",
    "socketId": null
  }
}
```

## Logout Captain
Logout the currently authenticated captain.

### Endpoint
```http
GET /captains/logout
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

### Notes for Captain Routes
- All endpoints except registration and login require authentication
- Authentication is done via JWT tokens
- Tokens are sent in the Authorization header as Bearer tokens
- The captain's status is maintained (active/inactive)
- Socket ID is used for real-time communication
- Vehicle information is required and validated
- Vehicle types are restricted to: "car", "motorcycle", "auto"
- Vehicle capacity must be at least 1
- First name must be at least 3 characters long
- Password must be at least 6 characters long
