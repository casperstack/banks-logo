# โลโก้ธนาคาร

## รายชื่อข้อมูลธนาคารประเทศไทย

- Fork มาจาก https://github.com/omise/banks-logo
- ได้มีการปรับเพิ่ม NodeJS สำหรับการติดตั้งบน NPM
- ลบธนาคารบางส่วนออก
- เพิ่มธนาคาร ธนาคารทหารไทยธนชาต

## รายละเอียด
- โลโก้แบบ SVG
- Bank Code
- ชื่อย่อธนาคาร
- ชื่อทางการ
- ชื่อภาษาอังกฤษ
- ชื่อภาษาไทย

## การติดตั้ง
```
npm i --save banks-logo
```

## การใช้งาน
```
const banksLogo = require('banks-logo');

// รายการธนาคารทั้งหมด
console.log(banksLogo);

// ค้นหาจากชื่อย่อธนาคาร
console.log('banksLogo', banksLogo.Get('kbank').official_name_thai);
=> "ธนาคารกสิกรไทย"

// เรียกรูปภาพธนาคาร
console.log('banksLogo', banksLogo.Get('kbank').image);
=> https://raw.githubusercontent.com/casperstack/banks-logo/master/th/kbank.svg
```

## What can I do with this

You could use the svg and the bank brand color (available in the json file) to do something like this:

![Sample](https://raw.githubusercontent.com/omise/banks-logo/master/th/sample.png)

All bank icons are trademarks of their respective owners and the use of these trademarks does not indicate endorsement of the trademark holder by Omise, nor vice versa.


