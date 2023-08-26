import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  getAllLanguages: any;
  selectedLanguages: string = 'englishLang'

  languages = ['tamilLang', 'englishLang', 'hindiLang'];
  constructor(public service: ServiceService) { }
  ngOnInit(): void {

    this.service.getLanguage().subscribe((data) => {
      this.getAllLanguages = data
      console.log(data, "data check")
      console.log(this.languages, "lang")

    })

  }
  getValue(key: string): string {
    console.log(key, "key check")
    const entry = this.getAllLanguages.find(
      (item: { keys: string }) => item.keys === key
    );
    return entry ? entry[this.selectedLanguages] : '';
  }
  switchLang(lang: any) {
    console.log(lang, "lang check")
    this.selectedLanguages = lang;
  }
 
}
