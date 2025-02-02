const simpleGit = require('simple-git');
const path = require('path');

const git = simpleGit();

async function deploy() {
  try {
    await git.add(path.resolve(__dirname, 'dist'));
    await git.commit('Deploy to GitHub Pages');
    await git.push('origin', 'gh-pages', { '--force': true });
    console.log('Deployment successful!');
  } catch (error) {
    console.error('Deployment failed:', error);
  }
}

deploy();
