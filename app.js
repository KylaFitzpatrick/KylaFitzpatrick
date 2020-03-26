$("#submit").on("click", function(){
    alert("clicked");
    $("#formGroupExampleInput").val();
    var body = $("#exampleFormControlTextarea1").val();
    $(this).attr("href", "mailto:kfitzpatrick44@gmail.com?subject=Mail from Our Site&body=" + body);
})
