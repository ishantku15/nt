import https from 'https';

const data = JSON.stringify({ course_id: 183 });

const options = {
  hostname: 'nexttoppers.asmultiverse.in',
  port: 443,
  path: '/api/proxy?path=/nt/course-details',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, res => {
  let body = '';
  res.on('data', chunk => body += chunk.toString());
  res.on('end', () => console.log('STATUS:', res.statusCode, '\nBODY:', body));
});

req.on('error', error => console.error(error));
req.write(data);
req.end();
