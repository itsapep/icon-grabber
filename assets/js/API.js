import { app } from 'google-play-scraper';

app({appId: 'com.google.android.apps.translate'})
  .then(console.log, console.log);