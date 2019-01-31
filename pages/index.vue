<template>
  <div class>
    <div class="box top">
      <div class="pagetitle">
          <span class="pagetitletext" data-text="Shino3">Shino3</span>
      </div>
      <nuxt-link to="/about">
        <h2 class="subtitle">T.SHINOHARA PROFILE PAGE.
          <br>CLICK HERE
        </h2>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: "single"
};
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  overflow: scroll;
}

.box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  flex-direction: column;

  /* 左右中央寄せ */
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  /* 上下中央寄せ */
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  padding: 30px;
  box-sizing: border-box;

  text-align: center;
  font-size: 20px;
  color: #ffffff;
  // transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);

  width: 100%;
  height: auto;
  min-height: 100vh;

  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #1d3557;
  background-image: url(/Lancer-evo1.jpg);
}

.pagetitle {
  position: relative;
  display: inline-block;
  font-size: 4.5em;
  padding: 0.3em 1em;
  margin: 40px;
  border: #ffffff solid 5px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  outline: none;
  transition: all 10s;
}

h2 {
  padding: 0.6em 1em;
  background-color: rgba(0, 0, 0, 0.7);
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 2.5em;
    padding: 0.3em 0em;
  }

  h2 {
    font-size: 0.8em;
    padding: 0.6em 1em;
  }
}

a,
a:visited,
a:active {
  color: white;
  text-decoration: none;
}
</style>