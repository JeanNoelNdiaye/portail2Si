import {Component, OnInit, ViewChild} from '@angular/core';
import {ProduitService} from "./produit.service";
import {ActivatedRoute, Data, ParamMap, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ProduitUpdateComponent} from "./produit-update/produit-update.component";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  searchKey: string;
  produitData: any;
  displayedColumns: string[] = ['id', 'libelle','description'];
  listData: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    protected produitService: ProduitService,
    protected activatedRoute: ActivatedRoute,
    protected router: Router,
    protected modalService: NgbModal,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.produitService.getCandidatures().subscribe((data) => {
      this.produitData = data;
      this.listData = new MatTableDataSource(this.produitData);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
      // this.dataSource = this.contactsData.content;
      // console.log(data)
      // this.iniDataSource();
      // this.onPaginateChange(this.pageEvent);
    });
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLocaleLowerCase();
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';

    this.dialog.open(ProduitUpdateComponent, dialogConfig);
  }

  onEdit(row){
    // this.produitService.populateForm(row);
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = '60%';

    // this.dialog.open(ProduitUpdateComponent, dialogConfig);
  }



}
