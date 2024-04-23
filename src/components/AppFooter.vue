<template>
  <footer class="footer ms_bg-black mb-0 p-sct text-white">
    <div class="ms_container-lg g-5">
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="title">About</h2>
            <p class="text-gray">
              We created Everlead to effectively become the
              stepping stone towards meeting all your goals
              & achieving business success.
            </p>
            <ElmBtnsSocials :icoList="['linkedin.svg', 'facebook.svg', 'twitter.svg']" />
          </div>

          <div class="col">
            <h2 class="title">Twitter</h2>

            <div class="twitter-card">
              <div class="tw-img">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                </svg>
              </div>
              <div class="tw-content">
                <p class="text-gray">
                  <a href="#">@aliasadadm</a> Hi <a href="#">@aliasadadm</a> , can you please submit a ticket at <a
                    href="https://t.co/JLV61aXG7d">https://t.co/JLV61aXG7d</a> and one of our
                  support agent... <a href="https://t.co/yk57k1S9bS">https://t.co/yk57k1S9bS</a>
                </p>
              </div>
            </div>

            <div class="twitter-card">
              <div class="tw-img">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                </svg>
              </div>
              <div class="tw-content">
                <p class="text-gray">
                  <a href="#">@HenrySefaBoaky1</a> Check out our theme Gioia which has all necessary elements to build a multi vendor marketplace. <a href="https://t.co/cOBIVKZBIL">https://t.co/cOBIVKZBIL</a> 
                </p>
              </div>
            </div>

          </div>

          <div class="col links">
            <h2 class="title">Important links</h2>
            <ul class="ps-0 text-gray">
              <li><a href="#">About me</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Language packs</a></li>
              <li><a href="#">Become a coach</a></li>
              <li><a href="#">Monthly events</a></li>
            </ul>
          </div>

          <div class="col contact">
            <h2 class="title">Contact me</h2>
            <ul class="ps-0 text-gray">
              <li><i class="bi bi-geo-alt"></i><a href="#">457 BigBlue Street, NY 10013</a></li>
              <li><i class="bi bi-telephone"></i><a href="#">(315) 5512-2579</a></li>
              <li><i class="bi bi-envelope"></i><a href="#">everlead@mikado.com</a></li>
            </ul>
            <div class="subscribe">
              <input type="text" placeholder="Your Name">
              <button type="button" class="ms-2">SUBSCRIBE</button>
            </div>

          </div>

        </div>
      </div>
    </div>

  </footer>
  <div class="copyright text-center text-white">
    <p class="m-0 py-2">Copyright Everlead&copy;MikadoThemes</p>
  </div>
</template>

<script>
import ElmBtnsSocials from './ElmBtnsSocials.vue';
export default {
  components: { ElmBtnsSocials },
}

</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/_variables.scss' as *;

.title {
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  font-style: normal;
  font-size: 20px;

  &::after {
    content: '';
    background-color: $orange;
    display: block;
    width: 30px;
    height: 2px;
    margin: 25px 0;
  }

}

.twitter-card {
  .tw-img {
    width: 30px;
    display: inline-block;

    svg {
      fill: $orange;
      width: 16px;
    }

  }

  .tw-content {
    width: calc(100% - 30px);
    display: inline-block;
    vertical-align: text-top;

    a {
      text-decoration: underline;
    }
  }
}

.links {
  li {
    margin-bottom: 8px;
  }
}

.contact {
  li {
    margin-bottom: 12px;

    i {
      color: $orange;
      margin-right: 12px;
    }
  }

  .subscribe {
    margin-top: 40px;
    border-bottom: 2px solid #ffffff;
    display: flex;

    &>* {
      color: white;
      background-color: transparent;
      border: 0;
    }
  }
}

.copyright {
  background-color: $orange;
}
</style>