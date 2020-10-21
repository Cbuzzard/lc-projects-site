import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit{
  
  @ViewChild('wrapper')
  wrapper;
  @ViewChild('rocketContainer')
  rocketContainer;
  @ViewChild('assignments')
  assignments;
  @ViewChild('logo')
  logo;
  @ViewChild('logoRocket')
  logoRocket;
  totalframes = 94;
  frame = 0
  timePerFrame = 30

  title = 'lc-projects-site';

  ngAfterContentInit(): void {
    this.runAnimation()
  }

  runAnimation() {
    this.frame++
    if (this. frame === 43) this.assignments.nativeElement.classList.add('assignments-move')
    setTimeout(()=>{
      this.frame < this.totalframes ? this.runAnimation() : this.openLogo();
    }, this.timePerFrame)
  }

  openLogo() {
    this.logo.nativeElement.classList.add('logo-open')
    this.logoRocket.nativeElement.classList.add('logo-rocket-move')
    this.wrapper.nativeElement.classList.add('scroll')
    this.rocketContainer.nativeElement.style.display = 'none'
    console.log(this.assignments)
  }

}
