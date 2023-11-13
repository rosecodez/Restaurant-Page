import _, { create, last } from 'lodash';
import './style.css';
import { createElements } from './initial page-load.js';
import { createProgram } from './hoursTable.js';
import { createMenu } from './menu.js';
import { createHomeContent } from './home.js';

const content = document.getElementById('content');

const array = createElements();
const liArray = array[0];
const hello = array[1];
const image1 = array[2];
const main = array[3];

liArray[1].onclick = function () {
  main.innerHTML = '';
  createHomeContent();
  createProgram();
};
liArray[2].onclick = function () {
  main.innerHTML = '';
  createMenu();
};
