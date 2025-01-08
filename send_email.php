<?php
// フォームからデータを取得
$name = htmlspecialchars($_POST["user_name"],ENT_QUOTES, "UTF-8");
$phone = htmlspecialchars($_POST["user_phone"],ENT_QUOTES, "UTF-8");
$email = htmlspecialchars($_POST["user_email"],ENT_QUOTES, "UTF-8");
$date = htmlspecialchars($_POST["date"],ENT_QUOTES, "UTF-8");
$time = htmlspecialchars($_POST["time"],ENT_QUOTES, "UTF-8");
$message = htmlspecialchars($_POST["message"],ENT_QUOTES, "UTF-8");

// チェックボックスの選択を取得
$menus = [];
foreach($_POST as $key => $value){
  if (in_array($key,["sonic","ion","sonic-ion","poration","sphere","cray","monitor",
  "all70","upperbody","lowerbody","head60","head25","facialoption",
  "online-sphere","online-massage","online-sphere-massage","bridal",
  "adultmakeup","kidsmakeup","makelesson40","makelesson80"])){
    $menus[] = $value;
  }
}

// 選択したメニューを文字列に変換
$selectedMenus = !empty($menus) ? implode(",", $menus) : "選択なし";

// 送信先のメールアドレス
$to = "ch7.x.q0709@gmail.com";

// メールの件名　
$subject = "予約・お問い合わせ: $name 様";

// メールの本文
$body = <<<EOT
お名前： $name
電話番号: $phone
メールアドレス: $email
ご予約希望日: $date
ご希望のお時間: $time
ご希望のメニュー: $selectedMenus
メッセージ: $mesage
EOT;

// メールヘッダー
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type:text/plain; charset=UTF-8\r\n";

// メール送信処理
if(mail($to, $subject, $body, $headers)){
  echo"お問合せ内容を送信しました。ありがとうございました。";
}else{
  echo "送信に失敗しました。もう一度お試しください。";
}

?>