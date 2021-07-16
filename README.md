# node-challenge-mailing-list

_**Credit:** This challenge was created by [Techtonica](https://github.com/Techtonica/curriculum). You can find the original [here](https://github.com/Techtonica/curriculum/blob/main/projects/mailing-list-rest-api.md)._

## Routes

### Index

#### Route

`/lists` - fetch all the existing list names

#### Response Body

```json
["staff", "students"]
```

### GET single list

#### Route

`/lists/:name` - get list by name, e.g. `/lists/staff`

#### Response Body

```json
{
  "name": "staff",
  "members": ["talea@techtonica.org", "michelle@techtonica.org"]
}
```

### DELETE single list

#### Route

`/lists/:name` - delete list by name

### PUT - update single list

#### Path

`/lists/:name` - add or update a list with the given name

#### Request Body

```json
{
  "name": "my-new-list",
  "members": ["me@me.com"]
}
```
