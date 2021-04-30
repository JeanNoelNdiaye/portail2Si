import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {MatDialogRef} from '@angular/material/dialog';
import {IProduit, Produit} from "../../model/produit.model";
import {ProduitService} from "../produit.service";

@Component({
  selector: 'app-produit-update',
  templateUrl: './produit-update.component.html',
  styleUrls: ['./produit-update.component.scss']
})
export class ProduitUpdateComponent implements OnInit {
  produit: Produit = new Produit();
  // contactForm: FormGroup;
  constructor(public produitService: ProduitService,
              private dialogRef: MatDialogRef<ProduitUpdateComponent>) { }

  ngOnInit(): void {
    // this.contactForm = new FormGroup({
    //   nom: new FormControl('',Validators.required),
    //   prenom:new FormControl('',Validators.required),
    //   email:new FormControl('',Validators.required),
    //   dateNaissance:new FormControl(''),
    //   tel:new FormControl(''),
    //   photo:new FormControl('')
    // })
  }

  saveProduit(produit: IProduit){
    this.produitService.create(produit).subscribe(result=>{
        if(result.ok ===true){
          // tslint:disable-next-line:no-console
          console.log("Saved");
        }
      }
    );
    // this.produitService.contactForm.reset();
    // this.produitService.initializeFormGroup();
    this.onClose();
  }
  onClear(){
    // this.service.contactForm.reset();
    // this.service.initializeFormGroup();
  }

  onClose(){
    // this.service.contactForm.reset();
    // this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
