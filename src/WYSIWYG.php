<?php

namespace WCom\WYSIWYG;

/**
 * WYSIWYG class
 * @author Gemma Black <gblackuk@gmail.com>
 */
class WYSIWYG
{
    /**
     * Registers the wysiwyg script with the enqueued admin scripts
     * @return void
     */
    public static function registerCharacterCount()
    {
        add_action('admin_enqueue_scripts', function() {
            wp_enqueue_script('wysiwyg_char_counter', plugins_url('/../assets/wysiwyg-character-counter.js', __FILE__));
        });
    }
}
