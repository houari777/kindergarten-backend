// Configuration CORS simplifiée
const corsConfig = `
// Configuration CORS simplifiée
app.use((req, res, next) => {
  const allowedOrigins = [
    'https://kindergarten-app-dashboard.vercel.app',
    'http://localhost:3000',
    'https://kindergarten-backend-r8q6eyn3c-houari777s-projects.vercel.app',
    /https?:\/\/kindergarten-app-dashboard-[a-z0-9]+\.vercel\.app/,
    /https?:\/\/localhost(:[0-9]+)?/
  ];
  
  const origin = req.headers.origin;
  
  // Autoriser toutes les origines en développement
  if (process.env.NODE_ENV !== 'production') {
    res.header('Access-Control-Allow-Origin', origin || '*');
  } else if (allowedOrigins.some(allowedOrigin => 
    typeof allowedOrigin === 'string' 
      ? origin === allowedOrigin 
      : allowedOrigin.test(origin)
  )) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});
`;

console.log('Copiez ce code dans votre fichier index.js, juste après la configuration d\'Express et avant vos routes:');
console.log(corsConfig);
