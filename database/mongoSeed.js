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
  '41 3/8x19 5/8',
  '28 3/4x19 5/8',
  '51 5/8x23 5/8',
  '47 1/4',
  '32 5/8x37x35 3/8',
  '18 1/8x13 3/4',
  '15 3/8x16 1/8',
  '23 5/8x15 3/8',
  '21 1/4x26'
];
const randomArticle = faker.lorem.sentence;
const img = faker.image.imageUrl;

const createProduct = function(id) {
  var result = '';
  var randomProduct =
    productType[Math.floor(Math.random() * productType.length)];
  var randomDim = dimensions[Math.floor(Math.random() * dimensions.length)];
  var randomImg = img(64, 64);
  function createArticles() {
    var min = Math.ceil(3);
    var max = Math.floor(6);
    var randomWordCount = Math.floor(Math.random() * (max - min) + min);
    var result = '';
    for (var i = 0; i < 6; i++) {
      result += randomArticle(randomWordCount) + '/';
    }
    return result;
  }

  result +=
    id.toString() +
    ',' +
    randomLorem().toUpperCase() +
    ',' +
    randomProduct +
    ',' +
    randomDim +
    ',' +
    randomImg +
    ',' +
    createArticles();
  return result;
};

const count = 10000000;
const file = 'database/ikea_seed_mongo.csv';

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
  console.timeEnd();
  console.log('Successfully wrote file!');
});

write10Mil();
function write10Mil() {
  console.time();
  let i = count;
  // initiate the csv file with headers
  writeFile();
  // stream.write('id,name,type,dimensions\n');
  function writeFile() {
    let ok = true;
    do {
      i--;
      // write the very last entry
      if (i === 0) {
        stream.write(createProduct(10000000 - i));
        stream.end();
      } else {
        ok = stream.write(createProduct(10000000 - i) + '\n');
        bar.update(count - i + 1);
      }
    } while (i > 0 && ok);

    // if it breaks and there's still more to write
    if (i > 0) {
      stream.once('drain', writeFile);
    }
  }
}