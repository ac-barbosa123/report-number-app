import { Component, OnInit } from '@angular/core';
import { IndexService } from 'src/app/providers/api/index/index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public indexService: IndexService) { }


  operators: any = [];
  ngOnInit(): void {
    this.listOperators()
  }
  listOperators() {

    setTimeout(() => {
      this.indexService.getOperators().subscribe(
        res => {
          this.operators = Object(res).data.operators;
          console.log(this.operators)
        }
      );
    });
  }

  report = {
    id: null,
    phone_number: null,
    operator_id: null,
    entity: null,
  }

  reportSwindle() {
    this.indexService.reportNumber(this.report).subscribe(
      res => {
        res
        console.log(res)
      }
    
    );

  }

}
