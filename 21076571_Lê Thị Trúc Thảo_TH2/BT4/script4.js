function tinhBMI() {
    // Lấy giá trị cân nặng, chiều cao và tuổi từ các trường input
    var weight = parseFloat(document.getElementById("input-weight").value);
    var height = parseFloat(document.getElementById("input-height").value);
    var age = document.getElementById("input-age").value;

    // Kiểm tra xem cân nặng và chiều cao có hợp lệ không
    if (isNaN(weight) || isNaN(height)) {
        alert("Vui lòng nhập cân nặng và chiều cao hợp lệ.");
        return;
    }

    // Kiểm tra xem cân nặng và chiều cao có lớn hơn không không
    if (weight <= 0 || height <= 0) {
        alert("Cân nặng và chiều cao phải lớn hơn không.");
        return;
    }

    // Tính chỉ số BMI
    var bmi = weight / Math.pow(height / 100, 2);

    // Hiển thị kết quả
    var result = document.getElementById("result");
    result.innerHTML = "Chỉ số BMI của bạn là: " + bmi.toFixed(2);

    // Đưa ra đánh giá dựa trên chỉ số BMI
    var evaluation = "";
    if (bmi < 18.5) {
        evaluation = "Dưới chuẩn";
    } else if (bmi < 24.9) {
        evaluation = "Bình thường.";
    } else if (bmi < 29.9) {
        evaluation = "Thừa cân.";
    } else if (bmi < 34.9) {
        evaluation = "Béo phì cấp độ 1.";
        recommendation = "Khám định kỳ";
    } else if (bmi < 39.9) {
        evaluation = "Béo phì cấp độ 2.";
        recommendation = "Tập thể dục thường xuyên";
    } else {
        evaluation = "Béo phì cấp độ 3.";
        recommendation="Hạn chế ăn mỡ động vật"
    }

    result.innerHTML += "<br>" + evaluation  ;
    if (recommendation ) {
        result.innerHTML += "<br>" + recommendation;
    }

}
