import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ExcelService } from 'src/app/services/excel.service';


@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  public product=[{
    fecha:'',
    producto:'',
    Trazabilidad:'',
    plage:'',
    sabor:'',
  }];

  materialForm=new FormGroup({
    fecha:new FormControl('',Validators.required),
    producto:new FormControl('',[Validators.required,Validators.minLength(4)]),
    Trazabilidad:new FormControl('',Validators.required),
    plage:new FormControl('',Validators.required),
    sabor:new FormControl('',Validators.required),
  });
  constructor(private excelService:ExcelService) { 
    
  }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.materialForm);
    this.product=[{
      fecha:this.materialForm.controls.fecha.value,
      producto:this.materialForm.controls.producto.value,
      Trazabilidad:this.materialForm.controls.Trazabilidad.value,
      plage:this.materialForm.controls.plage.value,
      sabor:this.materialForm.controls.sabor.value,
      
    }]
    this.excelService.exportAsExcelFile(this.product, 'sample');
  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(null, 'sample');
 }
}
