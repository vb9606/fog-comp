import { Component } from '@angular/core';

@Component({
  selector: 'app-article-listing',
  templateUrl: './article-listing.component.html',
  styleUrls: ['./article-listing.component.css']
})
export class ArticleListingComponent {
  public tabHeaderText : Object[] = [
    {text : 'Article Description'},
    {text : 'More from this author'}
  ];
  public tabContentText : string[] = [
      "DESCRIPTION TEXT",
      "MORE FROM THIS"
  ]
}
