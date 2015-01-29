$(document).ready(function(){

//Buttons

 $("label.but").on("click", function(){
    if ($(".slide-background.present").hasClass("button-example")) {
        $(".slide-background.present").removeClass("button-example");
    } else {
        $(".slide-background.present").fadeToggle(450);
    }
 });

//Feedback
var feedbackExampleCount = 0;
 $("input[type='submit'].feedback-example").on("click", function(){
    $(".feedback-example .dialog").velocity("callout.shake");
    feedbackExampleCount++;
    if (feedbackExampleCount > 3) {
         $(".feedback-example .notice").fadeIn(400);
    }
 });

//Hierarchy

var layout = $(".layout"),
layoutHeader = $(".layout-header"),
layoutMenu = $(".layout"),
layoutItems = $(".layout-menu").children(".layout-items"),
layoutBody = $(".layout-body"),
layoutCopy = $(".layout-copy"),
layoutParagraphs = $("#description").children("li"),
layoutSidebar = $(".layout-sidebar"),
layoutComponent = $(".layout-component"),
layoutDiv = $(".layout div"),
tl;

var tl = new TimelineMax({delay:0});
tl.to(layout, 0, {rotationZ: 0, rotationX: -5, rotationY:-15, z:4, height:500, width: 500, margin: "40px auto", autoAlpha: 1})
 .from(layout, 1, {autoAlpha:0})
 .from(layoutHeader, 0.8, {width:0, autoAlpha:0})
 .staggerFrom(layoutItems, 0.25, {height:0, top:-400}, -0.1)
 .from(layoutBody, 0.3, {height:0, autoAlpha: 0, delay:0.25})
 .staggerFrom(layoutParagraphs, 0.25, {height: 0, autoAlpha: 0}, 0.075)
 .from(layoutSidebar, 0, {autoAlpha: 0})
 .staggerFrom(layoutComponent, 0.2, {width:0, height:0, autoAlpha: 0}, 0.2);
 tl.pause();

 $("#hierarchy").on("click", function(){
    if(tl.paused()) {
        tl.restart();
        tl.play();
    }
 });

});

