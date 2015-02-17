$(function() {
  $('body').on('click', '[data-dismiss="tab"]', function(e) {
    var $tab = $(this).closest('[data-toggle="tab"]');
    
    if ($tab.length) {
      var target = $tab.attr('href') || $tab.attr('data-target');
      if (target) {
        var $tabs = $tab.closest('.nav-tabs');
        
        $(target).remove();
        $tab.remove();
        
        $tabs.find('[data-toggle="tab"]').first().tab('show');
        
        $tabs.trigger('removed.bs.tab');
    
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }
  });
});