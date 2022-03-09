import { utils } from './utils.service.js';
const KEY = 'loggedInUser';


export default {
    getLoggedInUser,
    signup,
    addMove
};

function init() {
    const user = {
        _id: utils.getRandomId(),
        name: 'Admin',
        email: 'admin@admin.com',
        coins: 100,
        moves: [
            {
                toId: "d99e3u2ih329",
                to: "Daniel Shaked",
                at: 2652712571,
                amount: 2
            },
        ],
        color: utils.getRandomColor(),
    };
    sessionStorage.setItem(KEY, JSON.stringify(user));
    // return user;
}

function getLoggedInUser() {
    const loggedInUser = sessionStorage.getItem(KEY);
    return loggedInUser ? JSON.parse(loggedInUser) : init();
}

function signup(user) {
    user.coins = 100;
    user.color = utils.getRandomColor();
    user.moves = [];
    sessionStorage.setItem(KEY, JSON.stringify(user));
}

function addMove(contact, amount) {
    const move = {
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount,
    };

    let user = getLoggedInUser();
    user.coins -= amount;
    user.moves.unshift(move);
    sessionStorage.setItem(KEY, JSON.stringify(user));
    return user

}