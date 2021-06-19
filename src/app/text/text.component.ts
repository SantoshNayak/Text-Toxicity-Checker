import { Component, OnInit } from '@angular/core';
import * as toxicity from '@tensorflow-models/toxicity';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
  constructor(public uiLoader: NgxUiLoaderService) {}
  finalPredictions;
  textToAnalyze:string = 'you a fucking idiot';

  Measuring ='Measuring';

  ngOnInit(): void {
    // this.uiLoader.start();

    console.log('on');

  }

  analyseText(){
    console.log('on');

    this.uiLoader.start();
    // The minimum prediction confidence.
    const threshold = 0.9;

    // Which toxicity labels to return.
    const labelsToInclude = ['identity_attack', 'insult', 'threat','sexual_explicit'];

    toxicity.load(threshold, labelsToInclude).then((model) => {
      this.uiLoader.stop();

      // Now you can use the `model` object to label sentences.
      model.classify([this.textToAnalyze]).then((predictions) => {
        console.log(predictions);
        this.finalPredictions = predictions;

      });
    });
  }
}
