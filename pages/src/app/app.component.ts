import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 3;

  images = [
    {
      title: 'At the Beach - Rio de Janeiro, Brazil',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach - Naples',
      url: 'https://images.unsplash.com/photo-1525183995014-bd94c0750cd5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Beach - McWay Falls',
      url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
      title: 'At the Beach - Cannon Beach, United States',
      url: 'https://images.unsplash.com/photo-1527556897832-0c6492fa56cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    }
  ]
}
