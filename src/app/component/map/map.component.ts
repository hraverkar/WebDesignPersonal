import { Component, Input, OnInit } from '@angular/core';
import { CoordinateConverter, EditActions, PolygonEditorObservable, PolygonEditUpdate, PolygonsEditorService } from 'angular-cesium';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public editing$: PolygonEditorObservable;
  public enableEditing: true;

  ngOnInit(): void {
  }

  constructor(private polygonEditor: PolygonsEditorService) { }

  startDraw() {

    if(this.editing$){
      this.stopEdit();
    }
    this.editing$ = this.polygonEditor.create();
    this.editing$.subscribe((editUpdate: PolygonEditUpdate) => {
      console.log(editUpdate.points);
      console.log(editUpdate.positions);
      console.log(editUpdate.updatedPosition);
    });
  }

  public stopEdit(){
    if(this.editing$){
      this.editing$.dispose();
      this.editing$ = undefined;
    }
  }
}
