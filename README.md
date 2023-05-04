# HACKATON - Diary

## setup
1. Use `npm install` in the BE folder to install packages
2. The API contains a setup script for a database, but **no database is currently connected**. You'll need setup a database such as elephantSQL
3. Create .env file and inlcude a port and DB_URL i.e
```
DB_URL = postgres://username:password@host/db_name
PORT = 3000
```
4. npm run setup-db && npm run dev to start api on your localhost

## Functionality

### All Entries
/diaries will get you a list of all the entries

### Get By ID
/diaries/[post_id] will display specific entry

## Post

/diaries with this format using a api tester will post a new entry

```
{
    "title": "entry",
    "content": "entry",
    "catergory": "entry",
    "mood": "entry"
}
```

## Delete
/diaries/[post_id] will delete that specific entry

## Update

/diaries/[post_id] using patch will update a specific post using the following format in a api tester
```
{
    "title": "entry",
    "content": "entry"
}
```

### Frontend

This has not been started but the folders exist