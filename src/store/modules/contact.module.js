// import carService from '@/services/car.service.js';
import contactService from '../../services/contact.service';
import userService from '../../services/user.service';

export default {
    state: {
        contacts: null,
        loggedInUser: userService.getLoggedInUser(),
    },
    getters: {
        contacts(state) {
            return state.contacts;
        },
        loggedInUser(state) {
            return state.loggedInUser;
        }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts;
        },
        removeContact(state, { id }) {
            const idx = state.contacts.findIndex((contact) => contact._id === id);
            state.contacts.splice(idx, 1);
        },
        saveContact(state, { contact }) {
            console.log(contact);
            const idx = state.contacts.findIndex((currContact) => currContact._id === contact._id);
            if (idx !== -1) state.contacts.splice(idx, 1, contact);
            else state.contacts.push(contact);
        },
        setUser(state, {user} ) {
            state.loggedInUser = user;
        },
      
    },
    actions: {
        async loadContacts(context) {
            const contacts = await contactService.query();
            context.commit({ type: 'setContacts', contacts });
        },
        async removeContact({ commit }, { id }) {
            await contactService.remove(id);
            commit({ type: 'removeContact', id });
        },
        async saveContact({ commit }, { contact }) {
            const updatedContact = await contactService.save(contact);
            commit({ type: 'saveContact', contact: updatedContact });
        },
        async signup({ commit }, { user }) {
            await userService.signup(user);
            commit({ type: 'setUser', user });
        },
        async addMove({ commit }, { move }) {
            const {contact, amount} = move
           const user =  await userService.addMove(contact,amount)
            commit({ type: 'setUser', user });
        }
    },
};