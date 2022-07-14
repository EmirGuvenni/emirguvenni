<template>
  <div id="app" class="justify-center bg-white container-flex">
    <full-page ref="fullpage" :options="options">
      <!-- Hello -->
      <div class="section">
        <div class="text-center">
          <h1 class="p-2 text-6xl font-semibold text-black" id="hello-msg">
            Hello!
          </h1>
          <h2 class="p-2 text-xl font-medium text-gray-600">
            I'm Emir, Back-end Developer
          </h2>
          <div class="scroll-down svg" id="home-scroll-down">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
              id="Layer_2" x="0px" y="0px" viewBox="0 0 25.166666 37.8704414"
              enable-background="new 0 0 25.166666 37.8704414" xml:space="preserve">
              <path class="stroke" fill="none" stroke="#c7c4b8" stroke-width="2.5" stroke-miterlimit="10"
                d="M12.5833445 36.6204414h-0.0000229C6.3499947 36.6204414 1.25 31.5204487 1.25 25.2871208V12.5833216C1.25 6.3499947 6.3499951 1.25 12.5833216 1.25h0.0000229c6.2333269 0 11.3333216 5.0999947 11.3333216 11.3333216v12.7037992C23.916666 31.5204487 18.8166714 36.6204414 12.5833445 36.6204414z">
              </path>
              <path class="scroller" fill="#c7c4b8"
                d="M13.0833359 19.2157116h-0.9192753c-1.0999985 0-1.9999971-0.8999996-1.9999971-1.9999981v-5.428606c0-1.0999994 0.8999987-1.9999981 1.9999971-1.9999981h0.9192753c1.0999985 0 1.9999981 0.8999987 1.9999981 1.9999981v5.428606C15.083334 18.315712 14.1833344 19.2157116 13.0833359 19.2157116z">
              </path>
            </svg><i class="icon icon-arrow-down"></i>
          </div>
        </div>
      </div>
      <!-- About -->
      <div class="justify-center section">
        <figure class="px-8">
          <img src="./assets/_emir.jpg" alt="Emir" class="flex w-48 h-48 m-4 mx-auto rounded-full md:w-64 md:h-64" />
          <div class="text-center md:py-1 md:px-1">
            <h1 class="p-2 text-4xl font-semibold md:text-5xl">Emir Güvenni</h1>
            <p class="max-w-3xl py-3 mx-auto text-lg font-normal text-black text-opacity-80">
              I'm a back-end developer familiar with languages like TypeScript,
              GO, Python, PHP, Solidity and experienced in technologies such as
              MongoDB, PostgreSQL, Git, Vue.js, Express.js, Laravel and many more... I'm always looking to learn new
              things and new opportunities.
            </p>
          </div>
        </figure>
      </div>
      <!-- Projects -->
      <div class="section">
        <figure>
          <div class="text-center">
            <h1 class="text-5xl font-semibold text-black">My projects</h1>
          </div>
          <div class="py-4"></div>
          <div class="text-center">
            <div class="flex flex-col items-center justify-center mb-4 space-y-4 md:flex-row md:space-x-8 md:space-y-0">
              <!-- Mass Wallet Generator -->
              <a id="mass-wallet-generator" href="https://github.com/EmirGuvenni/Mass-Wallet-Generator"
                class="h-32 p-6 rounded-lg w-72">
                <div>
                  <h2 class="font-semibold text-white">Mass Wallet Generator</h2>
                  <p class="text-white opacity-80">Generate as many wallets as you want.</p>
                </div>
              </a>
              <!-- Type-Streak -->
              <a id="typestreak" href="https://type-streak.emirguvenni.com/" target="_blank"
                class="h-32 p-6 rounded-lg w-72">
                <div>
                  <h2 class="font-semibold text-white">Type-Streak</h2>
                  <p class="text-white opacity-80">
                    Exercise typing with over 58.000 English words.
                  </p>
                </div>
              </a>
            </div>
            <span>More on
              <a href="https://github.com/EmirGuvenni" class="text-blue-700" target="_blank">Github</a></span>
          </div>
        </figure>
      </div>
      <!-- Contact -->
      <div class="text-center section">
        <div>
          <h1 class="py-5 text-5xl font-semibold text-black">Links</h1>
          <pre class="inline mx-auto text-lg text-left links">
Mail: <a href="mailto:contact@emirguvenni.com" target="_blank" class="text-blue-700">contact@emirguvenni.com</a>
GitHub: <a href="https://github.com/EmirGuvenni" target="_blank" class="text-blue-700">EmirGuvenni</a>
LinkedIn: <a href="https://www.linkedin.com/in/emirg%C3%BCvenni/" target="_blank" class="text-blue-700">Emir Güvenni</a>
</pre>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script setup>
const options = {
  menu: '#menu',
  navigation: true,
  anchors: ["hello", "about", "project", "contact"],
  animateAnchor: false,
  recordHistory: false,
  lockAnchors: true,
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  font-family: "Poppins";
}

#hello-msg {
  animation: fadeIn ease 1.31s;
}

.fp-warning,
.fp-watermark a {
  color: white !important;
  display: none !important;
}

.links,
.links>a {
  font-family: monospace;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

///////////////////////////////////

svg {
  vertical-align: middle;
}

.scroll-down {
  position: absolute;
  left: 50%;
  margin-left: -20px;
  width: 40px;
  height: 40px;
  bottom: 35px;
  padding-left: 7px;
  cursor: pointer;
  z-index: 2;
  color: #c7c4b8;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.scroll-down.svg svg {
  width: 25px;
  opacity: 1;
  -webkit-transition: opacity 0.5s;
  -moz-transition: opacity 0.5s;
  -ms-transition: opacity 0.5s;
  -o-transition: opacity 0.5s;
  transition: opacity 0.5s;
}

.scroll-down.svg .stroke {
  stroke: #ada99d;
}

.scroll-down.svg .scroller {
  fill: #ada99d;
  -webkit-animation: updown 1s infinite;
  -moz-animation: updown 1s infinite;
  -o-animation: updown 1s infinite;
  animation: updown 1s infinite;
}

@-webkit-keyframes updown {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  50% {
    -webkit-transform: translate(0, 5px);
    transform: translate(0, 5px);
  }

  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}

@-moz-keyframes updown {
  0% {
    -moz-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  50% {
    -moz-transform: translate(0, 5px);
    transform: translate(0, 5px);
  }

  100% {
    -moz-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}

@-o-keyframes updown {
  0% {
    -o-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  50% {
    -o-transform: translate(0, 5px);
    transform: translate(0, 5px);
  }

  100% {
    -o-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}

@keyframes updown {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  50% {
    -webkit-transform: translate(0, 5px);
    transform: translate(0, 5px);
  }

  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}

///////////////////////////////////
#mass-wallet-generator {
  background: #3a7bd5;
  background: -webkit-linear-gradient(to right, #3a6073, #38485f);
  background: linear-gradient(to right, #3a6073, #38485f);

  transition: 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
}

#typestreak {
  background-image: url("./assets/type-streak.png");
  background-repeat: no-repeat;
  background-size: 288px 128px;

  transition: 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
}
</style>
