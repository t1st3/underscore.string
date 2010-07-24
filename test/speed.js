(function() {

  var numbers = [];
  for (var i=0; i<1000; i++) numbers.push(i);
  var objects = _.map(numbers, function(n){ return {num : n}; });
  var randomized = _.sortBy(numbers, function(){ return Math.random(); });

  JSLitmus.test('trimNoNative', function() {
    return _.trim("  foobar  ", " ");
  });

  JSLitmus.test('trim', function() {
    return _.trim("  foobar  ");
  });

  JSLitmus.test('trim object-oriented', function() {
    return _("  foobar  ").trim();
  });

  JSLitmus.test('trim jQuery', function() {
    return jQuery.trim("  foobar  ");
  });

  JSLitmus.test('ltrimp', function() {
    return _.ltrim("  foobar  ", " ");
  });

  JSLitmus.test('rtrimp', function() {
    return _.rtrim("  foobar  ", " ");
  });

  JSLitmus.test('_.startsWith("foobar", "foo")', function() {
    return _.startsWith("foobar", "foo");
  });


  JSLitmus.test('_.startsWith("foobar", "xx")', function() {
    return _.startsWith("foobar", "xx");
  });
  
  JSLitmus.test('supplant', function(){
    var data = { name: 'Jessy' };
    return _('My name is {name}').supplant(data);
  });
  
  JSLitmus.test('chop', function(){
    return _('whitespace').chop(2);
  });

  JSLitmus.test('count', function(){
    return _('Hello worls').count('l');
  });
  
  JSLitmus.test('squeeze', function() {
    return _('  Hello    cruel  world   ').squeeze();
  });
})();