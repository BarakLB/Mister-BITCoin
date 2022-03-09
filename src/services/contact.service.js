'use strict';

import { DbService } from './db-service.js';
import { utils } from './utils.service.js';

const KEY = 'contacts';

export default {
    query,
    get,
    remove,
    save,
    getEmptyContact
};

async function query() {
    var contacts = await DbService.query(KEY);
    if (!contacts || !contacts.length) {
        contacts = _createDefaultContacts();
        await DbService.insert(KEY, contacts);
    }
    return contacts;
}

async function get(id) {
    const contact = await DbService.get(KEY, id);
    if (!contact) {
        throw new Error('Unknown Contact');
    }
    return contact;
}

function remove(id) {
    return DbService.delete(KEY, id);
}

function save(contact) {
    if (contact._id) return DbService.put(KEY, contact);
    else return DbService.post(KEY, contact);
}


function getEmptyContact() {
    return {
        name: '',
        phone: '',
        email:'',
        color:utils.getRandomColor(),
    };
}

function _createDefaultContacts() {
    return [
    _createContact('Barak lebowitz', 'Baraklb@walla.com', '+972-52-8844042'),
    _createContact('Daniel Shaked', 'DanyRonaldo@yahoo.com', '+972-54-6644079'),
    _createContact('Daniel Bar-On', 'DannyBO@hotmail.com', '+972-50-9255172'),
    ];
}

function _createContact(name, email, phone) {
    return {
        name,
        email,
        phone,
        color:utils.getRandomColor(),
    };
}