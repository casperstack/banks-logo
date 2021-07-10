
const data = {
  bbl: {
    code: '002',
    color: '#1e4598',
    official_name: 'BANGKOK BANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารกรุงเทพ',
    nice_name: 'Bangkok Bank',
    short_name: 'bbl',
    image: 'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/bbl.svg',
  },
  kbank: {
    code: '004',
    color: '#138f2d',
    official_name: 'KASIKORNBANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารกสิกรไทย',
    nice_name: 'Kasikornbank',
    short_name: 'kbank',
    image: 'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/kbank.svg',
  },
  ktb: {
    code: '006',
    color: '#1ba5e1',
    official_name: 'KRUNG THAI BANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารกรุงไทย',
    nice_name: 'Krungthai Bank',
    short_name: 'ktb',
    image: 'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/ktb.svg',
  },
  tmb: {
    code: '011',
    color: '#1279be',
    official_name: 'TMB BANK PUBLIC COMPANY LIMITED.',
    official_name_thai: 'ธนาคารทหารไทย',
    nice_name: 'TMB Bank',
    short_name: 'tmb',
    image: 'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/tmb.svg',
  },
  scb: {
    code: '014',
    color: '#4e2e7f',
    official_name: 'SIAM COMMERCIAL BANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารไทยพาณิชย์',
    nice_name: 'Siam Commercial Bank',
    short_name: 'scb',
    image: 'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/scb.svg',
  },
  cimb: {
    code: '022',
    color: '#7e2f36',
    official_name: 'CIMB THAI BANK PUPBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารซีไอเอ็มบี',
    nice_name: 'CIMB Thai Bank',
    short_name: 'cimb',
    image: 'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/cimb.svg',
  },
  uob: {
    code: '024',
    color: '#0b3979',
    official_name: 'UNITED OVERSEAS BANK (THAI) PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารยูโอบี',
    nice_name: 'United Overseas Bank (Thai)',
    short_name: 'uob',
    image: 'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/uob.svg',
  },
  bay: {
    code: '025',
    color: '#fec43b',
    official_name: 'BANK OF AYUDHYA PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารกรุงศรีอยุธยา',
    nice_name: 'Krungsri',
    short_name: 'bay',
    image: 'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/bay.svg',
  },
  gsb: {
    code: '030',
    color: '#eb198d',
    official_name: 'THE GOVERNMENT SAVINGS BANK',
    official_name_thai: 'ธนาคารออมสิน',
    nice_name: 'Government Savings Bank',
    short_name: 'gsb',
    image: 'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/gsb.svg',
  },
  baac: {
    code: '034',
    color: '#4b9b1d',
    official_name: 'BANK FOR AGRICULTURE AND AGRICULTURAL COOPERATIVES',
    official_name_thai: 'ธนาคารเพื่อการเกษตร',
    nice_name: 'Bank for Agriculture and Agricultural Cooperatives',
    short_name: 'baac',
    image: 'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/baac.svg',
  },
  tbank: {
    code: '065',
    color: '#fc4f1f',
    official_name: 'THANACHART BANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารธนชาติ',
    nice_name: 'Thanachart Bank',
    short_name: 'tbank',
    image: 'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/tbank.svg',
  },
  kk: {
    code: '069',
    color: '#199cc5',
    official_name: 'KIATNAKIN BANK PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารเกียรตินาคิน',
    nice_name: 'Kiatnakin Bank',
    short_name: 'kk',
    image: 'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/kk.svg',
  },
  icbc: {
    code: '070',
    color: '#c50f1c',
    official_name: 'INDUSTRIAL AND COMMERCIAL BANK OF CHINA (THAI) PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารไอซีบีซี',
    nice_name: 'Industrial and Commercial Bank of China (Thai)',
    short_name: 'icbc',
    image: 'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/icbc.svg',
  },
  lhb: {
    code: '073',
    color: '#6d6e71',
    official_name: 'LAND AND HOUSES BANK PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารแลนด์ แอนด์ เฮ้าส์ ',
    nice_name: 'Land and Houses Bank',
    short_name: 'lhb',
    image: 'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/lhb.svg',
  },
  ttb: {
    code: '074',
    color: '#ee871e',
    official_name: 'TMB THANACHART BANK PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารทหารไทยธนชาต',
    nice_name: 'TMB Thanachart Bank',
    short_name: 'ttb',
    image: 'https://raw.githubusercontent.com/casperstack/banks-logo/master/th/ttb.svg',
  },

};

const Get = (key) => {
  return data[key];
};

/** List all key in the objects and return in array*/
const listKey = () => {
  return Object.keys(data);
};

const ThaiBank = {
  data,
  listKey,
  Get
};

module.exports = ThaiBank;
