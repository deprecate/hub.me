hub.me
==================================================
Version 0.1

Let me guess...

1. You're lazy
2. You want to show to everybody all your cool open source projects

am I right? So guess what, I have the perfect thing to you.

Let me introduce you hub.me, an alternative and responsive gallery to display all your projects on Github.


Getting Started
---------------

### Step 1: Fork
Go to [hub.me](https://github.com/zenorocha/hub.me)'s repository and fork it.

### Step 2: Name
Now you must change the repository name to `yourUsername.github.com`

### Step 3: Almost there
Then you have to open the `index.html` and change a single value on the bottom.

    <script>
		$('body').hubMe({'username': 'yourUsername'});
	</script>

### Step 4: Be happy
Finally, you just have to push it and see it on your browser.