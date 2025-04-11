const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/wake', async (req, res) => {
  const { mac } = req.body;
  if (!mac) return res.status(400).send('❌ MAC 주소가 없습니다');

  try {
    const url = `http://jollibee.iptime.org:8888/wol?mac=${mac}`;
    const response = await axios.get(url);
    res.send(`✅ WOL 요청 성공! → ${mac}`);
  } catch (err) {
    res.status(500).send(`❌ 요청 실패: ${err.message}`);
  }
});

app.get('/', (req, res) => {
  res.send('🟢 Render WOL 중계 서버 작동 중!');
});

app.listen(PORT, () => {
  console.log(`🚀 Render WOL 서버 실행 중 on port ${PORT}`);
});
