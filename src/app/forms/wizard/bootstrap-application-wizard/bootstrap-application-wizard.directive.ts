import { Directive, ElementRef } from '@angular/core';
declare let jQuery: any;
declare let Tether: any;

@Directive ({
  selector: '[bootstrap-application-wizard]'
})

export class BootstrapApplicationWizard {
  $el: any;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
    /* tslint:disable */
    (<any>window).validateServerLabel = function(el) {
      let name = el.val();
      let retValue = {};

      if (name === '') {
        retValue['status'] = false;
        retValue['msg'] = 'Please enter a label';
      } else {
        retValue['status'] = true;
      }

      return retValue;
    };

    (<any>window).validateFQDN = function(el) {
      let $this = jQuery(el);
      let retValue = {};

      if ($this.is(':disabled')) {
        // FQDN Disabled
        retValue['status'] = true;
      } else {
        if ($this.data('lookup') === 0) {
          retValue['status'] = false;
          retValue['msg'] = 'Preform lookup first';
        } else {
          if ($this.data('is-valid') === 0) {
            retValue['status']= false;
            retValue['msg'] = 'Lookup Failed';
          } else {
            retValue['status'] = true;
          }
        }
      }

      return retValue;
    };
    /* tslint:enable */
  }

  lookup(): void {
    // Normally a ajax call to the server to preform a lookup
    jQuery('#fqdn').data('lookup', 1);
    jQuery('#fqdn').data('is-valid', 1);
    jQuery('#ip').val('127.0.0.1');
  }

  render(): void {
    let wizard = this.$el.wizard({
      keyboard : false,
      contentHeight : 400,
      contentWidth : 700,
      backdrop: 'static'
    });

    jQuery('#fqdn').on('input', function() {
      if (jQuery(this).val().length !== 0) {
        jQuery('#ip').val('').attr('disabled', 'disabled');
        jQuery('#fqdn, #ip').parents('.form-group').removeClass('has-error has-success');
      } else {
        jQuery('#ip').val('').removeAttr('disabled');
      }
    });

    jQuery('#btn-fqdn').find('button').on('click', this.lookup);
    /* tslint:disable */
    let pattern = /\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;
    let x = 46;
    /* tslint:enable */
    jQuery('#ip').on('input', () => {
      if (jQuery(this).val().length !== 0) {
        jQuery('#fqdn').val('').attr('disabled', 'disabled');
      } else {
        jQuery('#fqdn').val('').removeAttr('disabled');
      }
    }).keypress(function(e): boolean {
      if (e.which !== 8 && e.which !== 0 && e.which !== x && (e.which < 48 || e.which > 57)) {
        console.log(e.which);
        return false;
      }
    }).keyup(function(): void {
      let $this = jQuery(this);
      if (!pattern.test($this.val())) {
        // jQuery('#validate_ip').text('Not Valid IP');
        console.log('Not Valid IP');
        $this.parents('.form-group').removeClass('has-error has-success').addClass('has-error');
        while ($this.val().indexOf('..') !== -1) {
          $this.val($this.val().replace('..', '.'));
        }
        x = 46;
      } else {
        x = 0;
        let lastChar = $this.val().substr($this.val().length - 1);
        if (lastChar === '.') {
          $this.val($this.val().slice(0, -1));
        }
        let ip = $this.val().split('.');
        if (ip.length === 4) {
          // jQuery('#validate_ip').text('Valid IP');
          console.log('Valid IP');
          $this.parents('.form-group').removeClass('has-error').addClass('has-success');
        }
      }
    });

    wizard.on('closed', () => {
      wizard.reset();
    });

    wizard.on('reset', () => {
      wizard.modal.find(':input').val('').removeAttr('disabled');
      wizard.modal.find('.form-group').removeClass('has-error').removeClass('has-succes');
      wizard.modal.find('#fqdn').data('is-valid', 0).data('lookup', 0);
    });

    wizard.on('submit', function(wizardItem): void {
      let submit = {
        'hostname': jQuery('#new-server-fqdn').val()
      };

      this.log('seralize()');
      this.log(this.serialize());
      this.log('serializeArray()');
      /* tslint:disable */
      this.log(this['serializeArray']());
      /* tslint:enable */

      setTimeout(() => {
        wizardItem.trigger('success');
        wizardItem.hideButtons();
        wizardItem._submitting = false;
        wizardItem.showSubmitCard('success');
        wizardItem.updateProgressBar(0);
      }, 2000);
    });

    wizard.el.find('.wizard-success .im-done').click(() => {
      wizard.hide();
      setTimeout(() => {
        wizard.reset();
      }, 250);

    });

    wizard.el.find('.wizard-success .create-another-server').click(() => {
      wizard.reset();
    });
    /* tslint:disable */
    wizard.el.find('.wizard-progress-container').empty()
      .append('<div class="bg-gray-lighter progress progress-xs"><div class="progress-bar bg-primary progress-xs" style="width: 0%"></div></div>');
    /* tslint:enable */
    wizard.progress = wizard.modal.find('progress');

    jQuery('.wizard-group-list').click(() => {
      window.alert('Disabled for demo.');
    });

    jQuery('#open-wizard').click((e) => {
      e.preventDefault();
      wizard.show();
      wizard.errorPopover = function(el, msg, allowHtml): void {
        this.log('launching popover on', el);
        allowHtml = typeof allowHtml !== 'undefined' ? allowHtml : false;
        let popover = el.popover({
          content: msg,
          trigger: 'manual',
          html: allowHtml,
          container: el.parents('.form-group')
        }).addClass('error-popover').popover('show').next('.popover');

        el.parents('.form-group').find('.popover').addClass('error-popover');
        jQuery('.popover-title').css('display', 'none');
        jQuery('.popover').addClass('popover-body-error');
        jQuery('.popover-content').addClass('popover-content-error');
        jQuery('.popover-arrow').addClass('popover-arrow-error');
        Tether.position();
        /* tslint:disable */
        this['popovers'].push(el);
        /* tslint:enable */
        return popover;
      };
      jQuery('.dropdown-menu > li > a').addClass('dropdown-item');
    });

    wizard.el.find('.wizard-nav-list').addClass('flex-column');
    wizard.el.find('.wizard-close').addClass('flex-last');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {this.render();}, 100);
  }
}
