import modalsReducer from "./modals";
import tagsReducer from "./tags";
import userProfileReducer from "./user-profile";
import todosReducer from "./todos";
import giphyReducer from "./giphy";
import exchangeRatesReducer from "./exchange-rates";
import postsReducer from "./posts";

export default {
    modals: modalsReducer,
    tags: tagsReducer,
    profile: userProfileReducer,
    todos: todosReducer,
    giphy: giphyReducer,
    exchangeRates: exchangeRatesReducer,
    posts: postsReducer
};