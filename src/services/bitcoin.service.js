'use strict';

import axios from 'axios';
import { DbService } from './db-service.js';
import { utils } from './utils.service.js';
const KEY = 'bitcoinRate';

const MARKET_KEY = 'marketPrice';

export default {
    getBtcToUsdRate,
    query,
    getMarketPrice
};

async function _getBitcoinRate() {
    try {
        const res = await axios.get(
            'https://blockchain.info/tobtc?currency=USD&value=1'
        );
        return res.data;
    } catch (err) {
        console.log('Error:', err);
    }
}

async function query() {
    var rate = await DbService.currencyQuery(KEY);
    if (!rate) {
        rate = await _getBitcoinRate();
        await DbService.insertCurrency(KEY, rate);
        // console.log('axios');
    }
    return rate;
}

async function getBtcToUsdRate() {
    try {
        const res = await axios.get(`https://blockchain.info/ticker`);
        return res.data.USD.last;
    } catch (err) {
        console.log('Error:', err);
    }
}


async function getMarketPrice() {
    try {

        let res = utils.loadFromStorage(MARKET_KEY);
        if(!res) {
            res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=1years&format=json&cors=true`);
            utils.storeToStorage(MARKET_KEY, res.data);
            console.log('axios',res.data)
            return res.data

        }else {
            console.log('cacheee')
            return res
        }
        // const res = 
        // console.log(res.data.values);
        // return res.data.values;
        // return utils.loadFromStorage(MARKET_KEY)
    } catch (err) {
        console.log('Error:', err);
    }
}