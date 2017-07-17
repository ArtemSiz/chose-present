import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public leftBasket: any = [{
    src: "assets/images/1.jpg",
    name: 'Siku - 1:87 Scale - Low Loader With John ...',
    price: '$19.55'
  },
    {
      src: "assets/images/2.jpg",
      name: 'Siku - 1:87 Scale - Low Loader With John ...',
      price: '$19.55'
    },
    {
      src: "assets/images/3.jpg",
      name: 'Siku - 1:87 Scale - Low Loader With John ...',
      price: '$19.55'
    },
    {
      src: "assets/images/4.jpg",
      name: 'Siku - 1:87 Scale - Low Loader With John ...',
      price: '$19.55'
    },

    {
      src: "assets/images/5.jpg",
      name: 'Siku - 1:87 Scale - Low Loader With John ...',
      price: '$19.55'
    },
    {
      src: "assets/images/6.jpg",
      name: 'Siku - 1:87 Scale - Low Loader With John ...',
      price: '$19.55'
    },
    {
      src: "assets/images/7.jpg",
      name: 'Siku - 1:87 Scale - Low Loader With John ...',
      price: '$19.55'
    },
    {
      src: "assets/images/8.jpg",
      name: 'Siku - 1:87 Scale - Low Loader With John ...',
      price: '$19.55'
    },

    {
      src: "assets/images/9.jpg",
      name: 'Siku - 1:87 Scale - Low Loader With John ...',
      price: '$19.55'
    },
    {
      src: "assets/images/1.jpg",
      name: 'Siku - 1:87 Scale - Low Loader With John ...',
      price: '$19.55'
    },
    {
      src: "assets/images/2.jpg",
      name: 'Siku - 1:87 Scale - Low Loader With John ...',
      price: '$19.55'
    },
    {
      src: "assets/images/3.jpg",
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

