
const express = require('express');
const app = express();
app.get('/', (req,res)=>res.send('Helal MVP Running with AI 🚀'));
app.listen(process.env.PORT || 5000, ()=>console.log('Server running'));
