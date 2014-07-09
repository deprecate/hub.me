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

```html
<script>
    $('body').hubMe({'username': 'yourUsername'});
</script>
```

Easy, huh?

*Just remember that may take up to 10 minutes to Github activate pages for your account.

## Options

There are some nice features you can choose to create a even better gallery.

### Themes

If you want another appearance just tell the plugin.

```js
$('body').hubMe({ 'theme': 'black' });
```

For now you have 3 choices to customize it:

* blue (default)
* gray
* black

And, of course, you can create your own theme and then send to us :)

### Exclude

You don't want to display particular projects? Fine.

```js
$('body').hubMe({ 'exclude': ['wormz', 'cufon'] });
```

### Languages

You want the ability to hide the language sections? No problem.

```js
$('body').hubMe({ 'languages': false });
```

## Browser Support

We do care about it.

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | --- |
IE 9+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Credits

* jQuery plugin built with [jQuery Boilerplate](http://jqueryboilerplate.com/)
* Responsive design inspired by [Dinosaurs with Laserz](http://dinosaurswithlaserz.com/)

## License

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha
