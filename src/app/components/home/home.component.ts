import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  activites=[];
  partners=[];
  constructor() { 
    this.activites =[
      { image:'../../../assets/images/1.jpg',alt:'1',button:'مهرجان كان يا مكان لاحياء التراث الوطني بحضور رئيس اكادمية الشعر العربي'},
      { image:'../../../assets/images/3.jpg',alt:'3',button:'حملة معا ضد الصرع'},
      { image:'../../../assets/images/2.jpg',alt:'1',button:'يعلن معهد اليقظة عن بدء التسجيل في دوره اسرار وفنون المكياج للميك اب ارتيست'},
    ];

    this.partners=[
      {image:'../../../assets/images/partner1.jpg',alt:'partner1'},
      {image:'../../../assets/images/partner2.jpeg',alt:'partner2'},
      {image:'../../../assets/images/partner3.jpeg',alt:'partner3'},
    ]

  }

  ngOnInit(): void {
     window.scrollTo(0, 0)
  }

}
