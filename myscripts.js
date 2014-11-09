function init(document) {
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
       ".spreadad",
       "#tbmall_score_region",
       ".game_rank_title",
       ".game_rank_list",
       ".per_list.j_per_list.per_list_frs",
       ".lot_wrap",
       "#j_ten_years",
       ".dasense",
       "#aside_ad",
	   "#j_ten_years",
	   ".clearfix BAIDU_CLB_AD BAIDU_CLB_AD_pb",
	   ".l_post_bright dasense dasense_0101 clearfix",
	   "clearfix dasense dasense_0001",
	   ".clearfix BAIDU_CLB_AD BAIDU_CLB_AD_frs",
	   "bdyx_tips_title_",
	   "tenYearsWrap",
	   "firework_sender_wrap"
    ],
        
    SELECTOR_GROUP_SIZE = 5;
    // prior to Chrome 37, content scripts don't run on about:blank
    // and about:srcdoc. So we have to apply element hiding and collapsing
    // from the parent frame, when inline frames are loaded.
    var match = navigator.userAgent.match(/\bChrome\/(\d+)/);
    var fixInlineFrames = match && parseInt(match[1]) < 37;

    // use Shadow DOM if available to don't mess with web pages that
    // rely on the order of their own <style> tags (#309). However we
    // must not create the shadow root in the response callback passed
    // to sendMessage(), otherwise Chrome breaks some websites (#450).
    var shadow = null;
    if ("createShadowRoot" in document.documentElement) {
        shadow = document.documentElement.createShadowRoot();
        shadow.appendChild(document.createElement("shadow"));
    }

    // Sets the currently used CSS rules for elemhide filters
    var setElemhideCSSRules = function (selectors) {
        if (selectors.length == 0)
            return;

        var style = document.createElement("style");
        style.setAttribute("type", "text/css");

        if (shadow) {
            shadow.appendChild(style);

            for (var i = 0; i < selectors.length; i++)
                selectors[i] = "::content " + selectors[i];
        }
        else {
            // Try to insert the style into the <head> tag, inserting directly under the
            // document root breaks dev tools functionality:
            // http://code.google.com/p/chromium/issues/detail?id=178109
            (document.head || document.documentElement).appendChild(style);
        }

        var setRules = function () {
            // The sheet property might not exist yet if the
            // <style> element was created for a sub frame
            if (!style.sheet) {
                setTimeout(setRules, 0);
                return;
            }

            // WebKit apparently chokes when the selector list in a CSS rule is huge.
            // So we split the elemhide selectors into groups.
            for (var i = 0; i < selectors.length; i++) {
                style.sheet.insertRule(selectors[i] + " { display: none !important; }", i);
                console.log(selectors[i]);
            }
        };

        setRules();
    };

    setElemhideCSSRules(selectors);
}

init(document);
