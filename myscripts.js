(function () {
    var selectors = [
           ".per_list_body",
           "#game_frs_head",
           ".worldcup_info_banner_wrap",
           "#j_worldcup_info_banner",
           ".j_worldcup_info_banner_wrap",
           ".worldcup_info_banner_show",
           "#lecai_lottery",
           "#game_rank",
           ".game_s",
           ".game_tab",
           ".BAIDU_CLB_AD",
           "spreadad spreadad_0001",
           "#tbmall_score_region",
           ".game_rank_title",
           ".game_rank_list",
           ".per_list.j_per_list.per_list_frs",
           ".lot_wrap",
           "#j_ten_years",
           ".dasense",
           "#aside_ad",
    ];

    selectors.forEach(RemoveBySelector);

    function RemoveBySelector(selector) {
        var elementlist = document.querySelectorAll(selector);
        for (var i = 0; i < elementlist.length; i++) {
            elementlist[i].style.display = "none";
        }

        console.log("test", selector, elementlist);
    }
}())
