import {Component, OnInit, ViewChild} from '@angular/core';
import * as html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
  @ViewChild('pdfTemplate') pdfTemplate;

  testArray = [1, 2, 4, 5];

  constructor() {
  }

  ngOnInit() {
    console.log(this.testArray.includes(3));
  }

  // 导出 pdf
  exportPdf() {


    const options = {
      width: 100,
      height: 100
    };


    console.log(this.pdfTemplate.nativeElement);
    html2canvas(this.pdfTemplate.nativeElement).then((canvas) => {
      const pdf = new jsPDF('', 'pt', 'a4'); // pdf 实例
      const canvasDataURL = canvas.toDataURL('image/jpeg', 1.0); // 返回图片dataURL，参数：图片格式和清晰度(0-1)

      // pdf.setFontSize(10);

      pdf.addImage(canvasDataURL, 'JPEG', 0, 0, 595.28, 592.28 / canvas.width * canvas.height);

      pdf.save('stone.pdf');
    });

  }
}
