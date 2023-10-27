import { NavbarService } from 'src/app/services/navbar.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './trainer-filter.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormControl, FormGroup, Validators, isFormRecord } from '@angular/forms';
import { TrainingService } from '../services/training.service';
import { Training } from '../models/training.model';
import { TrainingSession } from '../models/training-session.model';
import { MatPaginator } from '@angular/material/paginator';









@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  trainings?: TrainingSession[];
  columns?: any[];
  dataSource?: any;
  displayedColumns?: any[];
  totalNoOfRows?: number;
  currentPage: number = 1;
  pageSize: number = 10;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  role: string = localStorage.getItem('role') || "";


  traineeFilter = new FormGroup({
    traineeUsername: new FormControl('', Validators.required),
    trainerUsername: new FormControl(),
    periodFrom: new FormControl(),
    periodTo: new FormControl(),
    trainingType: new FormControl()
  })

  trainerFilter = new FormGroup({
    trainerUsername: new FormControl('', Validators.required),
    traineeUsername: new FormControl('', Validators.required),
    periodFrom: new FormControl('', Validators.required),
    periodTo: new FormControl('', Validators.required),
  })



  constructor(public dialog: MatDialog, private trainingService: TrainingService
    ,private navbarService:NavbarService) {
  }
  ngOnInit(): void {
    console.log("TRAINING ROLE: " + this.role);
  
    this.navbarService.updateData(this.role);
    this.fetchTraining();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  fetchTraining(): void {
    if (this.role === "trainer") {
      this.trainingService.getAllTrainerTrainings(this.currentPage, this.pageSize).subscribe({
        next: (trainerTrainings: Training) => {
          this.trainings = trainerTrainings.content;
          this.totalNoOfRows = trainerTrainings.totalElements;
          console.log("Training:", this.trainings);
          this.columnMapping();
        }
      });
    }
    else if (this.role === "trainee") {
      this.trainingService.getAllTraineeTrainings(this.currentPage, this.pageSize).subscribe({
        next: (traineeTrainings: Training) => {
          this.trainings = traineeTrainings.content;
          this.totalNoOfRows = traineeTrainings.totalElements;
          console.log("Training:", this.trainings);
          this.columnMapping();
        }
      });
    }
  }

  onPageChange(event: any) {
    
    this.currentPage = this.paginator.pageIndex + 1;
    this.pageSize = this.paginator.pageSize;

    console.log('Current Page:', this.currentPage);
    console.log('Page Size:', this.pageSize);
    this.fetchTraining();

  }

  columnMapping(): void {
    this.columns = [
      {
        columnDef: 'Trainee',
        header: 'Trainee',
        cell: (element: TrainingSession) => `${element.traineeName}`,
      },
      {
        columnDef: 'Trainer',
        header: 'Trainer',
        cell: (element: TrainingSession) => `${element.trainerName}`,
      },
      {
        columnDef: 'Training Name',
        header: 'Training Name',
        cell: (element: TrainingSession) => `${element.trainingName}`,
      },
      {
        columnDef: 'Training Type',
        header: 'Training Type',
        cell: (element: TrainingSession) => `${element.trainingType}`,
      },
      {
        columnDef: 'Duration',
        header: 'Duration',
        cell: (element: TrainingSession) => `${element.trainingDuration}`,
      },
      {
        columnDef: 'Date',
        header: 'Date',
        cell: (element: TrainingSession) => `${element.trainingDate}`,
      },
    ];
    this.dataSource = new MatTableDataSource(this.trainings);
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}