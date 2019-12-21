// seed 10M rows
const faker = require('faker');
const fs = require('file-system');
const _progress = require('cli-progress');

const randomLorem = faker.lorem.word;
const productType = [
  'Chair',
  'Dresser',
  'Drawer',
  'Desk',
  'Table',
  'Island',
  'Rug',
  'Towel',
  'Lamp',
  'Box',
  'Storage',
  'Mirror',
  'Stool',
  'Bench',
  'Curtain',
  'Organizer',
  'Bowl',
  'Cutlery'
];
const dimensions = [
  'null',
  '41 3/8x19 5/8"',
  '28 3/4x19 5/8"',
  '51 5/8x23 5/8"',
  '47 1/4"',
  '32 5/8x37x35 3/8"',
  '18 1/8x13 3/4',
  '15 3/8x16 1/8',
  '23 5/8x15 3/8"',
  '21 1/4x26"'
];

const createProduct = function() {
  var result = '';
  var randomProduct =
    productType[Math.floor(Math.random() * productType.length)];
  var randomDim = dimensions[Math.floor(Math.random() * dimensions.length)];
  result += randomLorem().toUpperCase() + ',' + randomProduct + ',' + randomDim;
  return result;
};

const count = 10000000;
const file = 'ikea_seed.csv';

// cli-progress bar
const bar = new _progress.Bar({}, _progress.Presets.shades_grey);

// if file already exists
if (fs.existsSync(file)) {
  fs.unlinkSync(file);
}

bar.start(count, 0);
const stream = fs.createWriteStream(file);
stream.on('err', err => console.log(err));
stream.on('close', () => {
  bar.stop();
  console.log('Successfully wrote file!');
});

function write10Mil() {
  let i = count;
  function writeFile() {
    let ok = true;
    // initiate the csv file with headers
    stream.write('name,type,dimensions\n');
    do {
      i--;
      // write the very last entry
      if (i === 0) {
        stream.write(createProduct());
        stream.end();
      } else {
        ok = stream.write(createProduct() + '\n');
        bar.update(count - i + 1);
      }
    } while (i > 0 && ok);

    // if it breaks and there's still more to write
    if (i > 0) {
      stream.once('drain', writeFile);
    }
  }
  writeFile();
}

write10Mil();
