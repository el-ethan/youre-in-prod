const styles = 'background: orange; position: fixed; font-size: 2rem';
const warningMsg = '⚠️ ⚠ ️⚠️ WARNING: You are in prod. Click with care! ⚠️ ⚠️ ⚠️';

document.body.innerHTML = `<marquee style="${styles}">${warningMsg}</marquee>${document.body.innerHTML}`;
