# To Start

```bash
vite
```

Or

```bash
npm run dev
```

# Database Set Up

1. Create a database named `task`

```sql
CREATE DATABASE task;
```

2. Set up your connection

inside `api/index.js` change the configuration object with your own credentials

```js
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "task",
});
```

## To Run The Back End

```bash
cd api
```

```bash
npm install
```

```bash
node .
```
