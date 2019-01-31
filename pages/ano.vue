<template>
  <div>
    <div class="container pt-5">
      <h3>あの楽器 iアプリ版</h3>
      <p class="py-0 my-0">
        <small>2010年 公開</small>
      </p>
      <p>
        ニコニコ技術部のカテゴリランキング
        <strong>過去最高24位</strong>
      </p>
      <p>スマートフォンが普及する直前に作ったアプリです。この頃は、新しいものに興味があったりする人はスマホに移りつつ、ガラケーのユーザーは移るタイミングを見計らっている頃でした。
        <br>当時、短大1年だった私は夏休みの最終日にふと何かを作りたい衝動に駆られ、貫徹で朝8時ごろに完成させて、それから学校に行った記憶。
        <br>一年ほどちょくちょく進め、ついに2010年の9月に一通り作りたいものを実装して開発終了にしました。
      </p>
      <p class>
        <a class="btn bg-github text-white" href="https://github.com/ShinoharaTa/ano-iapps">
          <i class="fab fa-github fa-fw"></i> ソースコード
        </a>
      </p>
      <iframe
        width="312"
        height="176"
        src="https://ext.nicovideo.jp/thumb/sm12179890"
        scrolling="no"
        style="border:solid 1px #ccc;"
        frameborder="0"
      >
        <a href="http://www.nicovideo.jp/watch/sm12179890">【Ver2.0完成】あの楽器iアプリ版</a>
      </iframe>
    </div>
    <div class="container pt-5">
      <h3>あの楽器 on Web(Javascript)</h3>
      <p class="py-0 my-0">
        <small>2018年 公開</small>
      </p>
      <p class>
        ニコニコ技術部のカテゴリランキング
        <strong>過去最高9位</strong>
      </p>
      <p>何か簡単なもの作りたいなぁと思いつつ、ネットを徘徊していたらJavascriptで音を鳴らすTone.jsという素晴らしいライブラリの存在を知りました。
        <br>これは・・・作ることを強いられているんだ！！とおもいつつ、日付はちょうどミクの日こと3/9であることに気づく・・・
        <br>Javascriptで制作、HTML5, Vue.jsなどを使いながら、これも一晩で作ることに。今回は協力者が最初からいたのでハマらずに抜けました！
      </p>
      <p class>
        <a
          class="btn bg-success text-white"
          href="https://qiita.com/Shino_JK/items/9ff6a4529f9fea15e11b"
        >Qiita 解説記事</a>
        <a class="btn bg-primary text-white" href="https://shinoharata.github.io/ano-web">
          <i class="fas fa-rocket"></i> 実際に動くWEBアプリ
        </a>
        <a class="btn bg-github text-white" href="https://github.com/ShinoharaTa/Ano-web">
          <i class="fab fa-github fa-fw"></i> ソースコード
        </a>
      </p>
      <iframe
        width="312"
        height="176"
        src="https://ext.nicovideo.jp/thumb/sm32876144"
        scrolling="no"
        style="border:solid 1px #ccc;"
        frameborder="0"
      >
        <a href="http://www.nicovideo.jp/watch/sm32876144">ブラウザで動く「あの楽器」を作成してみた（7年半ぶり）</a>
      </iframe>
    </div>
    <div class="pt-5">
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
