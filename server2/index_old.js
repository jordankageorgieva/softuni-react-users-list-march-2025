const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to enable CORS
app.use(cors());

app.listen(port, () => console.log(`Server is running on port ${port}`));

const users = {
  "recource_1": {
    "_id": "recource_1",
    "firstName": "Asen",
    "lastName": "Asenov",
    "email": "asen@gmail.com",
    "phoneNumber": "0899999999",
    "createdAt": "2023-11-01T07:22:00.358Z",
    "updatedAt": "2023-11-01T07:22:00.358Z",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "България",
      "city": "Перник",
      "street": "Кракра 2",
      "streetNumber": "26"
    }
  },
  "recource_2": {
    "_id": "recource_2",
    "firstName": "Another",
    "lastName": "User",
    "email": "anotheruser@example.com",
    "phoneNumber": "1234567890",
    "createdAt": "2023-11-01T07:22:00.358Z",
    "updatedAt": "2023-11-01T07:22:00.358Z",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "USA",
      "city": "New York",
      "street": "123 Main St",
      "streetNumber": "5"
    }
  },
  "recource_3": {
    "_id": "recource_3",
    "firstName": "John",
    "lastName": "Doe",
    "email": "johndoe@example.com",
    "phoneNumber": "9876543210",
    "createdAt": "2023-11-01T07:22:00.358Z",
    "updatedAt": "2023-11-01T07:22:00.358Z",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Canada",
      "city": "Toronto",
      "street": "456 Elm St",
      "streetNumber": "7"
    }
  },
  "recource_4": {
    "firstName": "TestUser1",
    "lastName": "TestUser1",
    "email": "TestUser1@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:29:22.236Z",
    "updatedAt": "2025-03-06T07:29:22.237Z",
    "_id": "recource_4"
  },
  "recource_5": {
    "firstName": "TestUser2",
    "lastName": "TestUser2",
    "email": "TestUser2@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:29:58.066Z",
    "updatedAt": "2025-03-06T07:29:58.066Z",
    "_id": "recource_5"
  },
  "recource_6": {
    "firstName": "TestUser3",
    "lastName": "TestUser3",
    "email": "TestUser3@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:30:17.465Z",
    "updatedAt": "2025-03-06T07:30:17.465Z",
    "_id": "recource_6"
  },
  "recource_7": {
    "firstName": "TestUser4",
    "lastName": "TestUser4",
    "email": "TestUser4@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:30:37.569Z",
    "updatedAt": "2025-03-06T07:30:37.569Z",
    "_id": "recource_7"
  },
  "recource_8": {
    "firstName": "TestUser5",
    "lastName": "TestUser5",
    "email": "TestUser5@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:31:30.569Z",
    "updatedAt": "2025-03-06T07:31:30.569Z",
    "_id": "recource_8"
  },
  "recource_9": {
    "firstName": "TestUser6",
    "lastName": "TestUser6",
    "email": "TestUser6@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:31:47.785Z",
    "updatedAt": "2025-03-06T07:31:47.785Z",
    "_id": "recource_9"
  },
  "1recource_0": {
    "firstName": "TestUser7",
    "lastName": "TestUser7",
    "email": "TestUser7@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:32:10.553Z",
    "updatedAt": "2025-03-06T07:32:10.553Z",
    "_id": "1recource_0"
  },
  "1recource_2": {
    "firstName": "TestUser8",
    "lastName": "TestUser8",
    "email": "TestUser8@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:32:47.841Z",
    "updatedAt": "2025-03-06T07:32:47.841Z",
    "_id": "1recource_2"
  },
  "1recource_3": {
    "firstName": "TestUser9",
    "lastName": "TestUser9",
    "email": "TestUser9@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:33:10.625Z",
    "updatedAt": "2025-03-06T07:33:10.625Z",
    "_id": "1recource_3"
  },
  "1recource_4": {
    "firstName": "TestUser10",
    "lastName": "TestUser10",
    "email": "TestUser10@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:33:44.921Z",
    "updatedAt": "2025-03-06T07:33:44.921Z",
    "_id": "1recource_4"
  },
  "1recource_5": {
    "firstName": "TestUser11",
    "lastName": "TestUser11",
    "email": "TestUser11@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:34:06.817Z",
    "updatedAt": "2025-03-06T07:34:06.817Z",
    "_id": "1recource_5"
  },
  "1recource_6": {
    "firstName": "TestUser12",
    "lastName": "TestUser12",
    "email": "TestUser12@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:34:36.289Z",
    "updatedAt": "2025-03-06T07:34:36.289Z",
    "_id": "1recource_6"
  },
  "1recource_7": {
    "firstName": "TestUser13",
    "lastName": "TestUser13",
    "email": "TestUser13@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:35:04.841Z",
    "updatedAt": "2025-03-06T07:35:04.841Z",
    "_id": "1recource_7"
  },
  "1recource_8": {
    "firstName": "TestUser14",
    "lastName": "TestUser14",
    "email": "TestUser14@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:37:06.401Z",
    "updatedAt": "2025-03-06T07:37:06.401Z",
    "_id": "1recource_8"
  },
  "1recource_9": {
    "firstName": "TestUser15",
    "lastName": "TestUser15",
    "email": "TestUser15@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:37:43.321Z",
    "updatedAt": "2025-03-06T07:37:43.321Z",
    "_id": "1recource_9"
  },
  "2recource_0": {
    "firstName": "TestUser16",
    "lastName": "TestUser16",
    "email": "TestUser16@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:38:04.089Z",
    "updatedAt": "2025-03-06T07:38:04.089Z",
    "_id": "2recource_0"
  },
  "2recource_1": {
    "firstName": "TestUser17",
    "lastName": "TestUser17",
    "email": "TestUser17@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:38:26.433Z",
    "updatedAt": "2025-03-06T07:38:26.433Z",
    "_id": "2recource_1"
  },
  "2recource_2": {
    "firstName": "TestUser18",
    "lastName": "TestUser18",
    "email": "TestUser18@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:39:05.972Z",
    "updatedAt": "2025-03-06T07:39:05.972Z",
    "_id": "2recource_2"
  },
  "2recource_3": {
    "firstName": "TestUser19",
    "lastName": "TestUser19",
    "email": "TestUser19@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:40:06.457Z",
    "updatedAt": "2025-03-06T07:40:06.457Z",
    "_id": "2recource_3"
  },
  "2recource_4": {
    "firstName": "TestUser20",
    "lastName": "TestUser20",
    "email": "TestUser20@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:40:32.849Z",
    "updatedAt": "2025-03-06T07:40:32.849Z",
    "_id": "2recource_4"
  },
  "2recource_5": {
    "firstName": "TestUser21",
    "lastName": "TestUser21",
    "email": "TestUser21@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:40:54.977Z",
    "updatedAt": "2025-03-06T07:40:54.977Z",
    "_id": "2recource_5"
  },
  "2recource_6": {
    "firstName": "TestUser22",
    "lastName": "TestUser22",
    "email": "TestUser22@TestUser.com",
    "phoneNumber": "2345678",
    "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
    "address": {
      "country": "Bulgaria",
      "city": "Sofia",
      "street": "123",
      "streetNumber": "123"
    },
    "createdAt": "2025-03-06T07:41:17.409Z",
    "updatedAt": "2025-03-06T07:41:17.409Z",
    "_id": "2recource_6"
  }
};

app.get('/data/users', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'application/json');
  res.status(200).json(users);
  console.log(`GET ALL users`);
});

app.get('/data/users/:id', (req, res) => {
  console.log(`GET request received for ID: ${id}`);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'application/json');
  res.status(200).json(users[req.params.id]);

});

app.put('/data/users/:id', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'application/json');
  const id = req.params.id;
  console.log(`PUT request received for ID: ${id}`);
  if (!users[id]) {
    return res.status(404).json({ error: 'User not found' });
  }
  users[id] = req.body;
  console.log(`Users with ID: ${id} updated successfully`);
  res.status(200).json(users[id]);
});

app.post('/data/users/:id', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'application/json');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
  const id = req.params.id;
  console.log(`POST request received for ID: ${id}`);
  if (users[id]) {
    return res.status(400).json({ error: 'User already exists' });
  }
  users[id] = req.body;
  console.log(`User with ID: ${id} created successfully`);
  res.status(201).json(users[id]);
});

// app.delete('/data/todos/:id', (req, res) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Content-Type', 'application/json');
//     const id = req.params.id;
//     console.log(`DELETE request received for ID: ${id}`);
//     if (!data[id]) {
//         return res.status(404).json({ error: 'Todo not found' });
//     }
//     delete data[id];
//     console.log(`Todo with ID: ${id} deleted successfully`);
//     res.status(200).json({ message: 'Todo deleted successfully' });
// });

app.use('/', (req, res) => {
  res.send('Hello from server.');
});