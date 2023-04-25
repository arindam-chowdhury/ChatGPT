import { Component, Input, OnChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChatGptService } from '../core/services/chat-gpt.service';
import { LodderService } from '../core/services/lodder.service';

@Component({
  selector: 'app-chat-gpt-search',
  templateUrl: './chat-gpt-search.component.html',
  styleUrls: ['./chat-gpt-search.component.css']
})
export class ChatGptSearchComponent implements OnChanges {
  isSubmit: boolean = false;
  result!: string;
  loading$ = this.loader.loading$;
  loading: boolean = false;
  keywords!: string;
  isSearch: boolean = false;

  constructor(private chatGptService: ChatGptService,
    private _snackBar: MatSnackBar,
    private loader: LodderService) { }

  ngOnChanges(): void {
    if (this.isSearch)
      this.search(this.keywords);
  }

  search(event: string): void {
    // alert("Calling form ChatGpt" + event);
    let requestData = {
      model: "text-davinci-003",
      prompt: event,
      max_tokens: 1000,
      temperature: 0.7
    };
    this.loader.show();
    this.loading = true;
    this.chatGptService.getchatGptResult(requestData).subscribe({
      next: (res) => {
        this.loader.hide();
        this.loading = false;
        this.isSubmit = true;
        // console.log(res.choices[0].text);
        this.result = res.choices[0].text;
        this.keywords = "";
      },
      error: (err) => {
        this.loading = false;
        this._snackBar.open("Something went wrong", "close", {
          horizontalPosition: "right",
          verticalPosition: "top"
        });
        this.keywords = "";
      }
    });
  }
}
