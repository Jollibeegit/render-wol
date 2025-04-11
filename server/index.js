const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/wake', async (req, res) => {
  try {
    const response = await axios.get('http://218.233.206.187:8888/wol?mac=F4-B5-20-1B-EE-5D');
    res.send('✅ WOL 요청 전송 완료!');
  } catch (err) {
    res.status(500).send('❌ 전송 실패: ' + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Render WOL 중계 서버 실행 중 on port ${PORT}`);
});
