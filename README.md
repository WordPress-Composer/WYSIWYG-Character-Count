# WYSIWYG Character Counter

A WordPress plugin that counts characters in the WYSIWYG editor.

## Why a character counter?

Currently this is no character counter for the WYSIWYG editor.
It does however count words. Having both a word and character counter 
is helpful though, to editors and content creators.

## Pre-requisites

* Composer
* WordPress Install

## Installation

```json
{
    "wpcomposer/wysiwyg-character-count" : "0.*"
}
```

```
composer require wpcomposer/wysiwyg-character-count
```

## Usage

Activate it by registering the character counter.

```
> theme-folder/functions.php
```
```php
<?php 

use WCom\WYSIWYG\WYSIWYG;

WYSIWYG::registerCharacterCount();
```

## MU-Plugin Instead

If you want to turn it into a mu-plugin,
use a [WordPress Autoloader](https://github.com/ruslankhh/wp-mu-autoloader).
