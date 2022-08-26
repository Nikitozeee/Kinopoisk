import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackComponent } from 'src/app/modal/feedback/feedback.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(private modalService: NgbModal) { }
  
  ngOnInit(): void {
  }

  openModalFeedback(){
    const modal = this.modalService.open(FeedbackComponent);
  }
}
