import { Component, OnInit } from '@angular/core';
import { BurguerService } from '../services/burguer.service';

@Component({
  selector: 'app-burguer-list',
  templateUrl: './burguer-list.component.html',
  styleUrls: ['./burguer-list.component.css']
})
export class BurguerListComponent implements OnInit {

  constructor(public burguerService: BurguerService) { }

  ngOnInit(): void {
  }

}
