# Project Support### Introduction
This project is the second task given by HNG
* Users can be created, gotten, updated and deleted.
### Installation Guide
* Clone this repository [here](https://github.com/krendus).
* The develop branch is the most stable branch at any given time, ensure you're working from it.
* Run npm install to install all dependencies
* You can either work with the default mLab database or use your locally installed MongoDB. Do configure to your choice in the application entry file.
* Create an .env file in your project root folder and add your variables. See .env.sample for assistance.### Usage
* Run npm start:dev to start the application.
* Connect to the API using Postman on port 5000. 

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
            "_id": "64fe2d7c92aee5c7315a670e",
            "__v": 0
        }
    }
```
| HTTP Verbs | Endpoint | Action |
| --- | --- | --- |
| GET | /api?name=krendus | To get a single user |
##### Response
```json
    {
        "message": "person created successfully",
        "data": {
            "name": "krendus",
            "created_at": "2023-09-10T20:56:28.987Z",
            "updated_at": "2023-09-10T20:56:28.987Z",
            "_id": "64fe2d7c92aee5c7315a670e",
            "__v": 0
        }
    }
```
| HTTP Verbs | Endpoint | Action |
| --- | --- | --- |
| PATCH | /api?name=krendus | To create a new cause |
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
            "_id": "64fe2d7c92aee5c7315a670e",
            "name": "samuel",
            "created_at": "2023-09-10T20:56:28.987Z",
            "updated_at": "2023-09-10T21:54:47.530Z",
            "__v": 0
        }
    }
```
| HTTP Verbs | Endpoint | Action |
| --- | --- | --- |
| DELETE | /api?name=example_name | To delete a single user |

### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.* [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.