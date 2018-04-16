/**
 * WYSIWYG character counter for WordPress
 * First iteration unfortunately involves listening for a jQuery
 * event. There doesn't appear to be another way without creating adding
 * functionality to tinymce
 * 
 * @link https://amystechnotes.com/2015/05/06/tinymce-add-character-count/
 */


;(function() {
    if (typeof jQuery === 'undefined') {
        return;
    }

    var $ = jQuery;
    
    var contentLength = function(editor) {
        return stripHtml(editor.getContent()).length;
    }

    var stripHtml = function(html) {
        var temporalDivElement = document.createElement("div");
        temporalDivElement.innerHTML = html;
        return temporalDivElement.textContent || temporalDivElement.innerText || "";
    }

    $(function() {
        $(document).on('tinymce-editor-init', function(event, editor) {
            try {
                var parent = editor.getContainer().parentNode;

                let statusbar = editor.theme.panel && editor.theme.panel.find('#statusbar')[0];
                
                statusbar.insert({
                    type: 'label',
                    name: 'charactercount',
                    text: ['Characters: {0}', contentLength(editor)],
                    classes: 'charactercount',
                    disabled: editor.settings.readonly,
                    style: 'font-size: 12px'
                }, 0);

                editor.on('keyup undo redo paste', function() {
                    editor.theme.panel
                        .find('#charactercount')
                        .text(['Characters: {0}', contentLength(editor)]);
                });

            } catch (e) {
                console.log('Character counting is broken');
                console.warn(e);
                return;
            }
        });
    });
    
})();