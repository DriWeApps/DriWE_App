const base = 'http://localhost:5000';

async function post(path, body){
  const res = await fetch(base + path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    timeout: 5000,
  });
  const text = await res.text();
  return { status: res.status, body: text };
}

(async () => {
  try {
    console.log('Testing /register');
    const r1 = await post('/register', { name: 'Tester', email: 'tester@example.com', password: 'pass' });
    console.log('/register ->', r1.status, r1.body);

    console.log('Testing /login');
    const r2 = await post('/login', { email: 'tester@example.com', password: 'pass' });
    console.log('/login ->', r2.status, r2.body);
  } catch (e) {
    console.error('Request failed:', e && e.message ? e.message : e);
    process.exit(1);
  }
})();