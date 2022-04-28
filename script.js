$("button").click(function() {
    let name = $(".name").val();
    let snack = $(".snack").val();
    $(".fullSentence").append(name + " ,your favorite snack is " + snack);

});