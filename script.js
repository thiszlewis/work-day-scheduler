var saveBtn = $(".saveBtn");
var clearBtn = $("#clearFieldsBtn");
//import moment from "https://cdn.skypack.dev/moment@2.29.1";
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));

        // console.log(this); //each time-block

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// WHEN I click the save button for that time block
saveBtn.on("click", function() {

    // console.log(this); //save button
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    // THEN the text for that event is saved in local storage
    localStorage.setItem(time, plan);
});
function clearFieldsBtn() {
    var allInput = document.querySelectorAll(".plan");
    allInput.forEach(function(input){
        input.value =""
    })
    }
clearBtn.on("click",clearFieldsBtn)
// WHEN I refresh the page
// THEN the saved events persist
function usePlanner() {

    $(".hour").each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);

        // console.log(this);
        // console.log(currHour);

        if(currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    });
}

/**
 * CALL FUNCTIONS
 */

timeBlockColor();
usePlanner();



