import { Component, OnInit } from '@angular/core';
import { CustomHttpResponse } from './interface/httpRespone';
import { Patient } from './interface/patient';
import { PatientService } from './service/patient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  httpResponse: CustomHttpResponse | undefined;
  patients: Patient[] | undefined;
  
  constructor(private patientService: PatientService) {}


  ngOnInit(): void {
    this.patientService.getPatients().subscribe(
      response => {
        this.httpResponse = response;
        this.patients = response.data;
        console.log(response);
      },
      error => console.log(error)
    );
  }
}