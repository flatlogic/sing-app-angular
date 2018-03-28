import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
declare let jQuery: any;

@Directive({
  selector: '[bootstrap-calendar]'
})

export class BootstrapCalendarDirective implements AfterViewInit {
  $el: any;
  @Input() events: Array<any>;

  constructor(el: ElementRef) {
    this.$el = jQuery(el.nativeElement);
  }

  render(): void {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    const events = this.events;
    const $calendar = this.$el;
    $calendar.calendar({
      months: monthNames,
      days: dayNames,
      events: events,
      popover_options: {
        placement: 'top',
        html: true
      }
    });
    $calendar.find('.icon-arrow-left').addClass('fa fa-arrow-left');
    $calendar.find('.icon-arrow-right').addClass('fa fa-arrow-right');
    function restyleCalendar(): void {
      $calendar.find('.event').each(function(): void {
        const $this = jQuery(this),
          $eventIndicator = jQuery('<span></span>');
        $eventIndicator
          .css('background-color', $this.css('background-color'))
          .appendTo($this.find('a'));
        $this.css('background-color', '');
      });
    }
    $calendar.find('.icon-arrow-left, .icon-arrow-right').parent().on('click', restyleCalendar);
    restyleCalendar();
  }

  ngAfterViewInit(): void {
    this.render();
  }
}
