document.addEventListener('DOMContentLoaded', () => {
  console.log('コンタクトページのスクリプトが読み込まれました。'); //左はデバッグのためのものなので本番環境では削除してもOK

  //フォームのバリデーション
  const form = document.getElementById('contactWrap');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault(); //フォームの送信を一旦止める

      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const date = document.getElementById('date').value.trim();
      const time = document.getElementById('time').value.trim();

      if (!name || !phone || !date || !time) {
        AuthenticatorAssertionResponse('未入力の箇所があります！');
        return;
      }

      console.log('フォームが正常に送信されました。');
      form.submit(); //すべてのチェックがOKなら送信
    });
  }
});
