<template>
  <div class="bg-info">
    <div class="container">
      <div class="row">
        <nuxt-link to="/about" class="col-6 col-md-4 col-lg-2 headerNavBtn bg-info">
          <i class="fas fa-user fa-fw fa-lg"></i> About
        </nuxt-link>
        <nuxt-link to="/ano" class="col-6 col-md-4 col-lg-2 headerNavBtn btn-info">
          <i class="fas fa-play fa-fw fa-lg"></i> あの楽器
        </nuxt-link>
        <nuxt-link to="/music" class="col-6 col-md-4 col-lg-2 headerNavBtn btn-info">
          <i class="fas fa-music fa-fw fa-lg"></i> Musics
        </nuxt-link>
        <nuxt-link to="/program" class="col-6 col-md-4 col-lg-2 headerNavBtn btn-info">
          <i class="fas fa-tools fa-fw fa-lg"></i> Contents
        </nuxt-link>
        <nuxt-link to="/cars" class="col-6 col-md-4 col-lg-2 headerNavBtn btn-info">
          <i class="fas fa-car-crash fa-fw fa-lg"></i> Cars
        </nuxt-link>
        <nuxt-link to="/contact" class="col-6 col-md-4 col-lg-2 headerNavBtn btn-info">
          <i class="fas fa-globe fa-fw fa-lg"></i> Contact
        </nuxt-link>
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

<style scoped lang="scss">
.headerNavBtn {
  text-align: center;
  height: 3em;
  line-height: 3em;
  color: #eee;
  font-size: 16px;
}
</style>