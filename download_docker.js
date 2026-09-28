const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'public', 'tech');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const icons = [
    { name: 'docker.svg', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
];

icons.forEach(icon => {
    const file = fs.createWriteStream(path.join(dir, icon.name));
    https.get(icon.url, function(response) {
        response.pipe(file);
    });
});
