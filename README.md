# WYSIWYG Character Counter

This is WordPress plugin counts WYSIWYG editor characters.

## Why a character counter?

Currently this is no character counter for the TinyMCE editor,
also known as the WYSIWYG in WordPress. It does however count
words. Having both, is helpful though, to editors and content
creators.

## Pre-requisites

* Composer

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

Activate it by registering the character counter. This is simply
a javascript file that counts characters as users types, or
redos, undos and copy-pastes text.

```php
WYSIWYG::registerCharacterCount();
```

## MU-Plugin Instead

If you want to turn it into a mu-plugin,
you can use a [WordPress Autoloader](https://github.com/ruslankhh/wp-mu-autoloader).