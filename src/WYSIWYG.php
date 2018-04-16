<?php

namespace WCom\WYSIWYG;

class WYSIWYG
{
    public static function registerCharacterCount()
    {
        add_action('admin_enqueue_scripts', function() {
            wp_enqueue_script('wysiwyg_char_counter', plugins_url(__DIR__) . '/../assets/wysiwyg-character-counter.js');
        });
    }
}