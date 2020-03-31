const Scraper = require('images-scraper');
const wallpaper = require('wallpaper');
const opn = require('opn');
const path = require('path');
const { exec } = require('child_process');

const { randomChoice } = require('../utils/random');

const google = new Scraper({
  puppeteer: {
    headless: false,
  }
});

const searches = ['Nego ney memes', 'nego ney imortal', 'nego ney pinto?', 'Nego ney hackeou seu pc?', 'ناي الأسود إلهنا'];

const playAudio = (path) => {
  const commands = {
    'aix': 'start',
    'darwin': '',
    'freebsd': '',
    'linux': 'play ',
    'openbsd': '',
    'sunos': '',
    'win32': 'start ', 
  };
  exec(commands[process.platform] + path);
};

const scrap = async () => {
  const audioPath = path.resolve(__dirname, '..', 'media', 'audio.mp3');
  const results = await google.scrape(randomChoice(searches), 8);
  
  results.forEach(item => {
    opn(item.url);
  });
  
  await wallpaper.set(path.resolve(__dirname, '..', 'media', 'wallpaper.jpg'));
  await wallpaper.get();

  
  playAudio(audioPath);
  return results;
}

module.exports = scrap();
