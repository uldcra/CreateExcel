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
    textura:'',
    color:'',
    manchas:'',
    transporte:'',
    olor:'',
    pudedumbre:'',
    depCalidad:''
  }];

  materialForm=new FormGroup({
    fecha:new FormControl(this.fecha(),Validators.required),
    producto:new FormControl('',[Validators.required,Validators.minLength(4)]),
    Trazabilidad:new FormControl('',Validators.required),
    plage:new FormControl('',Validators.required),
    sabor:new FormControl('',Validators.required),
    textura:new FormControl('v'),
    color:new FormControl('v'),
    manchas:new FormControl('v'),
    transporte:new FormControl('v'),
    olor:new FormControl('v'),
    pudedumbre:new FormControl('v'),
    depCalidad:new FormControl('v'),
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
      textura:this.materialForm.controls.textura.value,
      color:this.materialForm.controls.color.value,
      manchas:this.materialForm.controls.manchas.value,
      transporte:this.materialForm.controls.transporte.value,
      olor:this.materialForm.controls.olor.value,
      pudedumbre:this.materialForm.controls.pudedumbre.value,
      depCalidad:this.materialForm.controls.depCalidad.value,
      
    }];
    this.excelService.exportAsExcelFile(this.product, 'sample');
  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(null, 'sample');
 }

 fecha(){
  let today = new Date();
  let dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  
  /*if(dd<10) {
      dd = '0'+dd
  } 
  
  if(mm<10) {
      mm = '0'+mm
  } */
  
  let myfecha = mm + '/' + dd + '/' + yyyy;
  myfecha=yyyy+'-'+mm + '-' + dd ;
  console.log(myfecha);
  return myfecha;
 }
}
