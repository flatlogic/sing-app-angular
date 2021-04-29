import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { PEOPLE, tableData } from './tables-dynamic.data';
import { GridSizeChangedEvent } from 'ag-grid-community';
declare let jQuery: any;


@Component({
  selector: '[tables-dynamic]',
  templateUrl: './tables-dynamic.template.html',
})
export class TablesDynamicComponent implements OnInit {
  people: any[] = PEOPLE;
  peopleTemp: any[] = [...PEOPLE];

  @ViewChild(DatatableComponent, {static: true}) table: DatatableComponent;

  rows: Array<any> = [];
  columns: Array<any> = [
    {headerName: 'Name', field: 'name', sortable: true},
    {headerName: 'Position', field: 'position', sortable: true},
    {headerName: 'Office', field: 'office', sortable: true},
    {headerName: 'Extn.', field: 'ext', sortable: true},
    {headerName: 'Start date', field: 'startDate', sortable: true},
    {headerName: 'Salary ($)', field: 'salary', sortable: true}
  ];
  page: number = 1;
  itemsPerPage: number = 10;
  length: number = 0;

  config: any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: '', columnName: 'position'}
  };

  agGridTableData: Array<any> = tableData;

  private gridApi;
  private gridColumnApi;

  constructor() {
    this.length = this.agGridTableData.length;
  }

  ngOnInit(): void {
    const searchInput = jQuery('#table-search-input, #search-countries');
    searchInput
      .focus((e) => {
      jQuery(e.target).closest('.input-group').addClass('focus');
    })
      .focusout((e) => {
      jQuery(e.target).closest('.input-group').removeClass('focus');
    });
    this.onChangeTable(this.config);
  }

  changePage(page: any, data: Array<any> = this.agGridTableData): Array<any> {
    const start = (page.page - 1) * page.itemsPerPage;
    const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    const columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  changeFilter(data: any, config: any): any {
    if (!config.filtering) {
      return data;
    }

    const filteredData: Array<any> = data.filter((item: any) =>
      item[config.filtering.columnName].match(this.config.filtering.filterString));

    return filteredData;
  }

  onChangeTable(config: any, page: any = {page: this.page, itemsPerPage: this.itemsPerPage}): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }
    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    const filteredData = this.changeFilter(this.agGridTableData, this.config);
    const sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.peopleTemp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.people = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  }

  onGridSizeChanged(params: GridSizeChangedEvent) {
    this.gridApi.sizeColumnsToFit();
  }
}
