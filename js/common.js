$(document).ready(function() {

    /**
     * GoogleAdsenseを挿入する関数．
     */
    function appendGoogleAdsense() {
    	var adsense;
        // 記事ページは '.entry-content h3:first' の直前と，コメントの直後に配置．
		if(location.pathname.indexOf('/entry/') != -1){
	        adsense = '<div class="googleads googleads-entry-inner"><small>スポンサーリンク</small><br><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- shirokai-entry-inner --><ins class="adsbygoogle shirokai-entry-inner" style="display:block" data-ad-client="ca-pub-4408505087553412" data-ad-slot="3569368147" data-ad-format="auto"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>';
	        $(".entry-content h3:first").before(adsense);
	        adsense = '<div class="googleads googleads-entry-bottom"><small>スポンサーリンク</small><br><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- shirokai-entry-bottom --><ins class="adsbygoogle shirokai-entry-bottom" style="display:block" data-ad-client="ca-pub-4408505087553412" data-ad-slot="7057100947" data-ad-format="auto"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>';
	        $(".comment-box").after(adsense);
		}
        // それ以外はタイトル直下に配置．
		else{
	        adsense = '<div class="googleads googldads-home"><small>スポンサーリンク</small><br><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- shirokai-home --><ins class="adsbygoogle shirokai-home" style="display:block" data-ad-client="ca-pub-4408505087553412" data-ad-slot="8603720940" data-ad-format="auto"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>';
	        $("div.entry-content:first").prepend(adsense);
		}
    }

    /**
     * サイトタイトルの左横にロゴを挿入する．
     */
    function appendLogo() {
        $("h1#title").prepend('<img src="http://cdn.image.st-hatena.com/image/square/95f29186acff1a86c60f77f48913948009adfa19/backend=imagemagick;height=128;version=1;width=128/http%3A%2F%2Fcdn.mogile.archive.st-hatena.com%2Fv1%2Fimage%2Fshun9167%2F297794237582676386.png" style="width:38px;height:38px;"> ');
    }

    /**
     * 大見出しが2つ以上なら目次を<!--more-->直下に挿入する関数．
     */
    function appendSectionList() {
        var list = "";
        //大見出しを検索
        $(".entry-content h3").each(function(i) {
            var idName = "section" + i;
            $(this).attr("id", idName);
            list += '<li><a href="#' + idName + '">' + $(this).text() + '</a></li>';
        });
        //大見出しが2つ以上あったら目次を表示する
        if ($(".entry-content h3").length >= 2) {
            $(".entry-content p:first").after("<div class='sectionList'><h3>目次</h3><ol>" + list + "</ol></div>"); // <!--more-->直下に表示
        }
        //スクロールを滑らかにする
        $('.sectionList a').on("click", function() {
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top
            }, 600);
            return false;
        });
    }

	/**
	 * 記事ページ以外ではコメントを表示しない．
	 * 記事ページでは「コメント」とタイトルを表示させる．
	 */
	function showCommentOnlyEntry(){
		if(location.pathname.indexOf('/entry/') == -1){
			$(".comment-box").hide();
		}else{
			$(".comment-box").prepend('<div class="hatena-module-title">コメント</div>');
		}
	}

    /**
     * 実際に実行されるmain部分
     */
    appendGoogleAdsense();
    appendLogo();
    appendSectionList();
    showCommentOnlyEntry();

});
