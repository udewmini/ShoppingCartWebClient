import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { Component, OnInit } from '@angular/core';
import { NgAnalyzedFile } from '@angular/compiler';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private httpService : HttpClient) { }
  category : any[];
  ngOnInit() { this.httpService.get <any[]>('http://localhost:5000/api/getcategory').subscribe(
    Result=> {
      this.category = Result.data as any [];
      console.log(this.category);
    }
  );
  }

}


