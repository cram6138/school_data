import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-container-reserve-unreserve',
  templateUrl: './container-reserve-unreserve.component.html',
  styleUrls: ['./container-reserve-unreserve.component.css']
})
export class ContainerReserveUnreserveComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<any>;
  data = [
    {containerCode: 'reservedUsername', MROrderCode: 'Carbon', MRSource: 12.0107, fuzeReservationId: 'C',
    fuzeProjectId: 'reservedUsername', projectName: 'Carbon', PSProject: 12.0107, pslc: 'C',
    reservedUsername: 'reservedUsername', useByDate: 'Carbon', reservationCreationDate: 'reservationCreationDate', fuzeStatus: 'C',
    catsStatus: 'catsStatus', territory: 'territory', market: 'market', subMarket: 'subMarket', localMarket: 'localMarket',
    buyerId: 'buyerId', buyerName: 'buyerName'}
  ];
  displayedColumns: string[] = ['containerCode', 'MROrderCode', 'MRSource', 'fuzeReservationId',
          'fuzeProjectId', 'projectName', 'PSProject', 'pslc', 'reservedUsername',
          'useByDate', 'reservationCreationDate', 'fuzeStatus', 'catsStatus', 'territory',
          'market', 'subMarket', 'localMarket', 'buyerId', 'buyerName'];
  constructor() {
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }

}
