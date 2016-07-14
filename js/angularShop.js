    // Khởi tạo mảng dữ liệu sản phẩm mới
    var products = [
        {id: "1", id_category: "spmoi", name: "Áo khoác cà rốt", old: "250000", new: "200000", imageUrl: "images/ao.jpg", imageUrlLarge: "images/zoom-ao.jpg"},
        {id: "2", id_category: "spmoi", name: "Giày Hello Kitty", old: "120000", new: "100000", imageUrl: "images/cc.jpg", imageUrlLarge: "images/zoom-cc.jpg"},
        {id: "3", id_category: "spmoi", name: "Bộ bé gái (hồng)", old: "90000", new: "70000", imageUrl: "images/a33.jpg", imageUrlLarge: "images/zoom-a33.jpg"},
        {id: "5", id_category: "spmoi", name: "Áo khoác ca rô", old: "250000", new: "200000", imageUrl: "images/ao2.jpg", imageUrlLarge: "images/zoom-ao.jpg"},
        {id: "6", id_category: "spmoi", name: "Giày thể thao YTH", old: "170000", new: "150000", imageUrl: "images/cc.jpg", imageUrlLarge: "images/zoom-cc.jpg"},
        {id: "7", id_category: "spmoi", name: "Bộ bé gái (hồng)", old: "90000", new: "70000", imageUrl: "images/a33.jpg", imageUrlLarge: "images/zoom-a33.jpg"},
        {id: "8", id_category: "boy", name: "Bộ bé trai TR03", old: "90000", new: "80000", imageUrl: "images/bo.jpg", imageUrlLarge: "images/zoom-bo.jpg"},
        {id: "9", id_category: "boy", name: "Bộ bé trai TR06", old: "90000", new: "80000", imageUrl: "images/bo4.jpg", imageUrlLarge: "images/zoom-bo4.jpg"},
        {id: "10", id_category: "boy", name: "Bộ bé trai TR04", old: "90000", new: "80000", imageUrl: "images/bo3.jpg", imageUrlLarge: "images/zoom-bo3.jpg"},
        {id: "11", id_category: "girl", name: "Váy vàng hoa đào V23", old: "250000", new: "200000", imageUrl: "images/v23.jpg", imageUrlLarge: "images/zoom-v23.jpg"},
        {id: "12", id_category: "girl", name: "Váy tầng V30", old: "230000", new: "185000", imageUrl: "images/v29.jpg", imageUrlLarge: "images/zoom-v29.jpg"},
        {id: "13", id_category: "girl", name: "Váy đỏ chấm bi V29", old: "250000", new: "170000", imageUrl: "images/v30.jpg", imageUrlLarge: "images/zoom-v30.jpg"},
        {id: "14", id_category: "shoe", name: "Bata Đỏ", old: "160000", new: "130000", imageUrl: "images/bbb.jpg", imageUrlLarge: "images/zoom-bbb.jpg"},
        {id: "15", id_category: "shoe", name: "Giày thể thao Nike", old: "270000", new: "240000", imageUrl: "images/bb.jpg", imageUrlLarge: "images/zoom-bb.jpg"},
        {id: "16", id_category: "shoe", name: "Bata trắng", old: "160000", new: "130000", imageUrl: "images/b.jpg", imageUrlLarge: "images/zoom-b.jpg"},
        {id: "17", id_category: "boy", name: "Bộ bé trai TR03", old: "90000", new: "80000", imageUrl: "images/bo.jpg", imageUrlLarge: "images/zoom-bo.jpg"},
        {id: "18", id_category: "boy", name: "Bộ bé trai TR06", old: "90000", new: "80000", imageUrl: "images/bo4.jpg", imageUrlLarge: "images/zoom-bo4.jpg"},
        {id: "19", id_category: "boy", name: "Bộ bé trai TR04", old: "90000", new: "80000", imageUrl: "images/bo3.jpg", imageUrlLarge: "images/zoom-bo3.jpg"},
        {id: "20", id_category: "girl", name: "Váy vàng hoa đào V23", old: "250000", new: "200000", imageUrl: "images/v23.jpg", imageUrlLarge: "images/zoom-v23.jpg"},
        {id: "21", id_category: "girl", name: "Váy tầng V30", old: "230000", new: "185000", imageUrl: "images/v29.jpg", imageUrlLarge: "images/zoom-v29.jpg"},
        {id: "22", id_category: "girl", name: "Váy đỏ chấm bi V29", old: "250000", new: "170000", imageUrl: "images/v30.jpg", imageUrlLarge: "images/zoom-v30.jpg"},
        {id: "23", id_category: "shoe", name: "Bata Đỏ", old: "160000", new: "130000", imageUrl: "images/bbb.jpg", imageUrlLarge: "images/zoom-bbb.jpg"},
        {id: "24", id_category: "shoe", name: "Giày thể thao Nike", old: "270000", new: "240000", imageUrl: "images/bb.jpg", imageUrlLarge: "images/zoom-bb.jpg"},
        {id: "25", id_category: "shoe", name: "Bata trắng", old: "160000", new: "130000", imageUrl: "images/b.jpg", imageUrlLarge: "images/zoom-b.jpg"},
    
    ];
    //mảng dữ liệu items
    var items = [
        {item: "Chúng tôi là..."},
        {item: "Đồ bộ bé trai"},
        {item: "Áo váy bé gái"},
        {item: "Trang phục trẻ sơ sinh"},
        {item: "Giày xinh cho bé yêu"},
        {item: "Phụ kiện dễ thương"},
        {item: "Khuyến mãi cực sốc"},
        {item: "Bài viết hay"},
        {item: "Chia sẻ thú vị"},
    ];
    //mảng dữ liệu bài viết mới
    var news = [
        {id: "13", title: "MỘT SỐ MẸO CHỌN GIÀY PHÙ HỢP CHO BÉ YÊU", imageUrl: "images/aa.jpg"},
        {id: "14", title: "NHỮNG GỢI Ý KHI CHỌN GIÀY DÉP CHO BÉ", imageUrl: "images/aaa.jpg"},
        {id: "15", title: "NHỮNG GỢI Ý KHI CHỌN GIÀY DÉP CHO BÉ", imageUrl: "images/saaa.jpg"},
    ];
    var colors = [
    {imageUrl: "images/small77.jpg"},
    {imageUrl: "images/small80.jpg"},
    {imageUrl: "images/small82.jpg"},
    {imageUrl: "images/small83.jpg"},
    {imageUrl: "images/small85.jpg"},
    {imageUrl: "images/small87.jpg"},
    {imageUrl: "images/small88.jpg"},
    {imageUrl: "images/small_hover393.jpg"},
    {imageUrl: "images/small_hover427.jpg"},
    {imageUrl: "images/small_hover429.jpg"},
    {imageUrl: "images/small_hover479.jpg"},
    {imageUrl: "images/small85.jpg"},
    {imageUrl: "images/small87.jpg"},
    {imageUrl: "images/small88.jpg"},
    ];
    var size = [
        {size: "S"},
        {size: "M"},
        {size: "L"},
        {size: "XL"},
        {size: "XXL"},
        {size: "27"},
        {size: "28"},
        {size: "29"},
        {size: "30"},
        {size: "31"},
        {size: "32"},
        {size: "33"},
        {size: "34"},
        {size: "35"},
        {size: "36"},
        {size: "38"},
        {size: "39"},
        {size: "40"},
        {size: "41"},
        {size: "42"},
    ];
    var prices = [
        {prices: " 0₫ - 100000₫"},
        {prices: " 100000₫ - 200000₫"},
        {prices: " 200000₫ - 300000₫"},
        {prices: " 300000₫ - 400000₫"},
        {prices: " 400000₫ - 500000₫"},
        {prices: " > 500000₫"},
    ];
    var ShopApp = angular.module("shopApp", []);
    ShopApp.controller("shopController", function($scope, $location){
        // Dùng để hiển thị sản phẩm ra
        $scope.products = products;
        $scope.items = items;
        $scope.news = news;

        $scope.colors = colors;
        $scope.size = size;
        $scope.prices = prices;
        $scope.submit = function() {
            if ($scope.myForm.$valid) {
              alert('Đăng ký thành công!');
              // $location.path('/login.html');
            }
        }
        // $scope.submit = function() {
        //     if ($scope.fogotPass.$valid) {
        //       alert('Xin vui lòng kiểm tra email. Chúng tôi đã gửi đường dẫn đặt lại mật khẩu!');
        //       //$location.path('login.html');
        //     }
        // }
        $scope.submit = function() {
            if ($scope.loginForm.$valid) {
              alert('Đăng nhập thành công!');
              $location.path('/home.html');
            }
        }
        
    })