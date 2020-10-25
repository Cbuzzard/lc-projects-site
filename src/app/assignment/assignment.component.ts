import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { assignments, assignment } from '../../assignments'

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AssignmentComponent implements OnInit, AfterViewInit{

  @ViewChild('cardContainer')
  cardContainer;
  selectedSort = 'demo';
  assignments: Array<assignment> = [...assignments].sort((a, b) => a.demoOrder - b.demoOrder);

  constructor() { }

  ngAfterViewInit(): void {
    this.setAssignments()
    this.setBackgrounds()
  }

  ngOnInit(): void {
  }

  setAssignments() {
    const assignmentsTemp = assignments;
    this.assignments = this.selectedSort === "demo" ? [...assignments].sort((a, b) => a.demoOrder - b.demoOrder) : assignments;
  }

  setBackgrounds() {
    let i = 1;
    for (let el of this.cardContainer.nativeElement.children) {
      el.children[0].style.backgroundImage = `url(../../assets/galaxy_background_${i}.png)`
      i === 5 ? i = 1 : i++;
    }
  }
 
}
