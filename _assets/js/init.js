//■page topボタン
$(function(){
	var topBtn=$('.page_top');

	// ◇ボタンをクリックしたら、スクロールして上に戻る
	topBtn.click(function(){
		$('body,html').animate({
			scrollTop: 0},500);
		return false;
	});

});
