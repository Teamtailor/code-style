export default function() {
  // Add your transitions here, like:
  //   this.transition(
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   );

  this.transition(
    this.fromRoute('language.index'),
    this.toRoute('language.content'),
    this.use(
      'explode',
      {
        matchBy: 'data-content-id',
        use: ['fly-to', { duration: 300, easing: 'slide' }],
      },
      {
        use: ['fade', { duration: 100 }],
      }
    ),
    this.reverse(
      'explode',
      {
        matchBy: 'data-content-id',
        use: ['fly-to', { duration: 300, easing: 'slide' }],
      },
      {
        use: ['fade', { duration: 100 }],
      }
    )
  );
}
