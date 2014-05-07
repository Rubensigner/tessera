ds.templates.models.standard_time_series.dataHandler =
    function(query, item) {
        if (!item.interactive) {
            var element = $('#' + item.item_id + ' svg');
            var png_url = ds.charts.chart_url(item, {
                height: element.height(),
                width: element.width()
            });
            element.parent().html($('<img/>').attr('src', png_url).height(element.height()).width(element.width()));
        } else {
            var chart = ds.charts.standard_line_chart($("#" + item.item_id + ' .ds-graph-holder'), query.data, item.options);
        }
    };