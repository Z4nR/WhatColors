# WhatColors Server

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

| Env Name        | Description                                                                                                            |
| :-------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `DB_CONNECTION` | This env contain connection to Mongo DB Cloud                                                                          |
| `EMAIL`         | This env contain email to send code                                                                                    |
| `PASS`          | This env contain email password using app password setting in google account after setting 2nd Authentification Active |

## API Reference

### For Individual User

#### Create Individual Test Data

```bash
  POST /user/new
```

#### Get Individual Test Data

```bash
  GET /user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

### For Group Test Admin

#### Create Group Test

```bash
  POST /group/new
```

#### Send Test Code To Admin Email

```bash
  POST /group/${id}/code
```

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------ |
| `id`      | `string` | **Required**. Id of group |

#### Verify Code For Admin and Client

```bash
  POST /group/${codeVerify}/verify
```

| Parameter    | Type     | Description                                    |
| :----------- | :------- | :--------------------------------------------- |
| `codeVerify` | `string` | **Required**. Code Verification to Verify Role |

#### Get Group Test Data

```bash
  GET /group/${id}/data
```

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------ |
| `id`      | `string` | **Required**. Id of group |

#### Get Clients Data For Group Test

```bash
  GET /group/${id}/clients
```

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------ |
| `id`      | `string` | **Required**. Id of group |

#### Delete Group Test and Clients Data

```bash
  DELETE /group/${id}/delete
```

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------ |
| `id`      | `string` | **Required**. Id of group |

### For Client User

#### Create Client Test Data By Group Id

```bash
  POST /client/${id}/new
```

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------ |
| `id`      | `string` | **Required**. Id of group |

#### Get Client Test Data

```bash
  GET /client/${id}/data
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**. Id of client |

### For Article

#### Create Article

```bash
  POST /article/new
```

#### Get Client Test Data

```bash
  GET /article/data
```

### For Search Test Data

```bash
  POST /search?name=${query}
```

| Query   | Type     |
| :------ | :------- |
| `query` | `string` |
