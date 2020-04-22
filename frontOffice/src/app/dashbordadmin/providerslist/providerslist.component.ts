import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-providerslist',
  templateUrl: './providerslist.component.html',
  styleUrls: ['./providerslist.component.css']
})
export class ProviderslistComponent implements OnInit {
providers: any;
  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    console.log('bnjr')
    this.providerService.getProviders()
    .subscribe(data=>{
      console.log(data)
      this.providers = data
    })
  }
  ondelete(id){
    console.log(id)
    this.providerService.deleteProvider(id).subscribe(data=>{
     console.log(data)
     
    })
  }
}
