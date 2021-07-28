import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  modalOpen = false;

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  ngOnDestroy() {
    this.el.nativeElement.remove()
  }

  onClick() {
    this.modalOpen = !this.modalOpen
  }
}
