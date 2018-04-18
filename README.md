# WYSIWYG Character Counter

A WordPress plugin that counts characters in the WYSIWYG editor.

## Why a character counter?

Currently there is no character counter for the WYSIWYG. Having one is helpful for 
editors and content creators.

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

Register the character counter.

```
> theme-folder/functions.php
```
```php
<?php 

use WCom\WYSIWYG\WYSIWYG;

WYSIWYG::registerCharacterCount();
```

> Why not just activate the plugin - which turns on the counter?
> 
> Good point. I'll decide in version 1.0.0 whether
> to automatically have character counting when the plugin is active.
> 
> Currently, the counter will work with the above code, even if the
> plugin is not active, which feels wrong.

## MU-Plugin Instead

If you want to turn it into a mu-plugin,
use a [WordPress Autoloader](https://github.com/ruslankhh/wp-mu-autoloader).

## Isn't there a Word Counter

Yes there is. However, whilst editorials require number of words, usually developers
restrict by number of characters.
