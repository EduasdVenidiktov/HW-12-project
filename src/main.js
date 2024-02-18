import axios from 'axios';

axios.defaults.baseURL = '<https://jsonplaceholder.typicode.com>';

axios.get('/users').then().catch();

axios.get('/posts').then().catch();

axios.get('/images').then().catch();
