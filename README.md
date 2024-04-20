## Digs Findr

Digs Findr is a platform designed to facilitate student accommodation, assits students to find their best suited accommodation options near their universities and also helps landlords to get tenants.

Digs Findr aims to simplify the process of finding accommodation for students, particularly those who are new to a city or university. Built by students for students

It assists students who may not be familiar with the local rental market. Digs Findr does this by **web-scrapping local rental agencies' websites** and displaying them for students. This **removes the burden** for students from having to individually look for accommodation on each rental agency's website.

It helps students who may not be familiar with the local rental market. Digs Findr does this by web-scrapping local rental agencies' websites and displaying them for students. This removes the burden for students from having to individually look for accommodation on each rental agency's website.

Additionally, it provides a platform for landlords to advertise their properties specifically to the student demographic, making it easier for them to fill vacancies. Overall, Digs Findr serves as a bridge between students seeking accommodation and property owners offering rental properties.

## Acknowledgements

Inspired by digsconnect.com
and final year project

## Tech Stack

**Client:** ReactJS, TailwindCSS

**Server:** NodeJS, ExpressJS

**Database:** MongoDB

### Register

POST /register

| Parameter      | Type     | Description                        |
| :------------- | :------- | :--------------------------------- |
| `name`         | `string` | **Required**. User's name          |
| `email`        | `string` | **Required**. User's email         |
| `password`     | `string` | **Required**. User's password      |
| `phoneNumber`  | `string` | **Required**. User's phone number  |
| `governmentID` | `string` | **Required**. User's government ID |
| `gender`       | `string` | **Required**. User's gender        |
| `userAddress`  | `string` | **Required**. User's address       |

### Login

POST /login

| Parameter  | Type     | Description                   |
| :--------- | :------- | :---------------------------- |
| `email`    | `string` | **Required**. User's email    |
| `password` | `string` | **Required**. User's password |

### Get Profile

GET /profile

| Parameter | Type   | Description                                           |
| :-------- | :----- | :---------------------------------------------------- |
| `None`    | `None` | Retrieves user's profile. **Requires authentication** |

### Logout

POST /logout

| Parameter | Type   | Description                                    |
| :-------- | :----- | :--------------------------------------------- |
| `None`    | `None` | Logs out the user. **Requires authentication** |

### Upload Image by Link

POST /upload-by-link

| Parameter | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `link`    | `string` | **Required**. Link to the image |

### Upload Image

POST /upload

| Parameter | Type   | Description                         |
| :-------- | :----- | :---------------------------------- |
| `photos`  | `file` | **Required**. Image files to upload |

### Add New Place

POST /places/new

| Parameter   | Type     | Description                                                  |
| :---------- | :------- | :----------------------------------------------------------- |
| `placeData` | `object` | **Required**. Place data object. **Requires authentication** |

### Get User Places

GET /user-places

| Parameter | Type   | Description                                                     |
| :-------- | :----- | :-------------------------------------------------------------- |
| `None`    | `None` | Retrieves places owned by the user. **Requires authentication** |

### Get Place by ID

GET /places/:id

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. ID of place to fetch |

### Update Place by ID

PUT /places/:id

| Parameter           | Type      | Description                            |
| :------------------ | :-------- | :------------------------------------- |
| `id`                | `string`  | **Required**. ID of place to update    |
| `title`             | `string`  | Title of the place                     |
| `address`           | `string`  | Address of the place                   |
| `propertyType`      | `string`  | Type of property                       |
| `placeOffers`       | `string`  | Offers of the place                    |
| `addedPhotos`       | `array`   | Additional photos of the place         |
| `description`       | `string`  | Description of the place               |
| `extraInfo`         | `string`  | Additional information about the place |
| `furnitureIncluded` | `boolean` | Indicates if furniture is included     |
| `preferredTenants`  | `string`  | Preferred tenants                      |
| `price`             | `number`  | Price of the place                     |

### Book Place

POST /bookings

| Parameter        | Type     | Description                            |
| :--------------- | :------- | :------------------------------------- |
| `place`          | `string` | **Required**. ID of the place to book  |
| `checkIn`        | `string` | **Required**. Check-in date            |
| `checkOut`       | `string` | **Required**. Check-out date           |
| `phoneNumber`    | `string` | **Required**. Phone number of the user |
| `name`           | `string` | **Required**. Name of the user         |
| `numberOfGuests` | `number` | **Required**. Number of guests         |
| `price`          | `number` | **Required**. Price of the booking     |

### Get All Places

GET /places

| Parameter | Type   | Description          |
| :-------- | :----- | :------------------- |
| `None`    | `None` | Retrieves all places |

### Get User Bookings

GET /bookings

| Parameter | Type   | Description                                                            |
| :-------- | :----- | :--------------------------------------------------------------------- |
| `None`    | `None` | Retrieves bookings for the logged-in user. **Requires authentication** |

## Screenshots

<!-- ![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here) -->

## Screenshots

<div style="display:flex;" >
<img  src="/screenshots/1a.png" width="19%" >
<img style="margin-left:10px;" src="/screenshots/2a.png" width="19%" >
<img style="margin-left:10px;" src="/screenshots/3a.png" width="19%" >
<img style="margin-left:10px;" src="/screenshots/4a.png" width="19%" >
<img style="margin-left:10px;" src="/screenshots/5.png" width="19%" >
<img style="margin-left:10px;" src="/screenshots/6.png" width="19%" >
<img style="margin-left:10px;" src="/screenshots/6a.png" width="19%" >
<img style="margin-left:10px;" src="/screenshots/7a.png" width="19%" >
<img style="margin-left:10px;" src="/screenshots/8.png" width="19%" >
<img style="margin-left:10px;" src="/screenshots/8a.png" width="19%" >

</div>

## Features

- Allow landlords to upload properties
- Allows users to view properties
- Web scrap local rental agencies
- Allows students to search for available rooms or properties, connect with landlords or property managers, and finalize rental agreements.
-

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lquincy01/)

## 🚀 About Me

A Rhodes University Computer Science and Information Systems graduate.
Currently studying Honours in Information Systems.
Aspiring software engineer.

## 🛠 Skills

- Languages: C#, Java, Python, PHP, JavaScript, TypeScript, SQL(Postgres, MySql, Ms Server), HTML, CSS(Tailwind, Bootstrap)
- Frameworks: React(Next.js), React Native, Express.js(Node.js)
- Dev Tools: VS code, Visual Studio, Unity3D, GitHub, Eclipse
- Libraries: Redux, Keras, SciKit-Learn, Pandas, MatplotLib, NumPy, MatplotLib, SciPy

## Authors

Lesego Quincy Pitsi

- [@Github Link](https://github.com/l-quincy01)
