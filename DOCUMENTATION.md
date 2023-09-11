#### Endpoints
| HTTP Verbs | Endpoint | Action |
| --- | --- | --- |
| POST | /api | To create a new user |
##### Request

```json
    {
        "name": "krendus"
    }
```
##### Response
```json
    {
        "message": "person created successfully",
        "data": {
            "name": "krendus",
            "created_at": "2023-09-10T20:56:28.987Z",
            "updated_at": "2023-09-10T20:56:28.987Z",
            "id": "64fe2d7c92aee5c7315a670e"
        }
    }
```
| HTTP Verbs | Endpoint | Action |
| --- | --- | --- |
| GET | /api/:id | To get a single user |
##### Response
```json
    {
        "message": "person found successfully",
        "data": {
            "name": "krendus",
            "created_at": "2023-09-10T20:56:28.987Z",
            "updated_at": "2023-09-10T20:56:28.987Z",
            "id": "64fe2d7c92aee5c7315a670e"
        }
    }
```
| HTTP Verbs | Endpoint | Action |
| --- | --- | --- |
| PATCH | /api/:id | To patch a user |
##### Request
```json
    {
        "name": "samuel"
    }
```
##### Response
```json
    {
        "message": "Person updated successfuly",
        "data": {
            "id": "64fe2d7c92aee5c7315a670e",
            "name": "samuel",
            "created_at": "2023-09-10T20:56:28.987Z",
            "updated_at": "2023-09-10T21:54:47.530Z"
        }
    }
```
| HTTP Verbs | Endpoint | Action |
| --- | --- | --- |
| DELETE | /api/:id | To delete a single user |
##### Response
```json
  {
      "message": "person deleted successfully",
      "data": null
  }
```
