
const data = {
  bbl: {
    code: '002',
    color: '#1e4598',
    official_name: 'BANGKOK BANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารกรุงเทพ',
    nice_name: 'Bangkok Bank'
  },
  kbank: {
    code: '004',
    color: '#138f2d',
    official_name: 'KASIKORNBANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารกสิกรไทย',
    nice_name: 'Kasikornbank'
  },
  ktb: {
    code: '006',
    color: '#1ba5e1',
    official_name: 'KRUNG THAI BANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารกรุงไทย',
    nice_name: 'Krungthai Bank'
  },
  tmb: {
    code: '011',
    color: '#1279be',
    official_name: 'TMB BANK PUBLIC COMPANY LIMITED.',
    official_name_thai: 'ธนาคารทหารไทย',
    nice_name: 'TMB Bank'
  },
  scb: {
    code: '014',
    color: '#4e2e7f',
    official_name: 'SIAM COMMERCIAL BANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารไทยพาณิชย์',
    nice_name: 'Siam Commercial Bank'
  },
  cimb: {
    code: '022',
    color: '#7e2f36',
    official_name: 'CIMB THAI BANK PUPBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารซีไอเอ็มบี',
    nice_name: 'CIMB Thai Bank'
  },
  uob: {
    code: '024',
    color: '#0b3979',
    official_name: 'UNITED OVERSEAS BANK (THAI) PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารยูโอบี',
    nice_name: 'United Overseas Bank (Thai)'
  },
  bay: {
    code: '025',
    color: '#fec43b',
    official_name: 'BANK OF AYUDHYA PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารกรุงศรีอยุธยา',
    nice_name: 'Krungsri'
  },
  gsb: {
    code: '030',
    color: '#eb198d',
    official_name: 'THE GOVERNMENT SAVINGS BANK',
    official_name_thai: 'ธนาคารออมสิน',
    nice_name: 'Government Savings Bank'
  },
  baac: {
    code: '034',
    color: '#4b9b1d',
    official_name: 'BANK FOR AGRICULTURE AND AGRICULTURAL COOPERATIVES',
    official_name_thai: 'ธนาคารเพื่อการเกษตร',
    nice_name: 'Bank for Agriculture and Agricultural Cooperatives'
  },
  tbank: {
    code: '065',
    color: '#fc4f1f',
    official_name: 'THANACHART BANK PUBLIC COMPANY LTD.',
    official_name_thai: 'ธนาคารธนชาติ',
    nice_name: 'Thanachart Bank'
  },
  kk: {
    code: '069',
    color: '#199cc5',
    official_name: 'KIATNAKIN BANK PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารเกียรตินาคิน',
    nice_name: 'Kiatnakin Bank'
  },
  icbc: {
    code: '070',
    color: '#c50f1c',
    official_name: 'INDUSTRIAL AND COMMERCIAL BANK OF CHINA (THAI) PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารไอซีบีซี',
    nice_name: 'Industrial and Commercial Bank of China (Thai)'
  },
  lhb: {
    code: '073',
    color: '#6d6e71',
    official_name: 'LAND AND HOUSES BANK PUBLIC COMPANY LIMITED',
    official_name_thai: 'ธนาคารแลนด์ แอนด์ เฮ้าส์ ',
    nice_name: 'Land and Houses Bank'
  }
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
