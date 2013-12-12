# hub.me

Let me guess!

1. You're a lazy programmer.
2. You have a lot of cool projects here at Github.
3. You want to show the world all your open source stuff.

am I right? So guess what, I have the perfect thing to you.

Let me introduce you hub.me, an alternative and responsive gallery to display all your projects on Github.

## Why?

Discover it reading the history of my friend Clark Kent [here](https://gist.github.com/1385423). Portuguese version [here](https://gist.github.com/1385464).


## Getting Started

### Step 1:

Just fork this repository.

### Step 2:
Then you must change the repository name to `yourUsername.github.com`.

### Step 3:
Now you have to open the `index.html` and put your username on it.

    <script>
		$('body').hubMe({'username': 'yourUsername'});
	</script>

Easy, huh?

*Just remember that may take up to 10 minutes to Github activate pages for your account.

## Options

There are some nice features you can choose to create a even better gallery.

### Themes

If you want another appearance just tell the plugin.

	$('body').hubMe({ 'theme': 'black' });

For now you have 3 choices to customize it:

* blue (default)
* gray
* black

And, of course, you can create your own theme and then send to us :)

### Exclude

You don't want to display particular projects? Fine.

	$('body').hubMe({ 'exclude': ['wormz', 'cufon'] });

### Languages

You want the ability to hide the language sections? No problem.

	$('body').hubMe({ 'languages': false });

## Browser Support

We do care about it.

![IE](https://raw.github.com/paulirish/browser-logos/master/ie/ie_48x48.png) | ![Chrome](https://raw.github.com/paulirish/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/paulirish/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/paulirish/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/paulirish/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 9+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Credits

* jQuery plugin built with [jQuery Boilerplate](http://jqueryboilerplate.com/)
* Responsive design inspired by [Dinosaurs with Laserz](http://dinosaurswithlaserz.com/)

## License

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha
