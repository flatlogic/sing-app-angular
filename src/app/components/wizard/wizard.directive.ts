import { Directive, ElementRef } from '@angular/core';
declare let jQuery: any;

@Directive ({
  selector: '[bootstrap-wizard]'
})

export class BootstrapWizard {
  $el: any;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  render(): void {
    this.$el.bootstrapWizard({
      onTabShow: ($activeTab, $navigation, index): void => {
        let $total = $navigation.find('li').length;
        let $current = index + 1;
        let $percent = ($current / $total) * 100;
        let $wizard = this.$el;
        $wizard.find('#bar').css({width: $percent + '%'});

        if ($current >= $total) {
          $wizard.find('.pager .next').hide();
          $wizard.find('.pager .finish').show();
          $wizard.find('.pager .finish').removeClass('disabled');
        } else {
          $wizard.find('.pager .next').show();
          $wizard.find('.pager .finish').hide();
        }

        // setting done class
        $navigation.find('li').removeClass('done');
        $activeTab.prevAll().addClass('done');
      },

      // validate on tab change
      onNext: function($activeTab, $navigation, nextIndex): boolean{
        let $activeTabPane = jQuery($activeTab.find('a[data-toggle=tab]').attr('href')),
          $form = $activeTabPane.find('form');

        // validate form in casa there is form
        if ($form.length) {
          return $form.parsley().validate();
        }
      },
      // diable tab clicking
      onTabClick: function($activeTab, $navigation, currentIndex, clickedIndex): boolean {
        return $navigation.find('li:eq(' + clickedIndex + ')').is('.done');
      }
    });
    if (this.$el.data('height')) {
      // setting fixed height so wizard won't jump
      this.$el.find('.tab-pane').css({height: this.$el.data('height')});
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {this.render();}, 100);
  }
}
