import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonConstants } from '../../constants/common.constants';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  @Output() searchValue = new EventEmitter<string>();
  @Output() sortByValue = new EventEmitter<'name' | 'phone'>();

  public readonly COMMON_CONSTANTS = CommonConstants;
  public searchText = new FormControl('');
  public sortBy: 'name' | 'phone' = 'name';

  ngOnInit(): void {
    this.searchText.valueChanges.subscribe(val => 
      this.searchValue.emit(val ?? '')
    );
  }

  sortContacts() {
    this.sortByValue.emit(this.sortBy);
  }
}
