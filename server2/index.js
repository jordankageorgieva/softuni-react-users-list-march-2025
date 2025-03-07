const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to enable CORS
app.use(cors());

app.listen(port, () => console.log(`Server is running on port ${port}`));

// const data = {
//     "user_1": {
//         "_id": "user_1",
//         "firstName": "Asen",
//         "lastName": "Asenov",
//         "email": "asen@gmail.com",
//         "phoneNumber": "0899999999",
//         "createdAt": "2023-11-01T07:22:00.358Z",
//         "updatedAt": "2023-11-01T07:22:00.358Z",
//         "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
//         "address": {
//             "country": "България",
//             "city": "Перник",
//             "street": "Кракра 2",
//             "streetNumber": "26"
//         }
//     },
//     "user_2": {
//         "_id": "user_2",
//         "firstName": "Another",
//         "lastName": "User",
//         "email": "anotheruser@example.com",
//         "phoneNumber": "1234567890",
//         "createdAt": "2023-11-01T07:22:00.358Z",
//         "updatedAt": "2023-11-01T07:22:00.358Z",
//         "imageUrl": "https://cdn3.vectorstock.com/i/1000x1000/54/17/person-gray-photo-placeholder-man-vector-24005417.jpg",
//         "address": {
//             "country": "USA",
//             "city": "New York",
//             "street": "123 Main St",
//             "streetNumber": "5"
//         }
//     }
// };

const data = {
    "user_1": {
        "_id": "user_1",
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
    "user_2": {
        "_id": "user_2",
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
    "user_3": {
        "_id": "user_3",
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
    "user_4": {
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
        "_id": "user_4"
    },
    "user_5": {
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
        "_id": "user_5"
    },
    "user_6": {
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
        "_id": "user_6"
    },
    "user_7": {
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
        "_id": "user_7"
    },
    "user_8": {
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
        "_id": "user_8"
    },
    "user_9": {
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
        "_id": "user_9"
    },
    "1user_0": {
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
        "_id": "1user_0"
    },
    "1user_2": {
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
        "_id": "1user_2"
    },
    "1user_3": {
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
        "_id": "1user_3"
    },
    "1user_4": {
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
        "_id": "1user_4"
    },
    "1user_5": {
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
        "_id": "1user_5"
    },
    "1user_6": {
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
        "_id": "1user_6"
    },
    "1user_7": {
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
        "_id": "1user_7"
    },
    "1user_8": {
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
        "_id": "1user_8"
    },
    "1user_9": {
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
        "_id": "1user_9"
    },
    "2user_0": {
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
        "_id": "2user_0"
    },
    "2user_1": {
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
        "_id": "2user_1"
    },
    "2user_2": {
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
        "_id": "2user_2"
    },
    "2user_3": {
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
        "_id": "2user_3"
    },
    "2user_4": {
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
        "_id": "2user_4"
    },
    "2user_5": {
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
        "_id": "2user_5"
    },
    "2user_6": {
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
        "_id": "2user_6"
    }
};

// const data = {
//     "todo_1": {
//         "_id": "todo_1",
//         "text": "Give dog a bath",
//         "isCompleted": true
//     },
//     "todo_2": {
//         "_id": "todo_2",
//         "text": "Do laundry",
//         "isCompleted": true
//     },
//     "todo_3": {
//         "_id": "todo_3",
//         "text": "Vacuum floor",
//         "isCompleted": false
//     },
//     "todo_4": {
//         "_id": "todo_4",
//         "text": "Feed cat",
//         "isCompleted": true
//     },
//     "todo_5": {
//         "_id": "todo_5",
//         "text": "Change light bulbs",
//         "isCompleted": false
//     },
//     "todo_6": {
//         "_id": "todo_6",
//         "text": "Go to Store",
//         "isCompleted": true
//     },
//     "todo_7": {
//         "_id": "todo_7",
//         "text": "Fill gas tank",
//         "isCompleted": true
//     },
//     "todo_8": {
//         "_id": "todo_8",
//         "text": "Change linens",
//         "isCompleted": false
//     },
//     "todo_9": {
//         "_id": "todo_9",
//         "text": "Rake leaves",
//         "isCompleted": true
//     },
//     "1todo_0": {
//         "_id": "todo_10",
//         "text": "Bake Cookies",
//         "isCompleted": false
//     },
//     "1todo_1": {
//         "_id": "todo_11",
//         "text": "Take nap",
//         "isCompleted": true
//     },
//     "1todo_2": {
//         "_id": "todo_12",
//         "text": "Read book",
//         "isCompleted": true
//     },
//     "1todo_3": {
//         "_id": "todo_13",
//         "text": "Exercise",
//         "isCompleted": false
//     },
//     "1todo_4": {
//         "_id": "todo_14",
//         "text": "Give dog a bath",
//         "isCompleted": false
//     },
//     "1todo_5": {
//         "_id": "todo_15",
//         "text": "Do laundry",
//         "isCompleted": false
//     },
//     "1todo_6": {
//         "_id": "todo_16",
//         "text": "Vacuum floor",
//         "isCompleted": false
//     },
//     "1todo_7": {
//         "_id": "todo_17",
//         "text": "Feed cat",
//         "isCompleted": true
//     },
//     "1todo_8": {
//         "_id": "todo_18",
//         "text": "Change light bulbs",
//         "isCompleted": false
//     },
//     "1todo_9": {
//         "_id": "todo_19",
//         "text": "Go to Store",
//         "isCompleted": false
//     },
//     "2todo_0": {
//         "_id": "todo_20",
//         "text": "Fill gas tank",
//         "isCompleted": false
//     }
// };

app.get('/data/users', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data);
});

app.get('/data/users/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data[req.params.id]);
});

app.post('/data/users', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    // const id = req.params.id;
    const id = `user_${Date.now()}`;
    console.log(`POST request received for ID: ${id}`);
    if (data[id]) {
        return res.status(400).json({ error: 'Todo already exists' });
    }
    data[id] = { ...req.body, _id: id };
    console.log("request body is " + JSON.stringify(req.body, false, "\t"));
    console.log(`User with ID: ${id} created successfully`);
    res.status(201).json(data[id]);
});

app.post('/data/users/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    const id = req.params.id;
    console.log(`POST request received for ID: ${id} with data ${JSON.stringify(req.body, false, "\t")}`);
    if (!data[id]) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    data[id] = {_id: id, ...req.body};
    console.log(`User with ID: ${id} updated successfully`);
    res.status(200).json(data[id]);
});



app.delete('/data/users/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Content-Type', 'application/json');
    const id = req.params.id;
    console.log(`DELETE request received for ID: ${id}`);
    if (!data[id]) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    delete data[id];
    console.log(`Todo with ID: ${id} deleted successfully`);
    res.status(200).json({ message: 'Todo deleted successfully' });
});

app.use('/', (req, res) => {
    res.send('Hello from server.');
});