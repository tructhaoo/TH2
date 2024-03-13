function guiFeedback() {
  var name = document.getElementById("input-name").value;
  var card = document.getElementById("input-card").value;
  var phone = document.getElementById("input-phone").value;
  var email = document.getElementById("input-email").value;
  var customerType = document.getElementById("input-customer-type").value;
  var invoice = document.getElementById("input-invoice").value;
  var description = document.querySelector("textarea[name='description']").value;

  var feedbackMessage =
                      "Họ và tên: " + name + "\n" +
                      "Mã thẻ: " + card + "\n" +
                      "Số điện thoại: " + phone + "\n" +
                      "E-mail: " + email + "\n" +
                      "Loại khách hàng: " + customerType + "\n" +
                      "Mã hóa đơn: " + invoice + "\n" +
                      "Mô tả: " + description;

  var confirmed = confirm(feedbackMessage);

  if (confirmed) {
      // Gửi dữ liệu đi (hoặc thực hiện các hành động khác)
      alert("Dữ liệu đã được gửi đi.");
  } else {
      alert("Hủy bỏ việc gửi dữ liệu.");
  }
}
