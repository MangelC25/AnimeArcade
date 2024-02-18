import setupMenu from './Header/Navbar.js';
import NavResposive from './Header/NavbarToggler.js';
import ImagesHome from './Home/Home.js';
import { GetAnimeNes } from '../APIs/Jikan API/AnimeNews.js';
import { GetMangaNes } from '../APIs/Jikan API/MangaNews.js';

document.addEventListener('DOMContentLoaded', function() {
setupMenu();
NavResposive();
ImagesHome();
GetMangaNes(125725);
GetAnimeNes(52080);
});

