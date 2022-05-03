import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';
import { LogService } from './log.service';
import { Pet } from './pet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private logService: LogService,
    private renderer: Renderer2,
    private host: ElementRef,
    private dataService: DataService
  ) {}

  title = 'angular-video-series';
  showText = false;
  todayDate = new Date();
  itemImageUrl = 'https://i2-prod.football.london/incoming/article16035546.ece/ALTERNATES/s1200c/0_GettyImages-493598683.jpg';
  itemImageWidth = '400';
  onSale = true;
  classOne = false;
  classTwo = true;
  fontSizePx = 16;
  firstExample = '';
  isSpecial = true;
  currentClasses = {};
  currentStyle = {};
  name = 'Fred';
  isActive: boolean = true;

  items = [
    { name: 'Joe'}, { name: 'Fred' }, { name: 'John' }
  ];

  item = { name: 'Barry' };

  types = ['fish', 'cat', 'dog'];
  petModel = new Pet(1, 'Goldie', this.types[0]);
  submitted = false;

  reactiveName = new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  myModel = {
    name: ''
  };

  validateForm = new FormGroup({
    name: new FormControl(this.myModel.name, [
      Validators.required,
      Validators.minLength(4)
    ])
  });


  user = { userName: '' };


  userName = new FormControl('', Validators.maxLength(10));


  userForm = new FormGroup({
    userName2: new FormControl(this.user.userName, [Validators.maxLength(10), Validators.minLength(3)])
  });


  get userName2() {
    return this.userForm.get('userName2');
  }


  

  get namename() {
    return this.validateForm.get('name');
  }


  docs: any;

  onProfileFormSubmit() {
    console.warn(this.profileForm.value);
  }

  updateName(name?: string) {
    this.reactiveName.setValue(name || 'Jenkins');
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.submitted);
  }

  toggleText(event: any): void {
    this.showText = !this.showText;
    console.log(event);
  }

  deleteItem(item: any) {
    console.log(item);
  }

  callPhone(phone: string) {
    console.log(phone);
  }

  setCurrentClasses() {
    this.currentClasses = {
      saveable: true,
      modified: false,
      special: true
    };
  }

  setCurrentStyle() {
    this.currentStyle = { 'font-style': 'italic', 'font-weight': 'bold' };
  }

  ngOnInit(): void {
      this.setCurrentClasses();
      this.setCurrentStyle();

      this.logService.logMessage('Hello this is my log service message');

      console.log(this.host.nativeElement);

      //this.renderer.setStyle(this.host.nativeElement, 'color', 'red');

    this.dataService.getData().subscribe((res) => {
      console.log(res);
    });

    this.dataService.getData2().subscribe((res) => {
      console.log(res);
      this.docs = res;
    });
  }
}
