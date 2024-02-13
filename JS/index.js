import setupMenu from './Header/Navbar.js';
import NavResposive from './Header/NavbarToggler.js';
import ImagesHome from './Home/Home.js';
import { GetAnimeNes } from '../APIs/Jikan API/AnimeNews.js';


document.addEventListener('DOMContentLoaded', () => {
const sectionNews = document.getElementById('News');

setupMenu();
NavResposive();
ImagesHome();
GetAnimeNes(54855);
// obtenerIdiomas();

});
