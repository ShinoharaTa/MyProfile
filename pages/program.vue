<template>
  <div class="container pt-5">
    <div class="pt-5">
      <h3>退勤時刻メモ</h3>
      <p>
        <small>2018年 公開</small>
      </p>
      <p >退勤した時刻をよく忘れるのでメモするためのアプリ。スマートフォンも対応！
        <br>
        <a href="https://workenddays.firebaseapp.com/" class="btn btn-info">サービスのページへ</a>
      </p>
      <img class="img-fluid border border-secondary" src="/taikin.jpg" alt="Card image cap">
    </div>
    <div class="pt-5">
      <h3>TipSensu with Twitter</h3>
      <p>
        <small>2018年 公開</small>
      </p>
      <p>投げ銭サービス SensuのTwitter投稿を生成するWebサイト
        <br>まあ、今となってはTwitterでのSensuサービスも終了してしまったのですが・・・
        <br>私の勉強にとってはPlusになったのでOK！！！
        <br>
        <a href="https://github.com/ShinoharaTa/TipSensuWithTwitter" class="btn btn-info">サービスのページへ</a>
      </p>
      <img class="img-fluid border border-secondary" src="/tip-sensu.png" alt="Card image cap">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  padding: 30px;

  font-size: 20px;
  color: #ffffff;
  width: 100%;

  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  // background-attachment: fixed;
  background-color: #1d3557;
  &.ano {
    background-image: url(/ano-web-title.png);
  }
  &.apps {
    background-image: url(/socials-top.png);
  }
  &.music {
    background-image: url(/Music-title.jpg);
  }
}
</style>
