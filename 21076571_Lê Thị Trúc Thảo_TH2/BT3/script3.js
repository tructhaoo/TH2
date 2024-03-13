function guiFeedback() {
    var name = document.getElementById("input-name").value;
    var email = document.getElementById("input-email").value;
    var heading = document.getElementById("input-heading").value;
    var message = document.querySelector("textarea[name='description']").value;

    var feedbackMessage = 
                          "Họ và tên: " + name + "\n" +
                          "Địa chỉ E-mail: " + email + "\n" +
                          "Tiêu đề bài viết: " + heading + "\n" +
                          "Nội dung góp ý: " +"\n" + message;

    var confirmed = confirm(feedbackMessage);

    if (confirmed) {
        alert("Tin nhắn của bạn đã được gửi đi.");
    } else {
        alert("Hủy bỏ việc gửi tin nhắn.");
    }
}
