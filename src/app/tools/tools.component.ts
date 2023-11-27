import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const swiper = new Swiper('#swiper-task .slide-content', {
      slidesPerView: 4,
      spaceBetween: 25,
      loop: true,
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 4,
        },
      }
    });
    const swiper2 = new Swiper('#swiper-interface .slide-content', {
      slidesPerView: 4,
      spaceBetween: 25,
      loop: true,
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 4,
        },
      }
    });
    const swiper3 = new Swiper('#swiper-navigation .slide-content', {
      slidesPerView: 4,
      spaceBetween: 25,
      loop: true,
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 4,
        },
      }
    });
    const swiper4 = new Swiper('#swiper-perception .slide-content', {
      slidesPerView: 4,
      spaceBetween: 25,
      loop: true,
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 4,
        },
      }
    });
    const swiper5 = new Swiper('#swiper-navigation .slide-content', {
      slidesPerView: 4,
      spaceBetween: 25,
      loop: true,
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 4,
        },
      }
    });
    const swiper6 = new Swiper('#swiper-manipulation .slide-content', {
      slidesPerView: 4,
      spaceBetween: 25,
      loop: true,
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 4,
        },
      }
    });
    const swiper7 = new Swiper('#swiper-speech .slide-content', {
      slidesPerView: 4,
      spaceBetween: 25,
      loop: true,
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '#swiper-speech .swiper-button-next',
        prevEl: '#swiper-speech .swiper-button-prev',
      },
      pagination: {
        el: '#swiper-speech .swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 4,
        },
      }
    });
    
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
