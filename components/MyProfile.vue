<template>
  <div>
    <div class="title profile" :class="{ 'active' : (page === 'about') }">
      <div class="container">
        <div class="d-sm-flex" id="About" name="About">
          <img class="profile_icon profile mr-5" src="/profile_icon.png" alt="First slide">
          <div class="pagetitle">
            <h2>Shinohara.</h2>
            <p>
              <strong>生年月日</strong>：1991/12/1
              <br>
              <strong>性別</strong>：男
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="title contact" :class="{ 'active' : (page === 'contact') }">
      <div class="container">
        <div class="d-sm-flex" id="About" name="About">
          <img class="profile_icon active mr-5" src="/profile_icon.png" alt="First slide">
          <div class="pagetitle">
            <h2>Contact</h2>
            <p>ご連絡は以下ソーシャルアカウント or メールにてお待ちしております。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="title cars" :class="{ 'active' : (page === 'cars') }">
      <div class="container">
        <div class="d-sm-flex" id="About" name="About">
          <img class="profile_icon active mr-5" src="/profile_icon.png" alt="First slide">
          <div class="pagetitle">
            <h2>趣味</h2>
            <p>いろいろある趣味のうち、結構すきなことを。プラベートでいろいろなことやっています。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="title ano" :class="{ 'active' : (page === 'ano') }">
      <div class="container">
        <div class="d-sm-flex" id="About" name="About">
          <img class="profile_icon active mr-5" src="/profile_icon.png" alt="First slide">
          <div class="pagetitle">
            <h2>あの楽器</h2>
            <p>初音ミクの楽曲「Innocense」に登場する”あの楽器”です。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="title music" :class="{ 'active' : (page === 'music') }">
      <div class="container">
        <div class="d-sm-flex" id="About" name="About">
          <img class="profile_icon active mr-5" src="/profile_icon.png" alt="First slide">
          <div class="pagetitle">
            <h2>楽曲制作</h2>
            <p>主要ジャンル：Trance、楽曲制作活動および、同人で音楽作っています。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="title program" :class="{ 'active' : (page === 'program') }">
      <div class="container">
        <div class="d-sm-flex" id="About" name="About">
          <img class="profile_icon active mr-5" src="/profile_icon.png" alt="First slide">
          <div class="pagetitle">
            <h2>アプリ制作</h2>
            <p>もともとモノづくりは好き！！でも今の技術についていけない・・・(´・ω・｀)
            <br>余った時間や空いた時間でWebアプリケーションを作りつつ、実力にしたいと苦労中</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState(["page"])
};
</script>


<style lang="scss" scoped>
.nuxt-link-active {
  font-weight: bold;
}

#text {
  transform-origin: 50% 50%;
}

img.profile_icon {
    width: 200px;
    height: 200px;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  box-shadow: 0px 0px 20px -0px rgba(200, 200, 200, 0.8);
}

h2 {
  border-bottom: solid 2px orange;
}

.title {
  display: none;

  padding: 30px;

  font-size: 20px;
  color: #ffffff;
  width: 100%;

  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  // background-attachment: fixed;
  background-color: #1d3557;
  &.profile {
    background-image: url(/Lancer-evo1.jpg);
  }
  &.contact {
    background-image: url(/socials-top.png);
  }
  &.cars {
    background-image: url(/car-web-title.jpg);
  }
  &.music {
    background-image: url(/Music-title.jpg);
  }
  &.ano {
    background-image: url(/ano-web-title.png);
  }
  &.program {
    background-image: url(/program-title.jpg);
  }
}

@keyframes active{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

.active {
  display: block;
}

</style>
