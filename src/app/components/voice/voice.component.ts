import { Component, OnInit } from '@angular/core';
import{GeoLocationService} from '../../../shared/services/geo-location.service'
@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.scss']
})
export class VoiceComponent implements OnInit {
  coordinates;
  opinionTap = false;
  complaintsTap = false;
  contactUsTap = true;
  taps = []
  contacts=[];

  constructor(private geoLocationService :GeoLocationService) {

    this.taps = [
      { title: 'شكاوي واقتراحات', name: 'complaintsTap', active: this.complaintsTap },
      { title: 'استطلاع رأي', name: 'opinionTap', active: this.opinionTap },
      { title: 'اتصل بنا', name: 'contactUsTap', active: this.contactUsTap }
    ];

    this.contacts=[
      {name:'طريق عبد الله بن زمعة -الؤياض- المملكة العربية السعودية',icon:'fas fa-phone-alt'},
      {name:'0122223565',icon:'fas fa-phone-square-alt'},
      {name:'05596874521',icon:'fas fa-phone-alt'},
      {name:'055589526',icon:'fab fa-whatsapp-square'},
      {name:'yakaza.hr@hmail.com',icon:'fas fa-envelope	'},
    ]
  }

  ngOnInit(): void {
    this.geoLocationService.getPosition().subscribe(
      (pos: Position) => {
          this.coordinates = {
            latitude:  +(pos.coords.latitude),
            longitude: +(pos.coords.longitude)
          };
      });
  }

  changeTap(tap) {
    if (tap.name == 'complaintsTap') {
      this.complaintsTap = true;
      this.opinionTap = false;
      this.contactUsTap = false;
      this.makeTapActive(tap.name)
    } else if (tap.name == "opinionTap") {
      this.opinionTap = true;
      this.complaintsTap = false;
      this.contactUsTap = false;
      this.makeTapActive(tap.name)
    } else {
      this.contactUsTap = true;
      this.opinionTap = false;
      this.complaintsTap = false;
      this.makeTapActive(tap.name)
    }
  }

  makeTapActive(name){
  this.taps.map(tap=>{
    tap.active=false
    if(tap.name == name) {
      tap.active = true;
    }
  })
  }

}
