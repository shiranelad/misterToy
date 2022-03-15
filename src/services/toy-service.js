// import { storageService } from './storage-service.js'
// import { utilService } from './util-service.js'

import axios from 'axios';

const URL = '//localhost:3030/api/toy/';


// CRUDL : CREATE, READ, UPDATE, DELETE, LIST


// const KEY = 'toysDB'
// _createToys()

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy,
}

function query(filterBy) {
    //   return storageService.query(KEY)
    return axios.get(URL, { params: filterBy }).then((res) => res.data);
}

function getById(toyId) {
    // return storageService.get(KEY, toyId)
    return axios.get(URL + toyId).then((res) => res.data);
}

function remove(toyId) {
    // return storageService.remove(KEY, toyId)
    return axios.delete(URL + toyId);
}

function save(toy) {
    // if (toy._id) return storageService.put(KEY, toy)
    // return storageService.post(KEY, toy)
    if (toy._id) return axios.put(URL + toy._id, toy).then((res) => res.data);
    else return axios.post(URL, toy).then((res) => res.data);  
}

function getEmptyToy() {
    return {
        _id: '',
        name: '',
        price: 0,
        inStock: true,
        createdAt: Date.now(),
        labels: ['Doll', 'Baby'],
        reviews: ['Good', 'Nice', 'Fun'],
    }
}

// function _createToys() {
//     let toys = utilService.loadFromStorage(KEY)
//     if (!toys || !toys.length) {
//         toys = [
//             {
//                 "_id": 17143,
//                 "name": "vestibulum tincidunt",
//                 "price": 83,
//                 "labels": ["Art", "Baby", "Box game"],
//                 "reviews": ["Great toy", "Fun to play"],
//                 "createdAt": "1995-05-05T17:19:08.026Z",
//                 "inStock": true
//             },
//             {
//                 "_id": 17144,
//                 "name": "ac tincidunt",
//                 "price": 71,
//                 "labels": ["Puzzle", "Box game"],
//                 "reviews": ["Great toy", "Fun to play"],
//                 "createdAt": "1989-10-25T19:01:58.686Z",
//                 "inStock": true
//             },
//             {
//                 "_id": 17145,
//                 "name": "facilisis malesuada",
//                 "price": 70,
//                 "labels": ["Puzzle", "Box game"],
//                 "reviews": ["Great toy", "Fun to play"],
//                 "createdAt": "1979-01-17T03:18:23.753Z",
//                 "inStock": false
//             },
//             {
//                 "_id": 17146,
//                 "name": "convallis vestibulum",
//                 "price": 28,
//                 "labels": ["Art", "Baby", "Outdoor"],
//                 "reviews": ["Great toy"],
//                 "createdAt": "1987-12-04T21:25:42.821Z",
//                 "inStock": false
//             },
//             {
//                 "_id": 17147,
//                 "name": "placerat amet",
//                 "price": 93,
//                 "labels": ["Puzzle", "Box game"],
//                 "reviews": ["Great toy"],
//                 "createdAt": "1983-02-25T08:16:33.575Z",
//                 "inStock": false
//             },
//             {
//                 "_id": 17148,
//                 "name": "malesuada augue",
//                 "price": 79,
//                 "labels": ["Art", "Baby"],
//                 "reviews": ["Fun to play"],
//                 "createdAt": "1990-11-26T21:21:16.540Z",
//                 "inStock": true
//             },
//             {
//                 "_id": 17149,
//                 "name": "tempor aliquam",
//                 "price": 62,
//                 "labels": ["Puzzle", "Box game", "Outdoor"],
//                 "reviews": ["Fun to play"],
//                 "createdAt": "1998-04-16T16:48:17.322Z",
//                 "inStock": false
//             },
//             {
//                 "_id": 17150,
//                 "name": "mi vestibulum",
//                 "price": 9,
//                 "labels": ["Art", "Baby", "Outdoor"],
//                 "reviews": ["Great toy", "Fun to play"],
//                 "createdAt": "1984-07-12T14:55:18.131Z",
//                 "inStock": false
//             },
//             {
//                 "_id": 17151,
//                 "name": "nunc magna",
//                 "price": 18,
//                 "labels": ["Art", "Box game"],
//                 "reviews": ["Great toy", "Fun to play"],
//                 "createdAt": "1985-05-17T00:37:14.348Z",
//                 "inStock": false
//             },
//             {
//                 "_id": 17152,
//                 "name": "tortor rutrum",
//                 "price": 37,
//                 "labels": ["Puzzle", "Box game"],
//                 "reviews": ["Great toy"],
//                 "createdAt": "1982-08-17T03:05:25.232Z",
//                 "inStock": false
//             },
//             {
//                 "_id": 17153,
//                 "name": "tincidunt scelerisque",
//                 "price": 63,
//                 "labels": ["Art", "Baby"],
//                 "reviews": ["Fun to play"],
//                 "createdAt": "1994-10-16T08:52:43.541Z",
//                 "inStock": false
//             },
//             {
//                 "_id": 17154,
//                 "name": "dui sit",
//                 "price": 18,
//                 "labels": ["Art", "Box game"],
//                 "reviews": ["Fun to play"],
//                 "createdAt": "1984-02-01T07:24:58.270Z",
//                 "inStock": true
//             },
//             {
//                 "_id": 17155,
//                 "name": "turpis nullam",
//                 "price": 54,
//                 "labels": ["Puzzle", "Box game"],
//                 "reviews": ["Great toy", "Fun to play"],
//                 "createdAt": "1995-11-27T09:07:10.186Z",
//                 "inStock": false
//             },
//             {
//                 "_id": 17156,
//                 "name": "vitae at",
//                 "price": 97,
//                 "labels": ["Art", "Baby"],
//                 "reviews": ["Great toy", "Fun to play"],
//                 "createdAt": "1970-03-29T02:35:58.854Z",
//                 "inStock": true
//             },
//             {
//                 "_id": 17157,
//                 "name": "et odio",
//                 "price": 26,
//                 "labels": ["Art", "Baby"],
//                 "reviews": ["Great toy", "Fun to play", "Wonderful"],
//                 "createdAt": "1976-01-25T11:59:25.322Z",
//                 "inStock": true
//             },
//             {
//                 "_id": 17158,
//                 "name": "augue lacus",
//                 "price": 5,
//                 "labels": ["Art", "Box game", "Puzzle"],
//                 "reviews": ["Great toy", "Fun to play"],
//                 "createdAt": "1986-06-05T00:43:05.004Z",
//                 "inStock": true
//             },
//             {
//                 "_id": 17159,
//                 "name": "mattis magna",
//                 "price": 51,
//                 "labels": ["Art", "Baby"],
//                 "reviews": ["Great toy", "Fun to play"],
//                 "createdAt": "1997-08-07T06:11:29.699Z",
//                 "inStock": false
//             },
//             {
//                 "_id": 17160,
//                 "name": "lacus consectetur",
//                 "price": 26,
//                 "labels": ["Art", "Baby"],
//                 "reviews": ["Great toy", "Fun to play"],
//                 "createdAt": "1990-10-13T05:40:00.916Z",
//                 "inStock": false
//             },
//             {
//                 "_id": 17161,
//                 "name": "at sed",
//                 "price": 97,
//                 "labels": ["Puzzle", "Box game"],
//                 "reviews": ["Great toy", "Fun to play"],
//                 "createdAt": "1999-07-13T19:03:51.803Z",
//                 "inStock": false
//             },
//             {
//                 "_id": 17162,
//                 "name": "nec tincidunt",
//                 "price": 1,
//                 "labels": ["Puzzle", "Box game"],
//                 "reviews": ["Great toy", "Fun to play", "Wonderful"],
//                 "createdAt": "1977-09-07T22:44:54.205Z",
//                 "inStock": false
//             }
//         ]
//         utilService.saveToStorage(KEY, toys)
//     }
//     return toys
// }