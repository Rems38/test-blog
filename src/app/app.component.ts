import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'blog';

  posts = [ {
  title: 'hello World',
  content: 'salut, je me sers de ce blog pour vous dire bonjour',
  loveIts: 17,
  created_at: new Date('December 24, 2000 23:59:00')
},
{
  title: 'coucou',
  content: 'cava?',
  loveIts: -5,
  created_at: new Date('December 28, 2000 23:59:00')
},
{
  title: 'hahahah',
  content: 'je vous embete tous !!!!!',
  loveIts: -50,
  created_at: new Date('December 1, 2008 23:59:00')
}
]

}
