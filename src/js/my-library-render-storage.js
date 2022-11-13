/////////////////////////Initialize Firebase//////////////////////////
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6Ady1jhuAgqwFL0qbhu5KyUIJdTFoZmc",
  authDomain: "filmoteka-268b8.firebaseapp.com",
  projectId: "filmoteka-268b8",
  storageBucket: "filmoteka-268b8.appspot.com",
  messagingSenderId: "661144848024",
  appId: "1:661144848024:web:d78c5ac841ef43fb0472ed"
};

// Initialize Firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// refs
const colId  = 'User01';
const colRef = collection(db, colId );

//////////////////////////////////////////////////////////////////////


import Pagination from 'tui-pagination';
import { toggleLightTheme } from './day-night-theme';

const divQueue = document.querySelector('.movies__list');

toggleLightTheme();

export function myLibPagination(fieldName) {
  getDocs(colRef)
  .then(snapshot => {
    const myLibList = snapshot.docs[0].data();
    // if (!JSON.parse(localStorage.getItem(fieldName))) return;
    // let queueTotalResults = JSON.parse(localStorage.getItem(fieldName)).length;
    let queueTotalResults = fieldName === 'Queue'? 
    myLibList.Queue.length:
    myLibList.Watched.length;

    const pagination = new Pagination(document.getElementById('pagination'), {
      totalItems: queueTotalResults,
      itemsPerPage: 18,
      visiblePages: 5,
      centerAlign: true,
    });

    if (queueTotalResults <= 18) return pagination.off;

    pagination.on('afterMove', function (eventData) {
      myLibRender(eventData.page, fieldName);
      localStorage.setItem('current_page', pagination.getCurrentPage());
    });
  })
  .catch(err => {
    console.log(err.message)
  })
}

export function myLibRender(page, fieldName) {

  getDocs(colRef)
  .then(snapshot => {
    const myLibList = snapshot.docs[0].data();
    const data = fieldName === 'Queue'? 
    myLibList.Queue.slice(page * 18 - 18, page * 18):
    myLibList.Watched.slice(page * 18 - 18, page * 18);
    divQueue.innerHTML = '';
    divQueue.insertAdjacentHTML('beforeend', renderMarkupStorage(data));
  })
  .catch(err => {
    console.log(err.message)
  })
}

function renderMarkupStorage(data) {
  return data
    .map(({ id, poster_path, title, genres, release_date, vote_average }) => {
      return `<div class='movie-card js-item' data-id='${id}'>
    <img
      class='movie-poster'
      src='https://image.tmdb.org/t/p/w500${poster_path}'
      alt='${title}'
      onerror="this.onerror=null;this.src='https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg';"
      loading='lazy'
    />
    <div class='info'>
      <h2 class='movie-title'>
      ${title}
      </h2>
      <p class='movie-info'>
      ${
        genres.length > 3
          ? genres
              .slice(0, 2)
              .concat([{ name: 'Other' }])
              .map(genre => genre.name)
              .join(', ')
          : genres.map(genre => genre.name).join(', ')
      }
        | ${release_date.slice(0, 4)}
        <span class='vote'> ${vote_average.toFixed(1)} </span>
      </p>
    </div>
  </div>`;
    })
    .join('');
}
