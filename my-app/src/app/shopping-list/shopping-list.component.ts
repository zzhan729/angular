import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { ShoppingListDataSource, ShoppingListItem } from './shopping-list-datasource';
import {ShoppingListService} from '../service/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<ShoppingListItem>;
  dataSource: ShoppingListDataSource;

  constructor(private shoppingListService:ShoppingListService){}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name','price','button'];

  ngOnInit() {
    this.shoppingListService.getList()
  .subscribe(list=>{
    console.log(list);
  });
    this.dataSource = new ShoppingListDataSource(this.shoppingListService);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  addCart(id: any,name: any,price: any){
    console.log(id,name,price);
  }
    

  }
