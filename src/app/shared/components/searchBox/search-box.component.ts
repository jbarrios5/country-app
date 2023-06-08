import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'shared-search-box',
    templateUrl: './search-box.component.html'
})

export class SearchBoxComponent {
    @Input()
    public placeholder:string = 'adsf';

    @Output()
    onValue:EventEmitter<string> = new EventEmitter();

    @ViewChild('txtSearchInput')
    public tagInput!: ElementRef<HTMLButtonElement>

    constructor() { }

    emitSearchValue():void{
        this.onValue.emit(this.tagInput.nativeElement.value);
        this.tagInput.nativeElement.value = '';
        
    }
}