import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/core/models/IContact';
import { ContactsServices } from 'src/app/core/services/contacts.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddModalComponent } from 'src/app/components/add-modal/add-modal.component';
import { CommonModelService } from 'src/app/core/services/CommonModelService';
@Component({
  selector: 'app-slash',
  templateUrl: './slash.component.html',
  styleUrls: ['./slash.component.scss']
})
export class SlashComponent implements OnInit {

  potentialValueList: IContact[] = [];
  focusList: IContact[] = [];
  contactMadeList: IContact[] = [];
  offerSent:IContact[]=[];
  gettingReady:IContact[]=[];
  loadedData: boolean = false;
  constructor(private ContactsApi: ContactsServices, 
    private snackBar: MatSnackBar, 
    private dialog: MatDialog,
    private commModel: CommonModelService) {

  }

  ngOnInit(): void {
    this.getAllContacts();

  }

  getAllContacts() {
    this.loadedData = true;
    this.ContactsApi.getAllContacts().subscribe(res => {
      if (res && res.deals) {
        res.deals.map((element: IContact) => {
          if (element.status === "Potential Value") {
            this.potentialValueList.push(element);
          } else if (element.status === "Focus") {
            this.focusList.push(element);
          } else if (element.status === "Contact Made") {
            this.contactMadeList.push(element);
          }
          else if (element.status === "Offer Sent") {
            this.offerSent.push(element);
          }
          else if (element.status === "Getting Ready") {
            this.gettingReady.push(element);
          }
        })
        this.loadedData = false;
      }

    }, err => {
      this.SnackBar(err);
      this.loadedData = false;
    })
  }

  SnackBar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 4000,
      panelClass: ['white-snackbar']
    });
  }

 

  drop(event: CdkDragDrop<IContact[]>, mode: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      event.container.data[event.currentIndex].status = mode;
    }



  }

  openDialog(): void {
    this.commModel.openDialog().subscribe(data => {
      if(data){
        this.potentialValueList.push(data);
        this.SnackBar("Added Successfully");
      }
    });
  }



}
