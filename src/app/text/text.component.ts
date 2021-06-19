import { Component, OnInit } from '@angular/core';
import * as toxicity from '@tensorflow-models/toxicity';
@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
  constructor() {}
  finalPredictions;

  ngOnInit(): void {
    console.log('on');

    // The minimum prediction confidence.
    const threshold = 0.9;

    // Which toxicity labels to return.
    const labelsToInclude = ['identity_attack', 'insult', 'threat','sexual_explicit'];

    toxicity.load(threshold, labelsToInclude).then((model) => {
      // Now you can use the `model` object to label sentences.
      model.classify(['you a fucking idiot']).then((predictions) => {
        console.log(predictions);
        this.finalPredictions = predictions;

      });
    });
  }
}
