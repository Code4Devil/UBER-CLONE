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
```

</rewritten_file>
