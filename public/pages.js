console.log("Hello!");
console.log(document.getElementsByClassName("close-modal"));
// Hide modal on opening another modal
$('.close-modal').click(function() {
    console.log("Modal Close")
    $('#elegantModalForm').modal('hide');
  });


console.log(document.getElementsByClassName("close-modal"));
//   $('.close-modal', '#pwdModal').click(function() {
//     $('#pwdModal').modal('hide');
//   });


//Upon clicking sign up 