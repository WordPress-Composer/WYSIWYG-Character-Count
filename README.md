# WYSIWYG Character Counter

A WordPress plugin that counts characters in the WYSIWYG editor.

## Why a character counter?

Currently this is no character counter for the WYSIWYG editor.
It does however count words. Having both a word and character counter 
is helpful though, to editors and content creators.

## Pre-requisites

* Composer
* Composer wordpress-plugin custom install directory [configured](https://github.com/composer/installers)
* [WordPress Installation](https://github.com/gemmadlou/WordPress-Composer-Starter)

## Setup

```json
{
    "require": {
        "wpcomposer/wysiwyg-character-count" : "0.*"
    }
}
```

```
composer require wpcomposer/wysiwyg-character-count
```

## Usage

1) Go to the WordPress admin dashboard. Access the plugins admin. [Activate](https://codex.wordpress.org/Managing_Plugins) the plugin.

2) Register the character counter.

```
> theme-folder/functions.php
```
```php
<?php 

use WCom\WYSIWYG\WYSIWYG;

WYSIWYG::registerCharacterCount();
```

> Why activate the plugin - and then register the counter?
> 
> Good point. I'll decide in version 1.0.0 whether
> to automatically have character counting when the plugin is active.

## MU-Plugin Instead

If you want to turn it into a mu-plugin,
use a [WordPress Autoloader](https://github.com/ruslankhh/wp-mu-autoloader).
