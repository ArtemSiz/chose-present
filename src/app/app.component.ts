import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public leftBasket: any = [{
    src: "../app/img/1.jpg",
    name: 'Siku - 1:87 Scale - Low Loader With John ...',
    price: '$19.55'
  },
    {
      src: "../app/img/2.jpg",
      name: 'Siku - 1:87 Scale - Low Loader With John ...',
      price: '$19.55'
    },
    {
      src: "../app/img/3.jpg",
      name: 'Siku - 1:87 Scale - Low Loader With John ...',
      price: '$19.55'
    },
    {
      src: "../app/img/4.jpg",
      name: 'Siku - 1:87 Scale - Low Loader With John ...',
      price: '$19.55'
    },

    {
      src: "../app/img/5.jpg",
      name: 'Siku - 1:87 Scale - Low Loader With John ...',
      price: '$19.55'
    },
    {
      src: "../app/img/6.jpg",
      name: 'Siku - 1:87 Scale - Low Loader With John ...',
      price: '$19.55'
    },
    {
      src: "../app/img/7.jpg",
      name: 'Siku - 1:87 Scale - Low Loader With John ...',
      price: '$19.55'
    },
    {
      src: "../app/img/8.jpg",
      name: 'Siku - 1:87 Scale - Low Loader With John ...',
      price: '$19.55'
    },

    {
      src: "../app/img/9.jpg",
      name: 'Siku - 1:87 Scale - Low Loader With John ...',
      price: '$19.55'
    },
    {
      src: "../app/img/1.jpg",
      name: 'Siku - 1:87 Scale - Low Loader With John ...',
      price: '$19.55'
    },
    {
      src: "../app/img/2.jpg",
      name: 'Siku - 1:87 Scale - Low Loader With John ...',
      price: '$19.55'
    },
    {
      src: "../app/img/3.jpg",
      name: 'Siku - 1:87 Scale - Low Loader With John ...',
      price: '$19.55'
    }
  ];

  public rightBasket: any = [];

  create(index): any {
    event.preventDefault();
    this.rightBasket.push(index);
  }

  openMenu(index) {
    let numberImage = this.rightBasket.indexOf(index);
    for (let i = 0; i < this.rightBasket.length; i++) {
      if (numberImage === i) {
        document.querySelectorAll('div.note-content-menu')[i].classList.toggle('open-menu');
      }
    }
  }

  openList(index) {
    event.preventDefault();
    let numberImage = this.rightBasket.indexOf(index);
    for (let i = 0; i < this.rightBasket.length; i++) {
      if (numberImage === i) {
        document.querySelectorAll('div.menu_options')[i].classList.toggle('open');
      }
    }
  }

  removeProduct(index) {
    event.preventDefault();
    let numberImage = this.rightBasket.indexOf(index);
    for (let i = 0; i < this.rightBasket.length; i++) {
      if (numberImage === i) {
        this.rightBasket.splice(i, 1);
      }
    }
  }
}

