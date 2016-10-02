import {Directive, ElementRef, Input} from '@angular/core';
declare var jQuery: any;
declare var Messenger: any;

@Directive ({
  selector: '[messenger-demo]'
})

export class MessengerDemo {
  $el: any;

  initializationCode(): void {
    (function(): void {
      let $, FlatMessage, spinner_template,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent): any { for (let key in parent) { if (__hasProp.call(parent, key)) { child[key] = parent[key]; } } function ctor(): void { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

      $ = jQuery;

      spinner_template = '<div class="messenger-spinner">\n    <span class="messenger-spinner-side messenger-spinner-side-left">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n    <span class="messenger-spinner-side messenger-spinner-side-right">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n</div>';

      FlatMessage = (function(_super): any {

        __extends(FlatMessage, _super);

        function FlatMessage(): any {
          /* tslint:disable */
          return FlatMessage['__super__'].constructor.apply(this, arguments);
          /* tslint:enable */
        }

        FlatMessage.prototype.template = function(opts): any {
          let $message;
          /* tslint:disable */
          $message = FlatMessage['__super__'].template.apply(this, arguments);
          /* tslint:enable */
          $message.append(jQuery(spinner_template));
          return $message;
        };

        return FlatMessage;
        /* tslint:disable */
      })(window['Messenger'].Message);

      window['Messenger'].themes.air = {
        Message: FlatMessage
      };
      /* tslint:enable */
    }).call(window);
  }

  render(): void {
    this.initializationCode();
    let theme = 'air';

    jQuery.globalMessenger({ theme: theme });
    Messenger.options = { theme: theme  };

    Messenger().post('Thanks for checking out Messenger!');

    let loc = ['bottom', 'right'];

    let $lsel = jQuery('.location-selector');

    let update = function(): void {
      let classes = 'messenger-fixed';

      for (let i = 0; i < loc.length; i++) { classes += ' messenger-on-' + loc[i]; }

      jQuery.globalMessenger({ extraClasses: classes, theme: theme  });
      Messenger.options = { extraClasses: classes, theme: theme };
    };

    update();

    $lsel.locationSelector()
      .on('update', (pos) => {
        loc = pos;

        update();
      });

    jQuery('#show-error-message').on('click', function(): boolean {
      let i;

      i = 0;

      Messenger().run({
        errorMessage: 'Error destroying alien planet',
        successMessage: 'Alien planet destroyed!',
        action: function(opts): any {
          if (++i < 3) {
            return opts.error({
              status: 500,
              readyState: 0,
              responseText: 0
            });
          } else {
            return opts.success();
          }
        }
      });

      return false;
    });

    jQuery('#show-info-message').on('click', function(): boolean {
      let msg = Messenger().post({
        message: 'Launching thermonuclear war...',
        actions: {
          cancel: {
            label: 'cancel launch',
            action: function(): any {
              return msg.update({
                message: 'Thermonuclear war averted',
                type: 'success',
                actions: false
              });
            }
          }
        }
      });

      return false;
    });

    jQuery('#show-success-message').on('click', function(): boolean {
      Messenger().post({
        message: 'Showing success message was successful!',
        type: 'success',
        showCloseButton: true
      });

      return false;
    });
  }

  ngOnInit(): void {
    this.render();
  }
}
