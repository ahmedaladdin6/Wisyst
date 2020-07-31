import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu = []
  constructor() {
    this.menu = [
      { name: 'الرئسية' ,router:'home'},
      { name: 'عن الجمعية',router:'about'},
      { name: 'مشارعينا',router:'projects'},
      { name: 'السياسات',router:'policy'},
      { name: 'التقارير الثانوية',router:'reports'},
      { name: 'خدمات الجمعية',router:'services'},
      { name: 'الفعاليات والانشطة',router:'activites'},
      { name: 'المركز الاعلامي',router:'media'},
      { name: 'سمعنا صوتك',router:'voice'},
    ]
  }

  ngOnInit(): void {
  }

}
