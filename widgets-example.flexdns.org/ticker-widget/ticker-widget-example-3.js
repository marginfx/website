'use strict';

const forexInstruments = [
    { mainDesc: 'EUR/USD', minorDesc: 'Euro/US Dollar', group: 'all forex_majors', symbol: 'EURUSD', levels: 3 },
    { mainDesc: 'EUR/CHF', minorDesc: 'Euro/Swiss Franc', group: 'all', symbol: 'EURCHF', levels: 3 },
    { mainDesc: 'GBP/USD', minorDesc: 'Great Britain Pound/US Dollar', group: 'all forex_majors', symbol: 'GBPUSD', levels: 3 },
    { mainDesc: 'GBP/JPY', minorDesc: 'Great Britain Pound/Japanese Yen', group: 'all', symbol: 'GBPJPY', levels: 3 },
    { mainDesc: 'USD/CAD', minorDesc: 'US Dollar/Canadian Dollar', group: 'all', symbol: 'USDCAD', levels: 3 },
    { mainDesc: 'EUR/GBP', minorDesc: 'Euro/Great Britain Pound ', group: 'all', symbol: 'EURGBP', levels: 3 },
    { mainDesc: 'USD/CNH', minorDesc: 'US Dollar/Chinese Yuan Renminbi', group: 'all', symbol: 'USDCNH', levels: 3 },

    { mainDesc: 'USD/JPY', minorDesc: 'US Dollar/Japanese Yen', group: 'forex_majors', symbol: 'USDJPY', levels: 3 },
    { mainDesc: 'AUD/USD', minorDesc: 'Australian Dollar/US Dollar', group: 'forex_majors', symbol: 'AUDUSD', levels: 3 },
    { mainDesc: 'USD/CAD', minorDesc: 'US Dollar/Canadian Dollar', group: 'forex_majors', symbol: 'USDCAD', levels: 3 },
    { mainDesc: 'USD/CHF', minorDesc: 'US Dollar/Swiss Franc', group: 'forex_majors', symbol: 'USDCHF', levels: 3 },
    { mainDesc: 'NZD/USD', minorDesc: 'New Zealand Dollar/US Dollar', group: 'forex_majors', symbol: 'NZDUSD', levels: 3 },

    { mainDesc: 'EUR/JPY', minorDesc: 'Euro/Japanese Yen', group: 'forex_minor', symbol: 'EURJPY', levels: 3 },
    { mainDesc: 'EUR/GBP', minorDesc: 'Euro/Great Britain Pound ', group: 'forex_minor', symbol: 'EURGBP', levels: 3 },
    { mainDesc: 'GBP/JPY', minorDesc: 'Great Britain Pound/Japanese Yen', group: 'forex_minor', symbol: 'GBPJPY', levels: 3 },
    { mainDesc: 'GBP/AUD', minorDesc: 'Great Britain Pound/Australian Dollar', group: 'forex_minor', symbol: 'GBPAUD', levels: 3 },
    { mainDesc: 'AUD/CAD', minorDesc: 'Australian Dollar/Canadian Dollar', group: 'forex_minor', symbol: 'AUDCAD', levels: 3 },
    { mainDesc: 'AUD/CHF', minorDesc: 'Australian Dollar/Swiss Franc', group: 'forex_minor', symbol: 'AUDCHF', levels: 3 },
    { mainDesc: 'NZD/JPY', minorDesc: 'New Zealand Dollar/Japanese Yen', group: 'forex_minor', symbol: 'NZDJPY', levels: 3 },

    { mainDesc: 'USD/CNH', minorDesc: 'US Dollar/Chinese Yuan Renminbi', group: 'forex_exotic', symbol: 'USDCNH', levels: 3 },
    { mainDesc: 'USD/SGD', minorDesc: 'US Dollar/Singapore Dollar', group: 'forex_exotic', symbol: 'USDSGD', levels: 3 },
    { mainDesc: 'USD/TRY', minorDesc: 'US Dollar/Turkish Lira', group: 'forex_exotic', symbol: 'USDTRY', levels: 3 },
    { mainDesc: 'USD/ZAR', minorDesc: 'US Dollar/South Africa Rand', group: 'forex_exotic', symbol: 'USDZAR', levels: 3 },
    { mainDesc: 'USD/MXN', minorDesc: 'US Dollar/Mexican Peso', group: 'forex_exotic', symbol: 'USDMXN', levels: 3 },
    { mainDesc: 'USD/PLN', minorDesc: 'US Dollar/Polish Zloty', group: 'forex_exotic', symbol: 'USDPLN', levels: 3 },
    { mainDesc: 'USD/DKK', minorDesc: 'US Dollar/Danish Krone', group: 'forex_exotic', symbol: 'USDDKK', levels: 3 },
];

const cryptoInstruments = [
    { mainDesc: 'BTC/USD', minorDesc: 'BitCoin/US Dollar', group: 'all bitcoin', symbol: 'BTCUSD', levels: 3 },
    { mainDesc: 'BCH/USD', minorDesc: 'BitCoin Cash/US Dollar', group: 'all bch', symbol: 'BCHUSD', levels: 3 },
    { mainDesc: 'ETH/USD', minorDesc: 'Ethereum/US Dollar', group: 'all ethereum', symbol: 'ETHUSD', levels: 3 },
    { mainDesc: 'LTC/USD', minorDesc: 'LiteCoin/US Dollar', group: 'all litecoin', symbol: 'LTCUSD', levels: 3 },
    { mainDesc: 'XRP/USD', minorDesc: 'Ripple/US Dollar', group: 'all ripple', symbol: 'XRPUSD', levels: 3 },
    { mainDesc: 'BNB/USD', minorDesc: 'Binance Coin/US Dollar', group: 'all binance_coin', symbol: 'BNBUSD', levels: 3 },
    { mainDesc: 'BAT/USD', minorDesc: 'Basic Attention Token/US Dollar', group: 'all crypto_others', symbol: 'BATUSD', levels: 3 },

    { mainDesc: 'BTC/EUR', minorDesc: 'BitCoin/Euro', group: 'bitcoin', symbol: 'BTCEUR', levels: 3 },
    { mainDesc: 'BTC/JPY', minorDesc: 'BitCoin/Japanese Yen', group: 'bitcoin', symbol: 'BTCJPY', levels: 3 },
    { mainDesc: 'BTC/GBP', minorDesc: 'BitCoin/Great Britain Pound', group: 'bitcoin', symbol: 'BTCGBP', levels: 3 },
    { mainDesc: 'BTC/CHF', minorDesc: 'Bitcoin/Swiss Franc', group: 'bitcoin', symbol: 'BTCCHF', levels: 3 },
    { mainDesc: 'BTC/AUD', minorDesc: 'Bitcoin/Australian Dollar', group: 'bitcoin', symbol: 'BTCAUD', levels: 3 },
    { mainDesc: 'BTC/NZD', minorDesc: 'Bitcoin/New Zealand Dollar', group: 'bitcoin', symbol: 'BTCNZD', levels: 3 },


    { mainDesc: 'BCH/EUR', minorDesc: 'BitCoin Cash/Euro', group: 'bch', symbol: 'BCHEUR', levels: 3 },
    { mainDesc: 'BCH/JPY', minorDesc: 'BitCoin Cash/Japanese Yen', group: 'bch', symbol: 'BCHJPY', levels: 3 },
    { mainDesc: 'BCH/GBP', minorDesc: 'BitCoin Cash/Great Britain Pound', group: 'bch', symbol: 'BCHGBP', levels: 3 },
    { mainDesc: 'BCH/CHF', minorDesc: 'BitCoin Cash/Swiss Franc', group: 'bch', symbol: 'BCHCHF', levels: 3 },
    { mainDesc: 'BCH/AUD', minorDesc: 'BitCoin Cash/Australian Dollar', group: 'bch', symbol: 'BCHAUD', levels: 3 },
    { mainDesc: 'BCH/CAD', minorDesc: 'Bitcoin Cash/Canadian Dollar', group: 'bch', symbol: 'BCHCAD', levels: 3 },


    { mainDesc: 'ETH/EUR', minorDesc: 'Ethereum/Euro', group: 'ethereum', symbol: 'ETHEUR', levels: 3 },
    { mainDesc: 'ETH/JPY', minorDesc: 'Ethereum/Japanese Yen', group: 'ethereum', symbol: 'ETHJPY', levels: 3 },
    { mainDesc: 'ETH/GBP', minorDesc: 'Ethereum/Great Britain Pound', group: 'ethereum', symbol: 'ETHGBP', levels: 3 },
    { mainDesc: 'ETH/CHF', minorDesc: 'Ethereum/Swiss Franc', group: 'ethereum', symbol: 'ETHCHF', levels: 3 },
    { mainDesc: 'ETH/AUD', minorDesc: 'Ethereum/Australian Dollar', group: 'ethereum', symbol: 'ETHAUD', levels: 3 },
    { mainDesc: 'ETH/CAD', minorDesc: 'Ethereum/Canadian Dollar', group: 'ethereum', symbol: 'ETHCAD', levels: 3 },


    { mainDesc: 'LTC/EUR', minorDesc: 'LiteCoin/Euro', group: 'litecoin', symbol: 'LTCEUR', levels: 3 },
    { mainDesc: 'LTC/JPY', minorDesc: 'LiteCoin/Japanese Yen', group: 'litecoin', symbol: 'LTCJPY', levels: 3 },
    { mainDesc: 'LTC/GBP', minorDesc: 'LiteCoin/Great Britain Pound', group: 'litecoin', symbol: 'LTCGBP', levels: 3 },
    { mainDesc: 'LTC/CHF', minorDesc: 'LiteCoin/Swiss Franc', group: 'litecoin', symbol: 'LTCCHF', levels: 3 },
    { mainDesc: 'LTC/AUD', minorDesc: 'LiteCoin/Australian Dollar', group: 'litecoin', symbol: 'LTCAUD', levels: 3 },
    { mainDesc: 'LTC/CAD', minorDesc: 'LiteCoin/Canadian Dollar', group: 'litecoin', symbol: 'LTCCAD', levels: 3 },


    { mainDesc: 'XRP/EUR', minorDesc: 'Ripple/Euro', group: 'ripple', symbol: 'XRPEUR', levels: 3 },
    { mainDesc: 'XRP/JPY', minorDesc: 'Ripple/Japanese Yen', group: 'ripple', symbol: 'XRPJPY', levels: 3 },
    { mainDesc: 'XRP/GBP', minorDesc: 'Ripple/Great Britain Pound', group: 'ripple', symbol: 'XRPGBP', levels: 3 },
    { mainDesc: 'XRP/CHF', minorDesc: 'Ripple/Swiss Franc', group: 'ripple', symbol: 'XRPCHF', levels: 3 },
    { mainDesc: 'XRP/AUD', minorDesc: 'Ripple/Australian Dollar', group: 'ripple', symbol: 'XRPAUD', levels: 3 },
    { mainDesc: 'XRP/CAD', minorDesc: 'Ripple/Canadian Dollar', group: 'ripple', symbol: 'XRPCAD', levels: 3 },


    { mainDesc: 'BNB/EUR', minorDesc: 'Binance Coin/Euro', group: 'binance_coin', symbol: 'BNBEUR', levels: 3 },
    { mainDesc: 'BNB/JPY', minorDesc: 'Binance Coin/Japanese Yen', group: 'binance_coin', symbol: 'BNBJPY', levels: 3 },
    { mainDesc: 'BNB/GBP', minorDesc: 'Binance Coin/Great Britain Pound', group: 'binance_coin', symbol: 'BNBGBP', levels: 3 },
    { mainDesc: 'BNB/CHF', minorDesc: 'Binance Coin/Swiss Franc', group: 'binance_coin', symbol: 'BNBCHF', levels: 3 },
    { mainDesc: 'BNB/AUD', minorDesc: 'Binance Coin/Australian Dollar', group: 'binance_coin', symbol: 'BNBAUD', levels: 3 },
    { mainDesc: 'BNB/CAD', minorDesc: 'Binance Coin/Canadian Dollar', group: 'binance_coin', symbol: 'BNBCAD', levels: 3 },


    { mainDesc: 'DSH/USD', minorDesc: 'DASH/US Dollar', group: 'crypto_others', symbol: 'DSHUSD', levels: 3 },
    { mainDesc: 'EOS/USD', minorDesc: 'EOS/US Dollar', group: 'crypto_others', symbol: 'EOSUSD', levels: 3 },
    { mainDesc: 'ETC/USD', minorDesc: 'Ethereum Classic/US Dollar', group: 'crypto_others', symbol: 'ETCUSD', levels: 3 },
    { mainDesc: 'IOT/USD', minorDesc: 'IOTA/US Dollar', group: 'crypto_others', symbol: 'IOTUSD', levels: 3 },
    { mainDesc: 'NEO/USD', minorDesc: 'Neo/US Dollar', group: 'crypto_others', symbol: 'NEOUSD', levels: 3 },
    { mainDesc: 'OMG/USD', minorDesc: 'OmiseGo/US Dollar', group: 'crypto_others', symbol: 'OMGUSD', levels: 3 },
];

const metalInstruments = [
    { mainDesc: 'XAU/CHF', minorDesc: 'Gold/ Swiss Franc/Spot', group: 'all', symbol: 'XAUCHF', levels: 3 },
    { mainDesc: 'XAU/USD', minorDesc: 'Gold/US Dollar/Spot', group: 'all', symbol: 'XAUUSD', levels: 3 },
    { mainDesc: 'XAG/GBP', minorDesc: 'Silver/Great Britain Pound/Spot', group: 'all', symbol: 'XAGGBP', levels: 3 },
    { mainDesc: 'XAG/USD', minorDesc: 'Silver/US Dollar/Spot', group: 'all', symbol: 'XAGUSD', levels: 3 },
    { mainDesc: 'XPD/USD', minorDesc: 'Palladium/US Dollar/Spot', group: 'all', symbol: 'XPDUSD', levels: 3 },
    { mainDesc: 'XPT/USD', minorDesc: 'Platinum/US Dollar/Spot', group: 'all', symbol: 'XPTUSD', levels: 3 },
    { mainDesc: 'CUC/USD', minorDesc: 'Copper/US Dollar/Spot', group: 'all', symbol: 'CUCUSD', levels: 3 },

    { mainDesc: 'XAG/USD', minorDesc: 'Silver/US Dollar/Spot', group: 'metal_majors', symbol: 'XAGUSD', levels: 3 },
    { mainDesc: 'XAU/USD', minorDesc: 'Gold/US Dollar/Spot', group: 'metal_majors', symbol: 'XAUUSD', levels: 3 },
    { mainDesc: 'XPD/USD', minorDesc: 'Palladium/US Dollar/Spot', group: 'metal_majors', symbol: 'XPDUSD', levels: 3 },
    { mainDesc: 'XPT/USD', minorDesc: 'Platinum/US Dollar/Spot', group: 'metal_majors', symbol: 'XPTUSD', levels: 3 },
    { mainDesc: 'CUC/USD', minorDesc: 'Copper/US Dollar/Spot', group: 'metal_majors', symbol: 'CUCUSD', levels: 3 },
    { mainDesc: 'XAG/EUR', minorDesc: 'Silver/Euro/Spot', group: 'metal_majors', symbol: 'XAGEUR', levels: 3 },
    { mainDesc: 'XAU/EUR', minorDesc: 'Gold/Euro/Spot', group: 'metal_majors', symbol: 'XAUEUR', levels: 3 },
];

const indiciesInstruments = [
    { mainDesc: 'ASXAUD', minorDesc: 'Australia 200 Index', group: 'all', symbol: 'ASXAUD' },
    { mainDesc: 'HSIHKD', minorDesc: 'Hong Kong 50 Index ', group: 'all', symbol: 'HSIHKD' },
    { mainDesc: 'NIKJPY', minorDesc: 'Nikkei 225 Index', group: 'all', symbol: 'NIKJPY' },
    { mainDesc: 'FTSGBP/FTSE', minorDesc: 'UK FTSE100', group: 'all', symbol: 'FTSGBP' },
    { mainDesc: 'DAXEUR', minorDesc: 'Germany 30 ', group: 'all', symbol: 'DAXEUR' },
    { mainDesc: 'DJIUSD', minorDesc: 'Dow Jones Industrial Average 30 Index', group: 'all', symbol: 'DJIUSD' },
    { mainDesc: 'NDXUSD', minorDesc: 'Nasdaq 100 index', group: 'all', symbol: 'NDXUSD' },

    { mainDesc: 'DAXEUR/FDAX', minorDesc: 'Germany 30 ', group: 'indicies_majors', symbol: 'DAXEUR' },
    { mainDesc: 'FTSGBP/FTSE', minorDesc: 'UK FTSE100', group: 'indicies_majors', symbol: 'FTSGBP' },
    { mainDesc: 'DJIUSD', minorDesc: 'Dow Jones Industrial Average 30 Index', group: 'indicies_majors', symbol: 'DJIUSD' },
    { mainDesc: 'NDXUSD', minorDesc: 'Nasdaq 100 index', group: 'indicies_majors', symbol: 'NDXUSD' },
    { mainDesc: 'SPXUSD', minorDesc: 'S&P 500 Index', group: 'indicies_majors', symbol: 'SPXUSD' },
    { mainDesc: 'NIKJPY', minorDesc: 'Nikkei 225 Index', group: 'indicies_majors', symbol: 'NIKJPY' },
    { mainDesc: 'ESXEUR', minorDesc: 'EURO Stocks 50', group: 'indicies_majors', symbol: 'ESXEUR' },
];

const energyInstruments = [
    { mainDesc: 'WTIUSD', minorDesc: 'Oil - US Crude ', group: 'all', symbol: 'WTIUSD', levels: 2 },
    { mainDesc: 'BRNUSD', minorDesc: 'Oil - Brent Crude ', group: 'all', symbol: 'BRNUSD', levels: 2 },
    { mainDesc: 'NGCUSD', minorDesc: 'Natural Gas', group: 'all', symbol: 'NGCUSD',levels: 2 },
];

const equitiesInstruments = [
    { mainDesc: 'AAPL', minorDesc: 'Apple', group: 'all', symbol: 'AAPL' },
    { mainDesc: 'TSLA', minorDesc: 'Tesla', group: 'all', symbol: 'TSLA' },
    { mainDesc: 'AIR', minorDesc: 'Airbus Group', group: 'all', symbol: 'AIR' },
    { mainDesc: 'Sony', minorDesc: 'Sony', group: 'all', symbol: 'Sony' },
    { mainDesc: 'Toyota', minorDesc: 'Toyota Motor Corp', group: 'all', symbol: 'Toyota' },
    { mainDesc: 'GAZP', minorDesc: 'Gazprom', group: 'all', symbol: 'GAZP' },

    { mainDesc: 'MSFT', minorDesc: 'Microsoft Corporation', group: 'usa', symbol: 'MSFT' },
    { mainDesc: 'AAPL', minorDesc: 'Apple', group: 'usa', symbol: 'AAPL' },
    { mainDesc: 'AMZN', minorDesc: 'Amazon', group: 'usa', symbol: 'AMZN' },
    { mainDesc: 'GOOGL', minorDesc: 'Alphabet Class A', group: 'usa', symbol: 'GOOGL' },
    { mainDesc: 'FB', minorDesc: 'Facebook', group: 'usa', symbol: 'FB' },
    { mainDesc: 'JNJ', minorDesc: 'Johnson & Johnson', group: 'usa', symbol: 'JNJ' },
    { mainDesc: 'V', minorDesc: 'Visa', group: 'usa', symbol: 'V' },

    { mainDesc: 'AIR', minorDesc: 'Airbus Group', group: 'europe', symbol: 'AIR' },
    { mainDesc: 'BNP', minorDesc: 'BNP Paribas', group: 'europe', symbol: 'BNP' },
    { mainDesc: 'ULVR', minorDesc: 'Unilever', group: 'europe', symbol: 'ULVR' },
    { mainDesc: 'RDSA', minorDesc: 'Royal Dutch Shell', group: 'europe', symbol: 'RDSA' },
    { mainDesc: 'GSK', minorDesc: 'GlaxoSmithKline', group: 'europe', symbol: 'GSK' },
    { mainDesc: 'VOD', minorDesc: 'Vodafone Group', group: 'europe', symbol: 'VOD' },

    { mainDesc: 'Toyota', minorDesc: 'Toyota Motor Corp', group: 'asia', symbol: 'Toyota' },
    { mainDesc: 'Softbank', minorDesc: 'Softbank', group: 'asia', symbol: 'Softbank' },
    { mainDesc: 'Sony', minorDesc: 'Sony', group: 'asia', symbol: 'Sony' },
    { mainDesc: 'HKBankCh', minorDesc: 'Bank of China', group: 'asia', symbol: 'HKBankCh' },
    { mainDesc: 'CITIC', minorDesc: 'CITIC Securities', group: 'asia', symbol: 'CITIC' },
    { mainDesc: 'ChinaMob', minorDesc: 'China Mobile', group: 'asia', symbol: 'ChinaMob' },
    { mainDesc: 'Lenovo', minorDesc: 'Lenovo Group', group: 'asia', symbol: 'Lenovo' },

    { mainDesc: 'SBER', minorDesc: 'Sberbank', group: 'russia', symbol: 'SBER' },
    { mainDesc: 'GAZP', minorDesc: 'Gazprom', group: 'russia', symbol: 'GAZP' },
    { mainDesc: 'ROSN', minorDesc: 'Rosneft', group: 'russia', symbol: 'ROSN' },
    { mainDesc: 'GMKN', minorDesc: 'Norilskiy Nickel', group: 'russia', symbol: 'GMKN' },
    { mainDesc: 'NVTK', minorDesc: 'Novatek', group: 'russia', symbol: 'NVTK' },
    { mainDesc: 'LKOH', minorDesc: 'Lukoil', group: 'russia', symbol: 'LKOH' },
    { mainDesc: 'PLZL', minorDesc: 'Polus Zoloto', group: 'russia', symbol: 'PLZL' },
];

const etfInstruments = [
    { mainDesc: 'GLD', minorDesc: 'SPDR Gold Trust', group: 'all', symbol: 'GLD' },
    { mainDesc: 'VOO', minorDesc: 'Vanguard S&P500', group: 'all', symbol: 'VOO' },
    { mainDesc: 'IWM', minorDesc: 'iShares Russell 2000', group: 'all', symbol: 'IWM' },
    { mainDesc: 'QQQ', minorDesc: 'Invesco QQQ(Power Shares Trust, Series)', group: 'all', symbol: 'QQQ' },
    { mainDesc: 'VEA', minorDesc: 'Vanguard FTSE DM', group: 'all', symbol: 'VEA' },
    { mainDesc: 'SCHD', minorDesc: 'Schwab US Dividend equity', group: 'all', symbol: 'SCHD' },
    { mainDesc: 'USO', minorDesc: 'United States Oil Fund', group: 'all', symbol: 'USO' },
];

const config = {
    forex: forexInstruments,
    crypto: cryptoInstruments,
    metals: metalInstruments,
    indicies: indiciesInstruments,
    energy: energyInstruments,
    equities: equitiesInstruments,
    etfs: etfInstruments
};

Object.keys(config).forEach(instrumentScope => {
    const scope = document.querySelector(`#${instrumentScope} > ticker-scope`);
    let payload = '';

    for (let instr of config[instrumentScope]) {
        payload += buildInstrument(instr);
    }
    scope.innerHTML = scope.innerHTML + payload;
});

function buildInstrument(instrument) {
    const level = instrument.levels ? `levels="${instrument.levels}"` : '';
    return `
          <ticker-instrument class="ticker-instrument filterDiv" data-group="${instrument.group}" subscribe="${instrument.symbol}" ${level}>
            <div class="ticker-symbol">
              <div class="ticker-full-name">
                <p class="ticker-pair">${instrument.mainDesc}</p>
                <p class="ticker-currencies-name">${instrument.minorDesc}</p>
              </div>
            </div>
            <ticker-field class="ticker-volume bid" type="volume" side="bid"></ticker-field>
            <ticker-field class="ticker-price bid" type="price" side="bid"></ticker-field>
            <ticker-field class="ticker-spread" type="spread"></ticker-field>
            <ticker-field class="ticker-price ask" type="price" side="ask"></ticker-field>
            <ticker-field class="ticker-volume ask" type="volume" side="ask"></ticker-field>
          </ticker-instrument>
          `;
}

function Tabs() {
    let bindAll = function() {
        let menuElements = document.querySelectorAll('[data-tab]');
        for(let i = 0; i < menuElements.length ; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    };

    let clear = function() {
        let menuElements = document.querySelectorAll('[data-tab]');
        for (let i = 0; i < menuElements.length ; i++) {
            menuElements[i].classList.remove('active');
            let id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.remove('active');
        }
    };

    let change = function(e) {
        clear();
        e.target.classList.add('active');
        let id = e.currentTarget.getAttribute('data-tab');
        document.getElementById(id).classList.add('active');
        filterSelection("all");
    };

    bindAll();
}

let connectTabs = new Tabs();

filterSelection("all");
function filterSelection(filterGroup) {
    let activeTab = document.querySelector(".tab.active");
    let filterableDiv = activeTab.querySelectorAll('.ticker-instrument');
    let btn = activeTab.getElementsByClassName("filterBtnsContainer")[0].children[0];

    let current = document.getElementsByClassName("active-filter");
    current[0].className = current[0].className.replace(" active-filter", "");
    btn.className += " active-filter";

    if (!filterableDiv) return;

    for (let i = 0; i < filterableDiv.length; i++) {
        filterableDiv[i].classList.remove("filter-show");
        let containerGroups = filterableDiv[i].getAttribute("data-group");

        if (containerGroups.indexOf(filterGroup) > -1) {
            filterableDiv[i].classList.add("filter-show");
        }
    }
}

// Add active class to the current control button (highlight it)
let btnContainer = document.getElementsByClassName("filterBtnsContainer");

for (let container of btnContainer) {
    let btns = container.getElementsByClassName("filter-btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("active-filter");
            current[0].className = current[0].className.replace(" active-filter", "");
            this.className += " active-filter";
        });
    }
}
