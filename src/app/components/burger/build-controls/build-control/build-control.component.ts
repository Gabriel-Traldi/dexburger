import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-build-control',
  templateUrl: './build-control.component.html',
  styleUrls: ['./build-control.component.css']
})
export class BuildControlComponent implements OnInit {
  @Input() label: string;
  @Input() type: string;
  @Input() disabled: boolean;

  @Output() added: EventEmitter<string>;
  @Output() removed: EventEmitter<string>;

  constructor() {
    this.added = new EventEmitter<string>();
    this.removed = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

}
