import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '../toolbar.service';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private toolbarService: ToolbarService) { }

  ngOnInit() {
  }

  get submitDisabled$() {
    return this.toolbarService.validity$.pipe(
      tap(validity => { /*console.log(`toolbar validity ${validity}`)*/ }),
      map(validity => !validity));
  }

  submit() {
    this.toolbarService.submit();
  }

  refresh() {
    this.toolbarService.refresh();
  }
}
