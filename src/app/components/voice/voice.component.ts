import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.scss']
})
export class VoiceComponent implements OnInit {
  opinionTap = false;
  complaintsTap = false;
  contactUsTap = true;
  taps = []
  constructor() {
    this.taps = [
      { title: 'شكاوي واقتراحات', name: 'complaintsTap', active: this.complaintsTap },
      { title: 'استطلاع رأي', name: 'opinionTap', active: this.opinionTap },
      { title: 'اتصل بنا', name: 'contactUsTap', active: this.contactUsTap }
    ]
  }

  ngOnInit(): void {
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
