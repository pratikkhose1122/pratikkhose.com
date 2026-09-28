const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'public', 'tech');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const icons = [
    { name: 'flutter.svg', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
    { name: 'supabase.svg', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
    { name: 'firebase.svg', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
    { name: 'postgresql.svg', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'nodejs.svg', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'github.svg', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    { name: 'vercel.svg', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
];

icons.forEach(icon => {
    const file = fs.createWriteStream(path.join(dir, icon.name));
    https.get(icon.url, function(response) {
        response.pipe(file);
    });
});
