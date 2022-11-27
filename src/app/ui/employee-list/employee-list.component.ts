import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import {PersonModel} from "../../model/person.model";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  constructor(private _employeeService: EmployeeService) { }
  welcome: string = 'Hello world from property';
  data$: Observable<PersonModel[] | null> = this._employeeService.getAll();

  remove(id: string) {
    this._employeeService.delete(id).subscribe(() => {
      alert('User was successfully removed');
    });
  }
}
