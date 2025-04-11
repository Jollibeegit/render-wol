const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// WOL 요청을 받는 엔드포인트
app.get('/wake', async (req, res) => {
  try {
    // 여기 주소는 반드시 공유기 DDNS 주소 + 포트포워딩된 포트로 수정해야 함
    const response = await axios.get('http://jollibee.iptime.org:8888/wol?mac=F4-B5-20-1B-EE-5D');

    console.log('✅ WOL 요청 전송 완료!');
    res.send('✅ WOL 요청 전송 완료!');
  } catch (err) {
    console.error('❌ WOL 요청 실패:', err.message);
    res.status(500).send('❌ 전송 실패: ' + err.message);
  }
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`✅ Render WOL 중계 서버 실행 중 on port ${PORT}`);
});
