import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private changeDetectorRef: ChangeDetectorRef) { }
  clickCount1: number = 0;
  /** リンク活性化フラグ */
  disabledAnchor1: boolean = false;
  get styles1(): any {
    return {
      'pointer-events': this.disabledAnchor1 ? 'none' : 'auto'
    };
  }

  clickCount2: number = 0;
  /** リンク活性化フラグ */
  disabledAnchor2: boolean = false;
  get styles2(): any {
    return {
      'pointer-events': this.disabledAnchor2 ? 'none' : 'auto'
    };
  }

  clickCount3: number = 0;
  /** リンク活性化フラグ */
  disabledAnchor3: boolean = false;
  get styles3(): any {
    return {
      'pointer-events': this.disabledAnchor3 ? 'none' : 'auto'
    };
  }

  click1() {
    // 二重サブミット制御設定
    this.disabledAnchor1 = true;
    this.changeDetectorRef.detectChanges();
    this.clickCount1++;
  }

  click2() {
    // 二重サブミット制御設定
    this.disabledAnchor2 = true;
    this.changeDetectorRef.detectChanges();
    this.clickCount2++;
  }

  click3() {
    // 二重サブミット制御設定
    this.disabledAnchor3 = true;
    this.changeDetectorRef.detectChanges();
    this.clickCount3++;
  }

  reset() {
    this.disabledAnchor1 = false;
    this.disabledAnchor2 = false;
    this.disabledAnchor3 = false;
    this.clickCount1 = 0;
    this.clickCount2 = 0;
    this.clickCount3 = 0;
  }
}
