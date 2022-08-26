import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackComponent } from 'src/app/modal/feedback/feedback.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

 
  ngOnInit(): void {
  }
  openModalFeedback(){
    const modal = this.modalService.open(FeedbackComponent);
  }
}
