import '../css/style.css'

// import image from '../images/image.png'
import image from '../images/hero.png'
import floatingFlowwer from '../images/backgrounds/back3.png'
import floatingFlowwer2 from '../images/backgrounds/back4.png'
import floatingFlowwer3 from '../images/backgrounds/back.png'
import tea from '../images/tea.jpg'

import hotelsvg from '../images/hotel.svg'
import hotel1 from '../images/hotel1.jpg'
import hotel2 from '../images/hotel2.jpg'

import EmblaCarousel from 'embla-carousel'
import AutoScroll from 'embla-carousel-auto-scroll'

document.querySelector('#app').innerHTML = /*html*/
`
<div class="hero-section relative">
  <div class="flex w-full flex-col items-stretch md:flex-row bg-base-200 max-h-[70vh]">
    <div
      class="w-full md:w-1/2 p-4 flex items-center content-center justify-center flex-col text-center md:text-right"
    >
      <h1 class="w-full text-5xl font-bold font-(family-name:--text-pri)">
        NAME 1
      </h1>
      <h1 class="w-full text-5xl font-bold">&</h1>
      <h1 class="w-full text-5xl font-bold font-(family-name:--text-pri)">
        NAME 2
      </h1>
    </div>
    <div class="divider hidden md:flex divider-horizontal my-10"></div>
    <div class="w-full md:w-1/2 flex items-end">
      <img class="object-scale-down" src="${image}" />
    </div>
  </div>
  <img class="absolute -right-10 -bottom-45" src="${floatingFlowwer}" />
</div>

<div class="bg-base-100 text-center p-10 py-[5rem]">
  <h3 class="text-5xl mb-5 z-10">The Second of August 2026</h3>
  <h3 class="text-4xl top-10 z-10">Cedar Island, Orillia</h3>

  <img class="absolute -left-50 -bottom-45 z-10" src="${floatingFlowwer2}" />
</div>

<div class="md:max-w-[80vw] mx-auto my-0 bg-base-200 z-25 relative">
  <div
    class="card relative flex w-full flex-col md:flex-row bg-secondary rounded-4xl p-10 py-[5rem] items-stretch"
  >
    <!-- Text side -->
    <div class="w-full md:w-1/2 card p-5 flex flex-col justify-start">
      <h2 class="text-5xl z-10 mb-10">You are invited for Tea</h2>
      <p class="text-3xl z-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus
        ex a bibendum cursus. In dignissim lacinia risus, a ornare lacus fermentum
        et. Donec turpis odio, pretium et magna a, malesuada dapibus ex. Cras
        congue blandit nunc eget varius.
      </p>
    </div>

    <!-- Divider -->
    <div class="divider hidden md:flex divider-horizontal"></div>

    <!-- Image side -->
    <div class="w-full md:w-1/2 card">
      <div
        class="w-full min-h-[300px] md:h-full rounded-box bg-cover bg-bottom bg-no-repeat"
        style="background-image: url('${tea}')"
      ></div>
    </div>
  </div>

  <div
    class="flex w-full flex-col md:flex-row bg-base-200 rounded-b-4xl p-10 py-[5rem] items-stretch"
  >
    <!-- Image side -->
    <div class="w-full md:w-1/2 card">
      <div
        class="w-full min-h-[300px] md:h-full rounded-box bg-cover bg-bottom bg-no-repeat"
        style="background-image: url('${tea}')"
      ></div>
    </div>

    <!-- Divider -->
    <div class="divider hidden md:flex divider-horizontal"></div>

    <!-- Text side -->
    <div class="w-full md:w-1/2 card p-5 my-5 flex flex-col justify-start">
      <h2 class="text-5xl z-10 mb-10">More Content</h2>
      <p class="text-3xl z-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus
        ex a bibendum cursus. In dignissim lacinia risus, a ornare lacus fermentum
        et. Donec turpis odio, pretium et magna a, malesuada dapibus ex. Cras
        congue blandit nunc eget varius.
      </p>
    </div>
  </div>

  <div class="relative w-full bg-base-100 p-10 px-0 py-[5rem] items-stretch">
    <img
      class="absolute -right-10 -bottom-45 min-h-[600px] z-25 rounded-box"
      src="${floatingFlowwer3}"
    />
    <div class="embla z-10 relative">
      <div div class="embla__viewport">
        <div class="embla__container">
          <div class="embla__slide w-full">
            <div
              class="w-full min-h-[300px] md:h-full rounded-box bg-cover bg-bottom bg-no-repeat"
              style="background-image: url('${tea}')"
            ></div>
          </div>
          <div class="embla__slide w-full">
            <div
              class="w-full min-h-[300px] md:h-full rounded-box bg-cover bg-bottom bg-no-repeat"
              style="background-image: url('${tea}')"
            ></div>
          </div>
          <div class="embla__slide w-full">
            <div
              class="w-full min-h-[300px] md:h-full rounded-box bg-cover bg-bottom bg-no-repeat"
              style="background-image: url('${tea}')"
            ></div>
          </div>
          <div class="embla__slide w-full">
            <div
              class="w-full min-h-[300px] md:h-full rounded-box bg-cover bg-bottom bg-no-repeat"
              style="background-image: url('${tea}')"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="w-full bg-base-100 p-10 py-[5rem]">

    <div class="w-full">
      <div class="text-left flex flex-col allign-left">
        <h2 class="text-5xl z-10 mb-10">Travel</h2>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-x-8 gap-y-4">

      <div class="card bg-base-200 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="${hotel1}"
            class="rounded-xl object-none h-[200px] w-full" />
        </figure>
        <div class="card-body items-center text-center">
            <h3 class="card-title">Hotel 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus
              ex a bibendum cursus. In dignissim lacinia risus, a ornare lacus
              fermentum et. Donec turpis odio, pretium et magna a, malesuada dapibus
              ex. Cras congue blandit nunc eget varius.
            </p>
          <div class="card-actions">
            <button class="btn btn-primary"><a href="https://www.hilton.com/en/" target="_blank">Info</a></button>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="${hotel2}"
            class="rounded-xl object-none h-[200px] w-full" />
        </figure>
        <div class="card-body items-center text-center">
            <h3 class="card-title">Hotel 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus
              ex a bibendum cursus. In dignissim lacinia risus, a ornare lacus
              fermentum et. Donec turpis odio, pretium et magna a, malesuada dapibus
              ex. Cras congue blandit nunc eget varius.
            </p>
          <div class="card-actions">
            <button class="btn btn-primary"><a href="https://www.hilton.com/en/" target="_blank">Info</a></button>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="${hotel1}"
            class="rounded-xl object-none h-[200px] w-full" />
        </figure>
        <div class="card-body items-center text-center">
            <h3 class="card-title">Hotel 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus
              ex a bibendum cursus. In dignissim lacinia risus, a ornare lacus
              fermentum et. Donec turpis odio, pretium et magna a, malesuada dapibus
              ex. Cras congue blandit nunc eget varius.
            </p>
          <div class="card-actions">
            <button class="btn btn-primary"><a href="https://www.hilton.com/en/" target="_blank">Info</a></button>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="hero w-full bg-base-200 p-10 py-[5rem]">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">RSVP/Save the date?</h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
</div>

`


const OPTIONS = { loop: true }
const emblaNode = document.querySelector('.embla')
const viewportNode = emblaNode.querySelector('.embla__viewport')
const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [
  AutoScroll({ playOnInit: true, speed: 0.25, stopOnMouseEnter: true})
])


const element = document.querySelector('.embla');

element.addEventListener('mouseleave', function(event) {
  const autoScroll = emblaApi?.plugins()?.autoScroll;
  const playOrStop = autoScroll.isPlaying();
  if (!playOrStop){
    autoScroll.play();
    console.log(autoScroll.isPlaying())
  }
});