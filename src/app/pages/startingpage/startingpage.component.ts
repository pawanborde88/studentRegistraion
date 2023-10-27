import { Component } from '@angular/core';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-startingpage',
  templateUrl: './startingpage.component.html',
  styleUrls: ['./startingpage.component.css']
})
export class StartingpageComponent {
  loading: boolean = false;

    load() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false
        }, 2000);
    }

}
