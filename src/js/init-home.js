import { pageRender } from './page-render';
import { savingGenresArr } from './saving-genres-arr';
import {addPagination} from './pagination';
import {renderGenreSelect} from './genre-select-render';
import './genre-filter';

savingGenresArr();
renderGenreSelect();
pageRender(1);
addPagination();